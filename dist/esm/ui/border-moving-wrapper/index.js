"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState, useLayoutEffect, useCallback, useMemo, useId } from 'react';
import { BorderSvg } from './border-svg';
import { getColorAtPosition, getStartOffset, generateLines, parseCssLength, } from './utils';
const BorderMovingWrapper = ({ children, colors = ['#0066ff', '#ffdd00'], startPosition = 'top-left', strokeWidth = 2, lineCapStart = 'square', lineCapEnd = 'square', borderRadius = 12, segments = 200, duration = 2000, animate = true, trigger = 'mount', animationMode = 'once', variant = 'default', reverse = false, active: manualActive, showWhenInactive = false, lazy = true, lazyRootMargin = '100px', resizeThrottle = 150, ants = false, antsDashWidth = 20, antsGapWidth = 16, antsSpeed = 250, borderPosition = 'inner', borderOffset = 0, style = {}, className = '', }) => {
    const containerRef = useRef(null);
    const clipId = useId();
    const [lines, setLines] = useState([]);
    const [visibleCount, setVisibleCount] = useState(animate ? 0 : segments);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [isInViewport, setIsInViewport] = useState(!lazy);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [loopOffset, setLoopOffset] = useState(0);
    const antsGroupRef = useRef(null);
    const antsStartTimeRef = useRef(null);
    const lastResizeRef = useRef(0);
    const trailingResizeRef = useRef(null);
    const hasBeenVisible = useRef(false);
    const animationStarted = useRef(false);
    const [animationCompleted, setAnimationCompleted] = useState(!animate);
    // Determine if border should be active based on trigger
    const isActive = (() => {
        switch (trigger) {
            case 'hover': return isHovered;
            case 'focus': return isFocused;
            case 'click': return isClicked;
            case 'manual': return manualActive !== null && manualActive !== void 0 ? manualActive : false;
            case 'mount':
            default: return true;
        }
    })();
    const shouldShowBorder = isActive || showWhenInactive;
    const colorsKey = useMemo(() => colors.join(','), [colors]);
    // Throttled resize handler
    const throttledSetSize = useCallback((newSize) => {
        const now = Date.now();
        const timeSinceLastResize = now - lastResizeRef.current;
        if (timeSinceLastResize >= resizeThrottle) {
            lastResizeRef.current = now;
            setSize(newSize);
        }
        else {
            if (trailingResizeRef.current) {
                clearTimeout(trailingResizeRef.current);
            }
            trailingResizeRef.current = setTimeout(() => {
                lastResizeRef.current = Date.now();
                setSize(newSize);
            }, resizeThrottle - timeSinceLastResize);
        }
    }, [resizeThrottle]);
    // Lazy loading with IntersectionObserver
    useEffect(() => {
        if (!lazy || !containerRef.current) {
            setIsInViewport(true);
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsInViewport(true);
                hasBeenVisible.current = true;
            }
        }, { rootMargin: lazyRootMargin, threshold: 0 });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [lazy, lazyRootMargin]);
    // Measure container size with ResizeObserver
    useLayoutEffect(() => {
        if (!containerRef.current || !isInViewport)
            return;
        const measure = () => {
            const el = containerRef.current;
            if (!el)
                return;
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            if (width > 0 && height > 0) {
                throttledSetSize({ width, height });
            }
        };
        const el = containerRef.current;
        if (el) {
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            if (width > 0 && height > 0) {
                setSize({ width, height });
            }
        }
        const observer = new ResizeObserver(measure);
        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
            if (trailingResizeRef.current) {
                clearTimeout(trailingResizeRef.current);
            }
        };
    }, [throttledSetSize, isInViewport]);
    const parsedBorderOffset = useMemo(() => parseCssLength(borderOffset), [borderOffset]);
    // Auto-scale segments based on perimeter
    const effectiveSegments = useMemo(() => {
        if (size.width === 0 || size.height === 0)
            return segments;
        const perimeter = 2 * (size.width + size.height);
        const autoSegments = Math.ceil(perimeter / 3);
        return Math.max(segments, Math.min(autoSegments, 1000));
    }, [size.width, size.height, segments]);
    // Generate line segments
    useEffect(() => {
        if (size.width === 0 || size.height === 0 || !isInViewport)
            return;
        const startOffset = getStartOffset(startPosition, size.width, size.height, borderRadius);
        const newLines = generateLines(size.width, size.height, borderRadius, effectiveSegments, colors, startOffset, strokeWidth, borderPosition, parsedBorderOffset);
        setLines(newLines);
        setVisibleCount(animate ? 0 : effectiveSegments);
    }, [size.width, size.height, borderRadius, effectiveSegments, colorsKey, startPosition, animate, strokeWidth, isInViewport, borderPosition, parsedBorderOffset]);
    // Reset animation when becoming active
    useEffect(() => {
        if (isActive && animate && !animationStarted.current) {
            setVisibleCount(0);
            setAnimationCompleted(false);
            animationStarted.current = true;
        }
        else if (!isActive) {
            animationStarted.current = false;
            setAnimationCompleted(false);
            if (!showWhenInactive)
                setVisibleCount(0);
        }
    }, [isActive, animate, showWhenInactive]);
    // Handle animation - draw once or loop
    useEffect(() => {
        if (!isActive || !animate || lines.length === 0 || !isInViewport)
            return;
        const startTime = performance.now();
        let frameId;
        if (animationMode === 'loop') {
            const tick = (now) => {
                const elapsed = now - startTime;
                setLoopOffset((elapsed / duration) % 1);
                setVisibleCount(effectiveSegments);
                frameId = requestAnimationFrame(tick);
            };
            frameId = requestAnimationFrame(tick);
        }
        else {
            const tick = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setVisibleCount(Math.floor(progress * effectiveSegments));
                if (progress < 1) {
                    frameId = requestAnimationFrame(tick);
                }
                else {
                    setAnimationCompleted(true);
                }
            };
            frameId = requestAnimationFrame(tick);
        }
        return () => cancelAnimationFrame(frameId);
    }, [lines, duration, effectiveSegments, animate, isInViewport, isActive, animationMode]);
    // Display lines with colors adjusted for animation mode/variant
    const displayLines = useMemo(() => {
        if (animationMode === 'loop' && isActive) {
            const direction = reverse ? 1 : -1;
            return lines.map((line, i) => (Object.assign(Object.assign({}, line), { color: getColorAtPosition(colors, ((i / effectiveSegments) + direction * loopOffset + 1) % 1) })));
        }
        if (variant === 'split') {
            const halfSegments = effectiveSegments / 2;
            return lines.map((line, i) => (Object.assign(Object.assign({}, line), { color: getColorAtPosition(colors, i < halfSegments
                    ? i / halfSegments
                    : (effectiveSegments - 1 - i) / halfSegments) })));
        }
        return lines;
    }, [animationMode, isActive, lines, colors, effectiveSegments, loopOffset, reverse, variant]);
    // Ants marching animation
    useEffect(() => {
        if (!ants || !isActive || !isInViewport || !antsGroupRef.current) {
            antsStartTimeRef.current = null;
            return;
        }
        const group = antsGroupRef.current;
        const lineElements = Array.from(group.querySelectorAll('line'));
        if (lineElements.length === 0)
            return;
        const cumulativeLengths = [];
        let cumulative = 0;
        for (const line of lineElements) {
            const x1 = parseFloat(line.getAttribute('x1') || '0');
            const y1 = parseFloat(line.getAttribute('y1') || '0');
            const x2 = parseFloat(line.getAttribute('x2') || '0');
            const y2 = parseFloat(line.getAttribute('y2') || '0');
            cumulativeLengths.push(cumulative);
            cumulative += Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        }
        const dashCycle = antsDashWidth + antsGapWidth;
        const numLines = lineElements.length;
        const direction = reverse ? 1 : -1;
        const prevVisible = lineElements.map(line => line.style.opacity !== '0');
        let frameId;
        if (antsStartTimeRef.current === null) {
            antsStartTimeRef.current = performance.now();
        }
        const tick = (now) => {
            const offset = ((now - antsStartTimeRef.current) / antsSpeed) * dashCycle;
            for (let i = 0; i < numLines; i++) {
                const drawInVisible = lineElements[i].getAttribute('data-visible') === '1';
                const isTip = lineElements[i].getAttribute('data-tip') === '1';
                if (!drawInVisible) {
                    if (prevVisible[i] !== false) {
                        lineElements[i].style.opacity = '0';
                        prevVisible[i] = false;
                    }
                    continue;
                }
                if (isTip) {
                    if (prevVisible[i] !== true) {
                        lineElements[i].style.opacity = '1';
                        prevVisible[i] = true;
                    }
                    continue;
                }
                const positionInCycle = ((cumulativeLengths[i] + direction * offset) % dashCycle + dashCycle) % dashCycle;
                const isVisible = positionInCycle < antsDashWidth;
                if (isVisible !== prevVisible[i]) {
                    lineElements[i].style.opacity = isVisible ? '1' : '0';
                    prevVisible[i] = isVisible;
                }
            }
            frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [ants, antsDashWidth, antsGapWidth, antsSpeed, isActive, isInViewport, displayLines, reverse]);
    // Event handlers
    const handleMouseEnter = trigger === 'hover' ? () => setIsHovered(true) : undefined;
    const handleMouseLeave = trigger === 'hover' ? () => setIsHovered(false) : undefined;
    const handleFocus = trigger === 'focus' ? () => setIsFocused(true) : undefined;
    const handleBlur = trigger === 'focus' ? () => setIsFocused(false) : undefined;
    const handleClick = trigger === 'click' ? () => setIsClicked(prev => !prev) : undefined;
    return (_jsxs("div", { ref: containerRef, className: className, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, onClick: handleClick, style: Object.assign({ position: 'relative', display: 'inline-block', cursor: trigger === 'click' ? 'pointer' : undefined }, style), children: [children, size.width > 0 && displayLines.length > 0 && shouldShowBorder && (_jsx(BorderSvg, { clipId: clipId, size: size, displayLines: displayLines, visibleCount: visibleCount, effectiveSegments: effectiveSegments, animationCompleted: animationCompleted, strokeWidth: strokeWidth, borderRadius: borderRadius, lineCapStart: lineCapStart, lineCapEnd: lineCapEnd, animationMode: animationMode, variant: variant, reverse: reverse, animate: animate, ants: ants, parsedBorderOffset: parsedBorderOffset, borderPosition: borderPosition, antsGroupRef: antsGroupRef }))] }));
};
export { BorderMovingWrapper };
