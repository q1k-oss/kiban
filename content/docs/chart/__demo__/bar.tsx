"use client"

import { Chart } from "@q1k-oss/kiban"
import type { ChartConfig, ChartDataPoint } from "@q1k-oss/kiban"

const data: ChartDataPoint[] = [
  { label: "Mon", visits: 120 },
  { label: "Tue", visits: 200 },
  { label: "Wed", visits: 150 },
  { label: "Thu", visits: 280 },
  { label: "Fri", visits: 220 },
  { label: "Sat", visits: 90 },
  { label: "Sun", visits: 60 },
]

const config: ChartConfig = {
  type: "bar",
  series: [{ dataKey: "visits", color: "#c4841d", name: "Visits" }],
}

export default function BarChart() {
  return (
    <div style={{ width: "100%", minHeight: 300 }}>
      <Chart data={data} config={config} height={300} />
    </div>
  )
}
