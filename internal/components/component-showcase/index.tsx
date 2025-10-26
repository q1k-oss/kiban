"use client"

import React, { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import CodeBlockClient from '../codeblock/client';

export const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  return (
    <section id="components" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">Interface Elements</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of meticulously crafted components designed for the next generation of web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Glow effect around the showcase */}
          <div className="absolute -inset-1 bg-gradient-to-r from-ethereal-purple/10 via-ethereal-teal/10 to-ethereal-blue/10 rounded-xl blur-xl opacity-50"></div>
          
          <div className="relative glassy rounded-xl border border-zinc-300 dark:border-gray-800 backdrop-blur-xl overflow-hidden">
            <Tabs 
              defaultValue="buttons" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="border-b border-zinc-400 dark:border-gray-800">
                <TabsList className="w-full grid grid-cols-4 bg-transparent h-auto p-0">
                  {['buttons', 'cards', 'badges', 'forms'].map(tab => (
                    <TabsTrigger 
                      key={tab}
                      value={tab}
                      className={`py-4 capitalize text-gray-400 border-b-2 rounded-none ${
                        activeTab === tab 
                          ? 'border-ethereal-purple text-white' 
                          : 'border-transparent'
                      }`}
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <div className="p-8">
                <TabsContent value="buttons" className="space-y-8 mt-0">
                  <h3 className="text-xl font-semibold mb-6">Button Variants</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <Button className="bg-gradient-to-r from-ethereal-purple to-ethereal-teal border-none">Primary</Button>
                    <Button variant="secondary" className="backdrop-blur-sm">Secondary</Button>
                    <Button variant="outline" className="border-ethereal-teal/50 text-ethereal-teal hover:bg-ethereal-teal/10">Outline</Button>
                    <Button variant="ghost" className="hover:bg-white/5">Ghost</Button>
                    <Button variant="link" className="text-ethereal-purple">Link</Button>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6 mt-12">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm" className="bg-ethereal-purple">Small</Button>
                    <Button className="bg-gradient-to-r from-ethereal-purple to-ethereal-teal">Default</Button>
                    <Button size="lg" className="bg-ethereal-teal">Large</Button>
                  </div>
                  
                  <div className="code-block mt-8">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2">Button.tsx</span>
                    </div>
                    <pre>
                      <CodeBlockClient
                        code={`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                      />
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="cards" className="mt-0">
                  <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent className="p-1">
                      <CarouselItem>
                        <Card className="border-zinc-300 dark:border-gray-800 bg-[#F1F5F5] dark:bg-black/50 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle>Neural Interface</CardTitle>
                            <CardDescription>Connecting to consciousness network</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>The neural interface connects directly with your cognitive systems for seamless interaction.</p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="ghost">Disconnect</Button>
                            <Button className="bg-ethereal-purple">Connect</Button>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card className="border-ethereal-teal/20 bg-[#F1F5F5] dark:bg-black/50 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle>Quantum Processor</CardTitle>
                            <CardDescription>Computational superposition enabled</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>Leveraging quantum entanglement for parallel processing of complex data structures.</p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="ghost">Standby</Button>
                            <Button className="bg-ethereal-teal">Activate</Button>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <div className="flex justify-center pt-4 gap-2">
                      <CarouselPrevious className="relative static translate-y-0 left-0" />
                      <CarouselNext className="relative static translate-y-0 right-0" />
                    </div>
                  </Carousel>
                  
                  <div className="code-block mt-8">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2">Card.tsx</span>
                    </div>
                    <pre>
                      <CodeBlockClient
                        code={`<Card>
  <CardHeader>
    <CardTitle>Neural Interface</CardTitle>
    <CardDescription>Connection status</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Interface description and capabilities</p>
  </CardContent>
  <CardFooter>
    <Button variant="ghost">Disconnect</Button>
    <Button>Connect</Button>
  </CardFooter>
</Card>`}
                      />
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="badges" className="space-y-8 mt-0">
                  <h3 className="text-xl font-semibold mb-6">Badge Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-gradient-to-r from-ethereal-purple to-ethereal-teal border-none text-white">Status: Online</Badge>
                    <Badge variant="secondary" className="backdrop-blur-sm">Quantum Ready</Badge>
                    <Badge variant="outline" className="border-ethereal-teal text-ethereal-teal">Neural Link</Badge>
                    <Badge variant="destructive">Critical Alert</Badge>
                  </div>
                  
                  <div className="code-block mt-8">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2">Badge.tsx</span>
                    </div>
                    <pre>
                      <CodeBlockClient
                        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
                      />
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="forms" className="space-y-8 mt-0">
                  <div className="flex flex-col space-y-8">
                    <div className="p-6 border border-zinc-300 dark:border-gray-800 rounded-lg bg-[#F5F5F5] dark:bg-black/30 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-6">Neural Interface Settings</h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="airplane-mode" className="text-base">Quantum Encryption</Label>
                            <p className="text-sm text-gray-500">Secure transmissions with quantum-resistant encryption</p>
                          </div>
                          <Switch id="airplane-mode" className="data-[state=checked]:bg-ethereal-purple" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="wifi" className="text-base">Neural Protocol</Label>
                            <p className="text-sm text-gray-500">Enable direct neural pathway communication</p>
                          </div>
                          <Switch id="wifi" defaultChecked className="data-[state=checked]:bg-ethereal-teal" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="notifications" className="text-base">Holographic Notifications</Label>
                            <p className="text-sm text-gray-500">Project notifications into your augmented field of view</p>
                          </div>
                          <Switch id="notifications" className="data-[state=checked]:bg-ethereal-blue" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="code-block">
                      <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2">Switch.tsx</span>
                      </div>
                      <pre>
                        <CodeBlockClient
                          code={`<div className="flex items-center space-x-2">
  <Switch id="quantum-encryption" />
  <Label htmlFor="quantum-encryption">Quantum Encryption</Label>
</div>`}
                        />
                      </pre>
                    </div>
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
