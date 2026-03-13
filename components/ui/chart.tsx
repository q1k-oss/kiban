"use client"

import { AxisBottom, AxisLeft } from "@visx/axis"
import { curveMonotoneX, curveLinear, curveStep, curveBasis } from "@visx/curve"
import { localPoint } from "@visx/event"
import { LinearGradient } from "@visx/gradient"
import { GridRows, GridColumns } from "@visx/grid"
import { Group } from "@visx/group"
import { LegendOrdinal } from "@visx/legend"
import { scaleLinear, scaleOrdinal, scaleBand } from "@visx/scale"
import { LinePath, AreaClosed } from "@visx/shape"
import { Bar } from "@visx/shape"
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip"
import * as React from "react"

import { cn } from "../utils"

// ─── Hook: measure container width ──────────────────────────────────────────

function useContainerWidth() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width
        if (w > 0) setWidth(w)
      }
    })
    observer.observe(el)

    const rect = el.getBoundingClientRect()
    if (rect.width > 0) setWidth(rect.width)

    return () => observer.disconnect()
  }, [])

  return { ref, width }
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type ChartDataPoint = {
  label: string
  [key: string]: string | number
}

export type ChartSeries = {
  dataKey: string
  color: string
  name?: string
  curveType?: "monotone" | "linear" | "step" | "basis"
}

export type ChartType = "line" | "bar" | "area"

export interface ChartGridConfig {
  rowStroke?: string
  rowStrokeOpacity?: number
  rowStrokeDasharray?: string
  columnStroke?: string
  columnStrokeOpacity?: number
  columnStrokeDasharray?: string
}

export interface ChartAxisConfig {
  stroke?: string
  tickStroke?: string
  labelColor?: string
  labelFontSize?: number
}

export interface ChartBarConfig {
  borderRadius?: number
  opacity?: number
  padding?: number
}

export interface ChartLineConfig {
  strokeWidth?: number
  strokeLinecap?: "butt" | "round" | "square"
}

export interface ChartPointConfig {
  show?: boolean
  radius?: number
  strokeColor?: string
  strokeWidth?: number
}

export interface ChartAreaGradientConfig {
  fromOpacity?: number
  toOpacity?: number
}

export interface ChartTooltipStyles {
  backgroundColor?: string
  color?: string
  border?: string
  borderRadius?: string
  padding?: string
  fontSize?: string
  boxShadow?: string
}

export interface ChartConfig {
  type?: ChartType
  series: ChartSeries[]
  showGrid?: boolean
  showAxis?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  margin?: { top: number; right: number; bottom: number; left: number }
  grid?: ChartGridConfig
  xAxis?: ChartAxisConfig
  yAxis?: ChartAxisConfig
  bar?: ChartBarConfig
  line?: ChartLineConfig
  point?: ChartPointConfig
  areaGradient?: ChartAreaGradientConfig
  tooltipStyles?: ChartTooltipStyles
}

export interface ChartProps extends React.ComponentProps<"div"> {
  data: ChartDataPoint[]
  config: ChartConfig
  height?: number
}

// ─── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_MARGIN = { top: 20, right: 20, bottom: 40, left: 50 }

const DEFAULT_GRID: Required<ChartGridConfig> = {
  rowStroke: "currentColor",
  rowStrokeOpacity: 0.15,
  rowStrokeDasharray: "4",
  columnStroke: "currentColor",
  columnStrokeOpacity: 0.1,
  columnStrokeDasharray: "4",
}

const DEFAULT_AXIS: Required<ChartAxisConfig> = {
  stroke: "currentColor",
  tickStroke: "currentColor",
  labelColor: "currentColor",
  labelFontSize: 11,
}

const DEFAULT_BAR: Required<ChartBarConfig> = {
  borderRadius: 4,
  opacity: 0.9,
  padding: 0.3,
}

const DEFAULT_LINE: Required<ChartLineConfig> = {
  strokeWidth: 2,
  strokeLinecap: "round",
}

const DEFAULT_POINT: Required<ChartPointConfig> = {
  show: true,
  radius: 3,
  strokeColor: "currentColor",
  strokeWidth: 2,
}

const DEFAULT_AREA_GRADIENT: Required<ChartAreaGradientConfig> = {
  fromOpacity: 0.4,
  toOpacity: 0.05,
}

const DEFAULT_TOOLTIP_STYLES: ChartTooltipStyles = {}

// ─── Curve map ───────────────────────────────────────────────────────────────

const curveMap = {
  monotone: curveMonotoneX,
  linear: curveLinear,
  step: curveStep,
  basis: curveBasis,
} as const

