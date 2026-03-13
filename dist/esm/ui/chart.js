"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { curveMonotoneX, curveLinear, curveStep, curveBasis } from "@visx/curve";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { GridRows, GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleLinear, scaleOrdinal, scaleBand } from "@visx/scale";
import { LinePath, AreaClosed } from "@visx/shape";
import { Bar } from "@visx/shape";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import * as React from "react";
import { cn } from "../utils";
// ─── Hook: measure container width ──────────────────────────────────────────
function useContainerWidth() {
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                if (w > 0)
                    setWidth(w);
            }
        });
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.width > 0)
            setWidth(rect.width);
        return () => observer.disconnect();
    }, []);
    return { ref, width };
}
// ─── Defaults ────────────────────────────────────────────────────────────────
const DEFAULT_MARGIN = { top: 20, right: 20, bottom: 40, left: 50 };
const DEFAULT_GRID = {
    rowStroke: "currentColor",
    rowStrokeOpacity: 0.15,
    rowStrokeDasharray: "4",
    columnStroke: "currentColor",
    columnStrokeOpacity: 0.1,
    columnStrokeDasharray: "4",
};
const DEFAULT_AXIS = {
    stroke: "currentColor",
    tickStroke: "currentColor",
    labelColor: "currentColor",
    labelFontSize: 11,
};
const DEFAULT_BAR = {
    borderRadius: 4,
    opacity: 0.9,
    padding: 0.3,
};
const DEFAULT_LINE = {
    strokeWidth: 2,
    strokeLinecap: "round",
};
const DEFAULT_POINT = {
    show: true,
    radius: 3,
    strokeColor: "currentColor",
    strokeWidth: 2,
};
const DEFAULT_AREA_GRADIENT = {
    fromOpacity: 0.4,
    toOpacity: 0.05,
};
const DEFAULT_TOOLTIP_STYLES = {};
// ─── Curve map ───────────────────────────────────────────────────────────────
const curveMap = {
    monotone: curveMonotoneX,
    linear: curveLinear,
    step: curveStep,
    basis: curveBasis,
};
function InnerChart({ data, config, width, height }) {
    const { type = "line", series, showGrid = true, showAxis = true, showTooltip: enableTooltip = true, margin = DEFAULT_MARGIN, } = config;
    const grid = Object.assign(Object.assign({}, DEFAULT_GRID), config.grid);
    const xAxisCfg = Object.assign(Object.assign({}, DEFAULT_AXIS), config.xAxis);
    const yAxisCfg = Object.assign(Object.assign({}, DEFAULT_AXIS), config.yAxis);
    const barCfg = Object.assign(Object.assign({}, DEFAULT_BAR), config.bar);
    const lineCfg = Object.assign(Object.assign({}, DEFAULT_LINE), config.line);
    const pointCfg = Object.assign(Object.assign({}, DEFAULT_POINT), config.point);
    const gradientCfg = Object.assign(Object.assign({}, DEFAULT_AREA_GRADIENT), config.areaGradient);
    const tipStyles = Object.assign(Object.assign(Object.assign({}, defaultStyles), DEFAULT_TOOLTIP_STYLES), config.tooltipStyles);
    const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip, } = useTooltip();
    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        scroll: true,
    });
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    if (innerWidth <= 0 || innerHeight <= 0)
        return null;
    const xScale = scaleBand({
        domain: data.map((d) => d.label),
        range: [0, innerWidth],
        padding: type === "bar" ? barCfg.padding : 0,
    });
    const allValues = data.flatMap((d) => series.map((s) => Number(d[s.dataKey]) || 0));
    const yMax = Math.max(...allValues);
    const yScale = scaleLinear({
        domain: [0, yMax * 1.1],
        range: [innerHeight, 0],
        nice: true,
    });
    const handleTooltip = (event) => {
        if (!enableTooltip)
            return;
        const point = localPoint(event);
        if (!point)
            return;
        const x = point.x - margin.left;
        const bandWidth = xScale.bandwidth();
        const index = Math.floor(x / (bandWidth + xScale.padding() * bandWidth));
        const datum = data[Math.min(Math.max(index, 0), data.length - 1)];
        if (datum) {
            showTooltip({
                tooltipData: datum,
                tooltipLeft: point.x,
                tooltipTop: point.y,
            });
        }
    };
    return (_jsxs("div", { ref: containerRef, style: { position: "relative" }, children: [_jsxs("svg", { width: width, height: height, children: [series.map((s, i) => (_jsx(LinearGradient, { id: `area-gradient-${i}`, from: s.color, to: s.color, fromOpacity: gradientCfg.fromOpacity, toOpacity: gradientCfg.toOpacity }, `gradient-${i}`))), _jsxs(Group, { left: margin.left, top: margin.top, children: [showGrid && (_jsxs(_Fragment, { children: [_jsx(GridRows, { scale: yScale, width: innerWidth, stroke: grid.rowStroke, strokeOpacity: grid.rowStrokeOpacity, strokeDasharray: grid.rowStrokeDasharray }), _jsx(GridColumns, { scale: xScale, height: innerHeight, stroke: grid.columnStroke, strokeOpacity: grid.columnStrokeOpacity, strokeDasharray: grid.columnStrokeDasharray, offset: xScale.bandwidth() / 2 })] })), type === "bar" &&
                                series.map((s) => data.map((d, i) => {
                                    var _a;
                                    const barWidth = xScale.bandwidth() / series.length;
                                    const seriesIndex = series.indexOf(s);
                                    const barX = ((_a = xScale(d.label)) !== null && _a !== void 0 ? _a : 0) + barWidth * seriesIndex;
                                    const barY = yScale(Number(d[s.dataKey]) || 0);
                                    const barHeight = innerHeight - barY;
                                    return (_jsx(Bar, { x: barX, y: barY, width: barWidth, height: barHeight, fill: s.color, rx: barCfg.borderRadius, opacity: barCfg.opacity }, `bar-${s.dataKey}-${i}`));
                                })), type === "area" &&
                                series.map((s, i) => (_jsx(AreaClosed, { data: data, x: (d) => { var _a; return ((_a = xScale(d.label)) !== null && _a !== void 0 ? _a : 0) + xScale.bandwidth() / 2; }, y: (d) => yScale(Number(d[s.dataKey]) || 0), yScale: yScale, curve: curveMap[s.curveType || "monotone"], fill: `url(#area-gradient-${i})`, stroke: s.color, strokeWidth: lineCfg.strokeWidth }, `area-${s.dataKey}`))), (type === "line" || type === "area") &&
                                series.map((s) => (_jsx(LinePath, { data: data, x: (d) => { var _a; return ((_a = xScale(d.label)) !== null && _a !== void 0 ? _a : 0) + xScale.bandwidth() / 2; }, y: (d) => yScale(Number(d[s.dataKey]) || 0), curve: curveMap[s.curveType || "monotone"], stroke: s.color, strokeWidth: lineCfg.strokeWidth, strokeLinecap: lineCfg.strokeLinecap }, `line-${s.dataKey}`))), (type === "line" || type === "area") &&
                                pointCfg.show &&
                                series.map((s) => data.map((d, i) => {
                                    var _a;
                                    return (_jsx("circle", { cx: ((_a = xScale(d.label)) !== null && _a !== void 0 ? _a : 0) + xScale.bandwidth() / 2, cy: yScale(Number(d[s.dataKey]) || 0), r: pointCfg.radius, fill: s.color, stroke: pointCfg.strokeColor, strokeWidth: pointCfg.strokeWidth }, `point-${s.dataKey}-${i}`));
                                })), showAxis && (_jsxs(_Fragment, { children: [_jsx(AxisBottom, { top: innerHeight, scale: xScale, stroke: xAxisCfg.stroke, tickStroke: xAxisCfg.tickStroke, tickLabelProps: {
                                            fill: xAxisCfg.labelColor,
                                            fontSize: xAxisCfg.labelFontSize,
                                            textAnchor: "middle",
                                        } }), _jsx(AxisLeft, { scale: yScale, stroke: yAxisCfg.stroke, tickStroke: yAxisCfg.tickStroke, tickLabelProps: {
                                            fill: yAxisCfg.labelColor,
                                            fontSize: yAxisCfg.labelFontSize,
                                            textAnchor: "end",
                                            dx: -4,
                                            dy: 4,
                                        } })] })), _jsx("rect", { width: innerWidth, height: innerHeight, fill: "transparent", onMouseMove: handleTooltip, onMouseLeave: hideTooltip, onTouchMove: handleTooltip, onTouchEnd: hideTooltip })] })] }), enableTooltip && tooltipOpen && tooltipData && (_jsxs(TooltipInPortal, { left: tooltipLeft, top: tooltipTop, style: Object.assign(Object.assign({}, defaultStyles), tipStyles), className: "kiban-chart-tooltip", children: [_jsx("div", { className: "font-medium mb-1", children: tooltipData.label }), series.map((s) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-2 w-2 rounded-full shrink-0", style: { backgroundColor: s.color } }), _jsxs("span", { className: "opacity-70", children: [s.name || s.dataKey, ":"] }), _jsx("span", { className: "font-mono font-medium", children: Number(tooltipData[s.dataKey] || 0).toLocaleString() })] }, s.dataKey)))] }))] }));
}
// ─── Chart Container ─────────────────────────────────────────────────────────
function ChartInner(_a) {
    var { data, config, height = 350, className } = _a, props = __rest(_a, ["data", "config", "height", "className"]);
    const { showLegend = true, series } = config;
    const { ref: containerRef, width } = useContainerWidth();
    const colorScale = scaleOrdinal({
        domain: series.map((s) => s.name || s.dataKey),
        range: series.map((s) => s.color),
    });
    return (_jsxs("div", Object.assign({ ref: containerRef, className: cn("w-full", className) }, props, { children: [width > 0 ? (_jsx(InnerChart, { data: data, config: config, width: width, height: height })) : (_jsx("div", { style: { height } })), showLegend && series.length > 1 && (_jsx("div", { className: "flex items-center justify-center pt-3", children: _jsx(LegendOrdinal, { scale: colorScale, children: (labels) => (_jsx("div", { className: "flex items-center gap-4", children: labels.map((label) => (_jsxs("div", { className: "flex items-center gap-1.5 text-xs", children: [_jsx("div", { className: "h-2 w-2 rounded-[2px] shrink-0", style: { backgroundColor: label.value } }), _jsx("span", { className: "opacity-70", children: label.text })] }, label.text))) })) }) }))] })));
}
const Chart = React.forwardRef((props, ref) => (_jsx("div", { ref: ref, children: _jsx(ChartInner, Object.assign({}, props)) })));
Chart.displayName = "Chart";
export { Chart };
