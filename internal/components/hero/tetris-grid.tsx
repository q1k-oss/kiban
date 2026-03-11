"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Progress,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@q1k-oss/kiban";

import CodeBlockClient from "../codeblock/client";

function TiltCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`relative group ${className}`}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* 3D depth shadow layer */}
      <div className="absolute inset-0 rounded-2xl bg-white/[0.02] translate-z-[-4px] scale-[0.98] blur-sm" />
      {/* Card surface */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden h-full transition-colors duration-300 group-hover:border-white/[0.15] group-hover:bg-[#0c0c0c]">
        {/* Subtle shine on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        {children}
      </div>
    </motion.div>
  );
}

export const TetrisGrid = () => {
  return (
    <div className="mt-20 max-w-5xl mx-auto px-4" style={{ perspective: "1400px" }}>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-4 auto-rows-[80px]">

        {/* ═══ Row 1: Tabs (wide) + Badges ═══ */}
        <TiltCard className="col-span-4 md:col-span-7 row-span-1" delay={0}>
          <div className="p-3 h-full flex items-center">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="bg-white/[0.04] h-10">
                <TabsTrigger value="preview" className="text-xs data-[state=active]:bg-white/[0.08]">Preview</TabsTrigger>
                <TabsTrigger value="code" className="text-xs data-[state=active]:bg-white/[0.08]">Code</TabsTrigger>
                <TabsTrigger value="api" className="text-xs data-[state=active]:bg-white/[0.08]">API</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </TiltCard>

        <TiltCard className="col-span-4 md:col-span-5 row-span-1" delay={0.05}>
          <div className="p-3 h-full flex items-center justify-center gap-2 flex-wrap">
            <Badge className="bg-white/[0.06] border-white/[0.1] text-gray-300 hover:bg-white/[0.1]">React 19</Badge>
            <Badge className="bg-white/[0.06] border-white/[0.1] text-gray-300 hover:bg-white/[0.1]">TypeScript</Badge>
            <Badge className="bg-white/[0.04] border-white/[0.08] text-gray-400">Stable</Badge>
            <Badge className="bg-white/[0.04] border-white/[0.08] text-gray-400">v1.0</Badge>
          </div>
        </TiltCard>

        {/* ═══ Row 2-3: Analytics (tall) + Input + Buttons + Settings ═══ */}
        <TiltCard className="col-span-4 md:col-span-4 row-span-3" delay={0.1}>
          <Card className="border-0 bg-transparent h-full">
            <CardHeader className="p-5 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</CardTitle>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+24%</span>
              </div>
              <p className="text-3xl font-bold text-white tracking-tight mt-1">$12,847</p>
            </CardHeader>
            <CardContent className="p-5 pt-2">
              <div className="flex items-end gap-[3px] h-20 mt-2">
                {[30, 50, 35, 65, 45, 80, 60, 90, 50, 70, 85, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-[2px] bg-gradient-to-t from-white/10 to-white/25"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-[10px] text-gray-500">
                <span>Mon</span>
                <span className="ml-auto">Sun</span>
              </div>
            </CardContent>
          </Card>
        </TiltCard>

        <TiltCard className="col-span-4 md:col-span-4 row-span-1" delay={0.15}>
          <div className="p-3 h-full flex items-center">
            <Input
              placeholder="Search components..."
              className="h-10 text-sm border-0 bg-transparent placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </TiltCard>

        <TiltCard className="col-span-4 md:col-span-4 row-span-2" delay={0.2}>
          <div className="p-5 h-full flex flex-col justify-center space-y-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Controls</p>
            {[
              { label: "Dark Mode", on: true },
              { label: "Animations", on: true },
              { label: "Compact", on: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <Label className="text-xs text-gray-400">{item.label}</Label>
                <Switch defaultChecked={item.on} className="scale-[0.8]" />
              </div>
            ))}
          </div>
        </TiltCard>

        <TiltCard className="col-span-4 md:col-span-4 row-span-2" delay={0.25}>
          <div className="p-5 h-full flex flex-col justify-center gap-3">
            <Button size="sm" className="w-full bg-white text-black hover:bg-gray-200 text-xs font-medium h-9">Get Started</Button>
            <Button size="sm" variant="outline" className="w-full border-white/[0.1] text-gray-300 hover:bg-white/[0.05] text-xs h-9">Documentation</Button>
            <Button size="sm" variant="ghost" className="w-full text-gray-500 hover:text-gray-300 hover:bg-white/[0.03] text-xs h-9">View on GitHub</Button>
          </div>
        </TiltCard>

        {/* ═══ Row 4: Code block (wide) + Palette ═══ */}
        <TiltCard className="col-span-4 md:col-span-8 row-span-3" delay={0.3}>
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
              </div>
              <span className="text-[10px] text-gray-600 font-mono ml-2">App.tsx</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto scrollbar-thin">
              <pre className="text-xs leading-relaxed">
                <CodeBlockClient
                  code={`import { Button, Card, Badge, Tabs } from '@q1k-oss/kiban'
import '@q1k-oss/kiban/styles/kiban.css'

export default function Dashboard() {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold">Dashboard</h2>
        <Badge variant="secondary">v1.0</Badge>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
      </Tabs>

      <Button>Save Changes</Button>
    </Card>
  )
}`}
                />
              </pre>
            </div>
          </div>
        </TiltCard>

        <TiltCard className="col-span-4 md:col-span-4 row-span-3" delay={0.35}>
          <div className="p-5 h-full flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-4">Theming</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { color: "bg-white", label: "White" },
                  { color: "bg-gray-500", label: "Gray" },
                  { color: "bg-purple-500", label: "Purple" },
                  { color: "bg-emerald-500", label: "Green" },
                  { color: "bg-blue-500", label: "Blue" },
                  { color: "bg-rose-500", label: "Rose" },
                ].map((item, i) => (
                  <motion.button
                    key={i}
                    className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-6 h-6 rounded-full ${item.color} shadow-lg`} />
                    <span className="text-[9px] text-gray-600">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="space-y-2.5 mt-4">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Bundle size</span>
                <span className="text-gray-400">24kb</span>
              </div>
              <Progress value={24} className="h-1 bg-white/[0.06]" />
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Tree-shakeable</span>
                <span className="text-emerald-400">Yes</span>
              </div>
            </div>
          </div>
        </TiltCard>

      </div>

      {/* Ground glow */}
      <div className="mt-12 mx-auto w-2/3 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
      <div className="mx-auto w-1/3 h-32 bg-gradient-to-b from-white/[0.02] to-transparent blur-3xl -mt-8"></div>
    </div>
  );
};