// ─── Inner Chart ─────────────────────────────────────────────────────────────

type InnerChartProps = {
  data: ChartDataPoint[]
  config: ChartConfig
  width: number
  height: number
}

function InnerChart({ data, config, width, height }: InnerChartProps) {
  const {
    type = "line",
    series,
    showGrid = true,
    showAxis = true,
    showTooltip: enableTooltip = true,
    margin = DEFAULT_MARGIN,
  } = config

  const grid = { ...DEFAULT_GRID, ...config.grid }
  const xAxisCfg = { ...DEFAULT_AXIS, ...config.xAxis }
  const yAxisCfg = { ...DEFAULT_AXIS, ...config.yAxis }
  const barCfg = { ...DEFAULT_BAR, ...config.bar }
  const lineCfg = { ...DEFAULT_LINE, ...config.line }
  const pointCfg = { ...DEFAULT_POINT, ...config.point }
  const gradientCfg = { ...DEFAULT_AREA_GRADIENT, ...config.areaGradient }
  const tipStyles = { ...defaultStyles, ...DEFAULT_TOOLTIP_STYLES, ...config.tooltipStyles }

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<ChartDataPoint>()

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  })

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  if (innerWidth <= 0 || innerHeight <= 0) return null

  const xScale = scaleBand<string>({
    domain: data.map((d) => d.label),
    range: [0, innerWidth],
    padding: type === "bar" ? barCfg.padding : 0,
  })

  const allValues = data.flatMap((d) =>
    series.map((s) => Number(d[s.dataKey]) || 0)
  )
  const yMax = Math.max(...allValues)

  const yScale = scaleLinear<number>({
    domain: [0, yMax * 1.1],
    range: [innerHeight, 0],
    nice: true,
  })

  const handleTooltip = (event: React.MouseEvent | React.TouchEvent) => {
    if (!enableTooltip) return
    const point = localPoint(event)
    if (!point) return

    const x = point.x - margin.left
    const bandWidth = xScale.bandwidth()
    const index = Math.floor(x / (bandWidth + xScale.padding() * bandWidth))
    const datum = data[Math.min(Math.max(index, 0), data.length - 1)]
    if (datum) {
      showTooltip({
        tooltipData: datum,
        tooltipLeft: point.x,
        tooltipTop: point.y,
      })
    }
  }

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <svg width={width} height={height}>
        {series.map((s, i) => (
          <LinearGradient
            key={`gradient-${i}`}
            id={`area-gradient-${i}`}
            from={s.color}
            to={s.color}
            fromOpacity={gradientCfg.fromOpacity}
            toOpacity={gradientCfg.toOpacity}
          />
        ))}

        <Group left={margin.left} top={margin.top}>
          {showGrid && (
            <>
              <GridRows
                scale={yScale}
                width={innerWidth}
                stroke={grid.rowStroke}
                strokeOpacity={grid.rowStrokeOpacity}
                strokeDasharray={grid.rowStrokeDasharray}
              />
              <GridColumns
                scale={xScale}
                height={innerHeight}
                stroke={grid.columnStroke}
                strokeOpacity={grid.columnStrokeOpacity}
                strokeDasharray={grid.columnStrokeDasharray}
                offset={xScale.bandwidth() / 2}
              />
            </>
          )}

          {/* Bar chart */}
          {type === "bar" &&
            series.map((s) =>
              data.map((d, i) => {
                const barWidth = xScale.bandwidth() / series.length
                const seriesIndex = series.indexOf(s)
                const barX =
                  (xScale(d.label) ?? 0) + barWidth * seriesIndex
                const barY = yScale(Number(d[s.dataKey]) || 0)
                const barHeight = innerHeight - barY
                return (
                  <Bar
                    key={`bar-${s.dataKey}-${i}`}
                    x={barX}
                    y={barY}
                    width={barWidth}
                    height={barHeight}
                    fill={s.color}
                    rx={barCfg.borderRadius}
                    opacity={barCfg.opacity}
                  />
                )
              })
            )}

          {/* Area chart */}
          {type === "area" &&
            series.map((s, i) => (
              <AreaClosed<ChartDataPoint>
                key={`area-${s.dataKey}`}
                data={data}
                x={(d) =>
                  (xScale(d.label) ?? 0) + xScale.bandwidth() / 2
                }
                y={(d) => yScale(Number(d[s.dataKey]) || 0)}
                yScale={yScale}
                curve={curveMap[s.curveType || "monotone"]}
                fill={`url(#area-gradient-${i})`}
                stroke={s.color}
                strokeWidth={lineCfg.strokeWidth}
              />
            ))}

          {/* Line chart */}
          {(type === "line" || type === "area") &&
            series.map((s) => (
              <LinePath<ChartDataPoint>
                key={`line-${s.dataKey}`}
                data={data}
                x={(d) =>
                  (xScale(d.label) ?? 0) + xScale.bandwidth() / 2
                }
                y={(d) => yScale(Number(d[s.dataKey]) || 0)}
                curve={curveMap[s.curveType || "monotone"]}
                stroke={s.color}
                strokeWidth={lineCfg.strokeWidth}
                strokeLinecap={lineCfg.strokeLinecap}
              />
            ))}

          {/* Data points for line/area */}
          {(type === "line" || type === "area") &&
            pointCfg.show &&
            series.map((s) =>
              data.map((d, i) => (
                <circle
                  key={`point-${s.dataKey}-${i}`}
                  cx={(xScale(d.label) ?? 0) + xScale.bandwidth() / 2}
                  cy={yScale(Number(d[s.dataKey]) || 0)}
                  r={pointCfg.radius}
                  fill={s.color}
                  stroke={pointCfg.strokeColor}
                  strokeWidth={pointCfg.strokeWidth}
                />
              ))
            )}

          {/* Axes */}
          {showAxis && (
            <>
              <AxisBottom
                top={innerHeight}
                scale={xScale}
                stroke={xAxisCfg.stroke}
                tickStroke={xAxisCfg.tickStroke}
                tickLabelProps={{
                  fill: xAxisCfg.labelColor,
                  fontSize: xAxisCfg.labelFontSize,
                  textAnchor: "middle",
                }}
              />
              <AxisLeft
                scale={yScale}
                stroke={yAxisCfg.stroke}
                tickStroke={yAxisCfg.tickStroke}
                tickLabelProps={{
                  fill: yAxisCfg.labelColor,
                  fontSize: yAxisCfg.labelFontSize,
                  textAnchor: "end",
                  dx: -4,
                  dy: 4,
                }}
              />
            </>
          )}

          {/* Tooltip hover area */}
          <rect
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            onMouseMove={handleTooltip}
            onMouseLeave={hideTooltip}
            onTouchMove={handleTooltip}
            onTouchEnd={hideTooltip}
          />
        </Group>
      </svg>

      {/* Tooltip */}
      {enableTooltip && tooltipOpen && tooltipData && (
        <TooltipInPortal
          left={tooltipLeft}
          top={tooltipTop}
          style={{ ...defaultStyles, ...tipStyles }}
          className="kiban-chart-tooltip"
        >
          <div className="font-medium mb-1">{tooltipData.label}</div>
          {series.map((s) => (
            <div key={s.dataKey} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: s.color }}
              />
              <span className="opacity-70">
                {s.name || s.dataKey}:
              </span>
              <span className="font-mono font-medium">
                {Number(tooltipData[s.dataKey] || 0).toLocaleString()}
              </span>
            </div>
          ))}
        </TooltipInPortal>
      )}
    </div>
  )
}

