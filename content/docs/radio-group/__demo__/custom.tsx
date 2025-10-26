'use client'

import { Laptop, Moon, Sun } from "lucide-react"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupCustomDemo() {
  const [theme, setTheme] = useState("light")
  
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Select Theme</h4>
      <RadioGroup
        value={theme}
        onValueChange={setTheme}
        className="grid grid-cols-3 gap-4"
      >
        <div>
          <RadioGroupItem
            value="light"
            id="theme-light"
            className="peer sr-only"
          />
          <Label
            htmlFor="theme-light"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Sun className="mb-3 h-6 w-6" />
            Light
          </Label>
        </div>
        <div>
          <RadioGroupItem
            value="dark"
            id="theme-dark"
            className="peer sr-only"
          />
          <Label
            htmlFor="theme-dark"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Moon className="mb-3 h-6 w-6" />
            Dark
          </Label>
        </div>
        <div>
          <RadioGroupItem
            value="system"
            id="theme-system"
            className="peer sr-only"
          />
          <Label
            htmlFor="theme-system"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Laptop className="mb-3 h-6 w-6" />
            System
          </Label>
        </div>
      </RadioGroup>
      <div className="text-sm text-muted-foreground mt-2">
        Selected theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </div>
    </div>
  )
} 