function lerp(a, b, t) {
    return a + (b - a) * t;
}
// Cache for parsed hex colors to avoid repeated regex parsing
const parsedColorCache = new Map();
function parseHexColor(hex) {
    const cached = parsedColorCache.get(hex);
    if (cached)
        return cached;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
    const parsed = result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
            result[4] !== undefined ? parseInt(result[4], 16) / 255 : 1,
        ]
        : [0, 0, 0, 1];
    // Limit cache size to prevent memory leaks
    if (parsedColorCache.size > 1000) {
        const firstKey = parsedColorCache.keys().next().value;
        if (firstKey)
            parsedColorCache.delete(firstKey);
    }
    parsedColorCache.set(hex, parsed);
    return parsed;
}
function interpolateColor(color1, color2, t) {
    const [r1, g1, b1, a1] = parseHexColor(color1);
    const [r2, g2, b2, a2] = parseHexColor(color2);
    const a = lerp(a1, a2, t);
    if (a < 1) {
        return `rgba(${Math.round(lerp(r1, r2, t))}, ${Math.round(lerp(g1, g2, t))}, ${Math.round(lerp(b1, b2, t))}, ${parseFloat(a.toFixed(3))})`;
    }
    return `rgb(${Math.round(lerp(r1, r2, t))}, ${Math.round(lerp(g1, g2, t))}, ${Math.round(lerp(b1, b2, t))})`;
}
/**
 * Get color at position t (0-1) from an array of colors
 */
export function getColorAtPosition(colors, t) {
    if (colors.length === 0)
        return '#000000';
    if (colors.length === 1)
        return colors[0];
    // Clamp t to [0, 1]
    t = Math.max(0, Math.min(1, t));
    // Calculate which segment we're in
    const segmentCount = colors.length - 1;
    const segment = Math.min(Math.floor(t * segmentCount), segmentCount - 1);
    const segmentT = (t * segmentCount) - segment;
    return interpolateColor(colors[segment], colors[segment + 1], segmentT);
}
/**
 * Convert a StartPosition to a normalized offset (0-1) along the path
 */
export function getStartOffset(position, width, height, radius) {
    var _a;
    if (typeof position === 'number') {
        return Math.max(0, Math.min(1, position));
    }
    // Calculate the perimeter to determine position offsets
    const r = Math.min(radius, width / 2, height / 2);
    const cornerArc = (Math.PI * r) / 2;
    const topEdge = width - 2 * r;
    const rightEdge = height - 2 * r;
    const bottomEdge = width - 2 * r;
    const leftEdge = height - 2 * r;
    const perimeter = topEdge + rightEdge + bottomEdge + leftEdge + 4 * cornerArc;
    // Path starts at top-left corner (after the radius), goes clockwise
    const positions = {
        'top-left': 0,
        'top': (topEdge / 2) / perimeter,
        'top-right': (topEdge + cornerArc) / perimeter,
        'right': (topEdge + cornerArc + rightEdge / 2) / perimeter,
        'bottom-right': (topEdge + cornerArc + rightEdge + cornerArc) / perimeter,
        'bottom': (topEdge + cornerArc + rightEdge + cornerArc + bottomEdge / 2) / perimeter,
        'bottom-left': (topEdge + cornerArc + rightEdge + cornerArc + bottomEdge + cornerArc) / perimeter,
        'left': (topEdge + cornerArc + rightEdge + cornerArc + bottomEdge + cornerArc + leftEdge / 2) / perimeter,
    };
    return (_a = positions[position]) !== null && _a !== void 0 ? _a : 0;
}
/**
 * Get point at position t (0-1) along a rounded rectangle path.
 * Pure math - no DOM manipulation required.
 */
