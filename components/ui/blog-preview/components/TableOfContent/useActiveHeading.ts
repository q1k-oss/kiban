// hooks/useActiveHeading.ts
import { useEffect, useState, useCallback } from 'react';

export function useActiveHeading(headingIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  const getActiveHeading = useCallback(() => {
    if (headingIds.length === 0) return '';

    // Get all heading elements with their positions
    const headingPositions = headingIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return { id, top: rect.top };
      })
      .filter((item): item is { id: string; top: number } => item !== null);

    if (headingPositions.length === 0) return '';

    // Offset from top of viewport where we consider a heading "active"
    const offset = 100;

    // Find the last heading that has scrolled past the offset point
    let activeHeading = '';
    for (const heading of headingPositions) {
      if (heading.top <= offset) {
        activeHeading = heading.id;
      } else {
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
    if (headingIds.length === 0) return;

    const handleScroll = () => {
      const newActiveId = getActiveHeading();
      setActiveId(newActiveId);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headingIds, getActiveHeading]);

  return activeId;
}