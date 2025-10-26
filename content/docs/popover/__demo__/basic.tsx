import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="text-sm">Width</span>
              <div className="col-span-2 h-4 rounded-md bg-secondary"></div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="text-sm">Height</span>
              <div className="col-span-2 h-4 rounded-md bg-secondary"></div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
} 