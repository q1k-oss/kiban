"use client"

import { Chart } from "@q1k-oss/kiban"
import type { ChartConfig, ChartDataPoint } from "@q1k-oss/kiban"

const data: ChartDataPoint[] = [
  { label: "Q1", desktop: 186, mobile: 80, tablet: 45 },
  { label: "Q2", desktop: 305, mobile: 200, tablet: 100 },
  { label: "Q3", desktop: 237, mobile: 120, tablet: 85 },
  { label: "Q4", desktop: 273, mobile: 190, tablet: 110 },
]

const config: ChartConfig = {
  type: "line",
  series: [
    { dataKey: "desktop", color: "#c4841d", name: "Desktop" },
    { dataKey: "mobile", color: "#22c55e", name: "Mobile" },
    { dataKey: "tablet", color: "#3b82f6", name: "Tablet" },
  ],
}

export default function MultiLineChart() {
  return (
    <div style={{ width: "100%", minHeight: 300 }}>
      <Chart data={data} config={config} height={300} />
    </div>
  )
}
