"use client"

import { Chart } from "@q1k-oss/kiban"
import type { ChartConfig, ChartDataPoint } from "@q1k-oss/kiban"

const data: ChartDataPoint[] = [
  { label: "Jan", revenue: 4000 },
  { label: "Feb", revenue: 3000 },
  { label: "Mar", revenue: 5000 },
  { label: "Apr", revenue: 4500 },
  { label: "May", revenue: 6000 },
  { label: "Jun", revenue: 5500 },
]

const config: ChartConfig = {
  type: "line",
  series: [{ dataKey: "revenue", color: "#c4841d", name: "Revenue" }],
}

export default function BasicChart() {
  return (
    <div style={{ width: "100%", minHeight: 300 }}>
      <Chart data={data} config={config} height={300} />
    </div>
  )
}