// ─── Chart Container ─────────────────────────────────────────────────────────

function ChartInner({ data, config, height = 350, className, ...props }: ChartProps) {
  const { showLegend = true, series } = config
  const { ref: containerRef, width } = useContainerWidth()

  const colorScale = scaleOrdinal<string, string>({
    domain: series.map((s) => s.name || s.dataKey),
    range: series.map((s) => s.color),
  })

  return (
    <div
      ref={containerRef}
      className={cn("w-full", className)}
      {...props}
    >
      {width > 0 ? (
        <InnerChart
          data={data}
          config={config}
          width={width}
          height={height}
        />
      ) : (
        <div style={{ height }} />
      )}
      {showLegend && series.length > 1 && (
        <div className="flex items-center justify-center pt-3">
          <LegendOrdinal scale={colorScale}>
            {(labels) => (
              <div className="flex items-center gap-4">
                {labels.map((label) => (
                  <div
                    key={label.text}
                    className="flex items-center gap-1.5 text-xs"
                  >
                    <div
                      className="h-2 w-2 rounded-[2px] shrink-0"
                      style={{ backgroundColor: label.value }}
                    />
                    <span className="opacity-70">
                      {label.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </LegendOrdinal>
        </div>
      )}
    </div>
  )
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (props, ref) => (
    <div ref={ref}>
      <ChartInner {...props} />
    </div>
  )
)
Chart.displayName = "Chart"

export { Chart }
