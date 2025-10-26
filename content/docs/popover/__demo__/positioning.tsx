'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PopoverPositioningDemo() {
  const [position, setPosition] = useState("bottom")
  const [align, setAlign] = useState("center")
  
  const alignOptions = ["start", "center", "end"]
  const positionOptions = ["top", "right", "bottom", "left"]
  
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="grid gap-2">
          <Label htmlFor="position">Position</Label>
          <Select value={position} onValueChange={setPosition}>
            <SelectTrigger id="position" className="w-[120px]">
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent>
              {positionOptions.map((pos) => (
                <SelectItem key={pos} value={pos}>
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="align">Alignment</Label>
          <Select value={align} onValueChange={setAlign}>
            <SelectTrigger id="align" className="w-[120px]">
              <SelectValue placeholder="Align" />
            </SelectTrigger>
            <SelectContent>
              {alignOptions.map((alignOpt) => (
                <SelectItem key={alignOpt} value={alignOpt}>
                  {alignOpt.charAt(0).toUpperCase() + alignOpt.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-64"
          align={align as any}
          side={position as any}
          sideOffset={8}
        >
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Custom Positioning</h4>
            <p className="text-xs text-muted-foreground">
              Position: <span className="font-medium text-foreground">{position}</span>
              <br />
              Align: <span className="font-medium text-foreground">{align}</span>
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}