"use client"

import React, { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import CodeBlockClient from '../codeblock/client';

export const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  return (
    <section id="components" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Components</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Explore a collection of production-ready components.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden">
            <Tabs
              defaultValue="buttons"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="border-b border-white/[0.08] px-1">
                <TabsList className="w-full justify-start bg-transparent h-auto p-0 gap-0">
                  {['buttons', 'cards', 'badges', 'forms'].map(tab => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className={`px-4 py-3 capitalize text-sm rounded-none border-b-2 transition-colors ${
                        activeTab === tab
                          ? 'border-white/50 text-white'
                          : 'border-transparent text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="p-6">
                <TabsContent value="buttons" className="space-y-6 mt-0">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Variants</p>
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Sizes</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <pre className="text-sm">
                      <CodeBlockClient
                        code={`import { Button } from '@q1k-oss/kiban'

<Button variant="outline">Click me</Button>`}
                      />
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="cards" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader>
                        <CardTitle className="text-base">Project Alpha</CardTitle>
                        <CardDescription>Design system components</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">A modular set of UI components for building consistent interfaces.</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">Archive</Button>
                        <Button size="sm">Open</Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader>
                        <CardTitle className="text-base">Analytics</CardTitle>
                        <CardDescription>Real-time dashboard</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">Monitor key metrics and performance indicators at a glance.</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">Settings</Button>
                        <Button size="sm">View</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <pre className="text-sm">
                      <CodeBlockClient
                        code={`import { Card, CardHeader, CardTitle, CardContent } from '@q1k-oss/kiban'

<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>`}
                      />
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="badges" className="space-y-6 mt-0">
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <pre className="text-sm">
                      <CodeBlockClient
                        code={`import { Badge } from '@q1k-oss/kiban'

<Badge variant="secondary">v1.0.0</Badge>`}
                      />
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="forms" className="space-y-6 mt-0">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="dark-mode" className="text-sm font-medium">Dark Mode</Label>
                        <p className="text-xs text-gray-500 mt-0.5">Enable dark color scheme</p>
                      </div>
                      <Switch id="dark-mode" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notifications" className="text-sm font-medium">Notifications</Label>
                        <p className="text-xs text-gray-500 mt-0.5">Receive push notifications</p>
                      </div>
                      <Switch id="notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics" className="text-sm font-medium">Analytics</Label>
                        <p className="text-xs text-gray-500 mt-0.5">Share anonymous usage data</p>
                      </div>
                      <Switch id="analytics" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <pre className="text-sm">
                      <CodeBlockClient
                        code={`import { Switch, Label } from '@q1k-oss/kiban'

<div className="flex items-center gap-2">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Dark Mode</Label>
</div>`}
                      />
                    </pre>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