function getPointOnRoundedRect(t, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    const cornerArc = (Math.PI * r) / 2;
    const topEdge = width - 2 * r;
    const rightEdge = height - 2 * r;
    const bottomEdge = width - 2 * r;
    const leftEdge = height - 2 * r;
    const perimeter = topEdge + rightEdge + bottomEdge + leftEdge + 4 * cornerArc;
    // Distance along the path
    let d = (t % 1) * perimeter;
    if (d < 0)
        d += perimeter;
    // Top edge (from top-left corner end to top-right corner start)
    if (d < topEdge) {
        return { x: r + d, y: 0 };
    }
    d -= topEdge;
    // Top-right corner
    if (d < cornerArc) {
        const angle = d / r; // 0 to PI/2
        return {
            x: width - r + Math.sin(angle) * r,
            y: r - Math.cos(angle) * r,
        };
    }
    d -= cornerArc;
    // Right edge
    if (d < rightEdge) {
        return { x: width, y: r + d };
    }
    d -= rightEdge;
    // Bottom-right corner
    if (d < cornerArc) {
        const angle = d / r;
        return {
            x: width - r + Math.cos(angle) * r,
            y: height - r + Math.sin(angle) * r,
        };
    }
    d -= cornerArc;
    // Bottom edge
    if (d < bottomEdge) {
        return { x: width - r - d, y: height };
    }
    d -= bottomEdge;
    // Bottom-left corner
    if (d < cornerArc) {
        const angle = d / r;
        return {
            x: r - Math.sin(angle) * r,
            y: height - r + Math.cos(angle) * r,
        };
    }
    d -= cornerArc;
    // Left edge
    if (d < leftEdge) {
        return { x: 0, y: height - r - d };
    }
    d -= leftEdge;
    // Top-left corner (completes the loop)
    const angle = d / r;
    return {
        x: r - Math.cos(angle) * r,
        y: r - Math.sin(angle) * r,
    };
}
/**
 * Parse a CSS length value to pixels.
 * Supports: numbers (treated as px), "10px", "1rem", "0.5em"
 * Note: rem/em are approximated (1rem = 16px)
 */
export function parseCssLength(value) {
    if (typeof value === 'number')
        return value;
    const match = value.match(/^(-?[\d.]+)(px|rem|em)?$/);
    if (!match)
        return 0;
    const num = parseFloat(match[1]);
    const unit = match[2] || 'px';
    switch (unit) {
        case 'rem':
        case 'em':
            return num * 16; // Approximate
        case 'px':
        default:
            return num;
    }
}
export function generateLines(width, height, borderRadius, segments, colors, startOffset, strokeWidth, borderPosition, borderOffset) {
    const lines = [];
    // Calculate total offset from element edge
    // Inner: starts at -strokeWidth/2 (inside), Outer: starts at +strokeWidth/2 (outside)
    // Then add user's borderOffset (positive = outward, negative = inward)
    const baseOffset = borderPosition === 'outer' ? strokeWidth / 2 : -strokeWidth / 2;
    const totalOffset = baseOffset + borderOffset;
    // Calculate path dimensions based on total offset
    // Positive offset = path is outside element edge = larger path
    // Negative offset = path is inside element edge = smaller path
    const pathWidth = width + totalOffset * 2;
    const pathHeight = height + totalOffset * 2;
    const pathRadius = Math.max(0, borderRadius + totalOffset);
    for (let i = 0; i < segments; i++) {
        const t1 = ((i / segments) + startOffset) % 1;
        const t2 = (((i + 1) / segments) + startOffset) % 1;
        const p1 = getPointOnRoundedRect(t1, pathWidth, pathHeight, pathRadius);
        const p2 = getPointOnRoundedRect(t2, pathWidth, pathHeight, pathRadius);
        const colorT = i / segments;
        // Translate points: path is centered at (-totalOffset, -totalOffset) relative to element
        // So we shift by -totalOffset to position correctly
        const shift = -totalOffset;
        lines.push({
            x1: p1.x + shift,
            y1: p1.y + shift,
            x2: p2.x + shift,
            y2: p2.y + shift,
            color: getColorAtPosition(colors, colorT),
        });
    }
    return lines;
}
