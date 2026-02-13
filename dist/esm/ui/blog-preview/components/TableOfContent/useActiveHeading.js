// hooks/useActiveHeading.ts
import { useEffect, useState, useCallback, useRef } from 'react';
function getScrollParent(node) {
    if (!node)
        return window;
    let current = node.parentElement;
    while (current) {
        const { overflow, overflowY } = getComputedStyle(current);
        if (/(auto|scroll)/.test(overflow + overflowY)) {
            return current;
        }
        current = current.parentElement;
    }
    return window;
}
export function useActiveHeading(headingIds) {
    const [activeId, setActiveId] = useState('');
    const scrollParentRef = useRef(window);
    const getActiveHeading = useCallback(() => {
        if (headingIds.length === 0)
            return '';
        // Get all heading elements with their positions
        const headingPositions = headingIds
            .map((id) => {
            const element = document.getElementById(id);
            if (!element)
                return null;
            const rect = element.getBoundingClientRect();
            return { id, top: rect.top };
        })
            .filter((item) => item !== null);
        if (headingPositions.length === 0)
            return '';
        // Offset from top of viewport where we consider a heading "active"
        const offset = 100;
        // Find the last heading that has scrolled past the offset point
        let activeHeading = '';
        for (const heading of headingPositions) {
            if (heading.top <= offset) {
                activeHeading = heading.id;
            }
            else {
                break;
            }
        }
        // If no heading has passed the offset, check if we're close to the first one
        if (!activeHeading && headingPositions.length > 0) {
            const firstHeading = headingPositions[0];
            // If first heading is within viewport, consider it active
            if (firstHeading.top < window.innerHeight * 0.5) {
                activeHeading = firstHeading.id;
            }
        }
        return activeHeading;
    }, [headingIds]);
    useEffect(() => {
        if (headingIds.length === 0)
            return;
        // Find the nearest scrollable ancestor of the first heading
        const firstEl = document.getElementById(headingIds[0]);
        const scrollParent = getScrollParent(firstEl);
        scrollParentRef.current = scrollParent;
        const handleScroll = () => {
            const newActiveId = getActiveHeading();
            setActiveId(newActiveId);
        };
        // Initial check
        handleScroll();
        scrollParent.addEventListener('scroll', handleScroll, { passive: true });
        // Also listen to window in case both fire
        if (scrollParent !== window) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => {
            scrollParent.removeEventListener('scroll', handleScroll);
            if (scrollParent !== window) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [headingIds, getActiveHeading]);
    return activeId;
}
