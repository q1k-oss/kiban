import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BorderSvg = ({ clipId, size, displayLines, visibleCount, effectiveSegments, animationCompleted, strokeWidth, borderRadius, lineCapStart, lineCapEnd, animationMode, variant, reverse, animate, ants, parsedBorderOffset, borderPosition, antsGroupRef, }) => {
    const baseOffset = borderPosition === 'outer' ? strokeWidth / 2 : -strokeWidth / 2;
    const totalOffset = baseOffset + parsedBorderOffset;
    const expansion = Math.max(0, totalOffset + strokeWidth / 2);
    const svgWidth = size.width + expansion * 2;
    const svgHeight = size.height + expansion * 2;
    const shouldClip = totalOffset < 0;
    return (_jsxs("svg", { "aria-hidden": "true", style: {
            position: 'absolute',
            top: -expansion,
            left: -expansion,
            width: svgWidth,
            height: svgHeight,
            pointerEvents: 'none',
            overflow: 'visible',
            zIndex: 1,
        }, viewBox: `${-expansion} ${-expansion} ${svgWidth} ${svgHeight}`, children: [_jsx("defs", { children: _jsx("clipPath", { id: clipId, children: _jsx("rect", { x: "0", y: "0", width: size.width, height: size.height, rx: Math.min(borderRadius, size.width / 2, size.height / 2), ry: Math.min(borderRadius, size.width / 2, size.height / 2) }) }) }), _jsx("g", { clipPath: shouldClip ? `url(#${clipId})` : undefined, ref: antsGroupRef, children: displayLines.map((line, i) => {
                    const isLoop = animationMode === 'loop';
                    const isSplit = variant === 'split';
                    let visible;
                    let isTip;
                    let isFirstHalf;
                    if (isLoop) {
                        visible = true;
                        isTip = false;
                        isFirstHalf = false;
                    }
                    else if (isSplit) {
                        const halfCount = Math.floor(visibleCount / 2);
                        const forwardTip = Math.min(halfCount, Math.floor(effectiveSegments / 2) - 1);
                        const backwardTip = Math.max(effectiveSegments - 1 - halfCount, Math.floor(effectiveSegments / 2));
                        visible = i <= forwardTip || i >= backwardTip;
                        isTip = i === forwardTip || i === backwardTip;
                        isFirstHalf = i <= Math.floor(effectiveSegments / 4) || i >= effectiveSegments - Math.floor(effectiveSegments / 4);
                    }
                    else if (reverse) {
                        const tipIndex = Math.max(effectiveSegments - 1 - visibleCount, 0);
                        visible = i >= effectiveSegments - 1 - visibleCount;
                        isTip = i === tipIndex;
                        isFirstHalf = i > effectiveSegments / 2;
                    }
                    else {
                        const tipIndex = Math.min(visibleCount, effectiveSegments - 1);
                        visible = i <= visibleCount;
                        isTip = i === tipIndex;
                        isFirstHalf = i < effectiveSegments / 2;
                    }
                    let segmentLineCap = ants ? lineCapEnd : 'round';
                    if (!isLoop && !ants) {
                        if (isTip) {
                            segmentLineCap = lineCapEnd;
                        }
                        else if (!animationCompleted && isFirstHalf) {
                            segmentLineCap = lineCapStart;
                        }
                    }
                    return (_jsx("line", { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2, stroke: line.color, strokeWidth: strokeWidth, strokeLinecap: segmentLineCap, "data-visible": visible ? '1' : '0', "data-tip": isTip ? '1' : '0', style: {
                            opacity: visible ? 1 : 0,
                            transition: !animate ? 'none' : undefined,
                        } }, `main-${i}`));
                }) })] }));
};
export { BorderSvg };
