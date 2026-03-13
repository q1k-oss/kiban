import * as React from "react";
export type ChartDataPoint = {
    label: string;
    [key: string]: string | number;
};
export type ChartSeries = {
    dataKey: string;
    color: string;
    name?: string;
    curveType?: "monotone" | "linear" | "step" | "basis";
};
export type ChartType = "line" | "bar" | "area";
export interface ChartGridConfig {
    rowStroke?: string;
    rowStrokeOpacity?: number;
    rowStrokeDasharray?: string;
    columnStroke?: string;
    columnStrokeOpacity?: number;
    columnStrokeDasharray?: string;
}
export interface ChartAxisConfig {
    stroke?: string;
    tickStroke?: string;
    labelColor?: string;
    labelFontSize?: number;
}
export interface ChartBarConfig {
    borderRadius?: number;
    opacity?: number;
    padding?: number;
}
export interface ChartLineConfig {
    strokeWidth?: number;
    strokeLinecap?: "butt" | "round" | "square";
}
export interface ChartPointConfig {
    show?: boolean;
    radius?: number;
    strokeColor?: string;
    strokeWidth?: number;
}
export interface ChartAreaGradientConfig {
    fromOpacity?: number;
    toOpacity?: number;
}
export interface ChartTooltipStyles {
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    boxShadow?: string;
}
export interface ChartConfig {
    type?: ChartType;
    series: ChartSeries[];
    showGrid?: boolean;
    showAxis?: boolean;
    showTooltip?: boolean;
    showLegend?: boolean;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    grid?: ChartGridConfig;
    xAxis?: ChartAxisConfig;
    yAxis?: ChartAxisConfig;
    bar?: ChartBarConfig;
    line?: ChartLineConfig;
    point?: ChartPointConfig;
    areaGradient?: ChartAreaGradientConfig;
    tooltipStyles?: ChartTooltipStyles;
}
export interface ChartProps extends React.ComponentProps<"div"> {
    data: ChartDataPoint[];
    config: ChartConfig;
    height?: number;
}
declare const Chart: React.ForwardRefExoticComponent<Omit<ChartProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Chart };
