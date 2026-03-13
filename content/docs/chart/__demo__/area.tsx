"use client"

import { Chart } from "@q1k-oss/kiban"
import type { ChartConfig, ChartDataPoint } from "@q1k-oss/kiban"

const data: ChartDataPoint[] = [
  { label: "Jan", users: 200, sessions: 400 },
  { label: "Feb", users: 300, sessions: 500 },
  { label: "Mar", users: 250, sessions: 450 },
  { label: "Apr", users: 400, sessions: 700 },
  { label: "May", users: 350, sessions: 650 },
  { label: "Jun", users: 500, sessions: 900 },
]

const config: ChartConfig = {
  type: "area",
  series: [
    { dataKey: "sessions", color: "#c4841d", name: "Sessions" },
    { dataKey: "users", color: "#22c55e", name: "Users" },
  ],
}

export default function AreaChart() {
  return (
    <div style={{ width: "100%", minHeight: 300 }}>
      <Chart data={data} config={config} height={300} />
    </div>
  )
}
