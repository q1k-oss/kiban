import { Sun, Moon, Laptop } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default function ToggleGroupVariantsDemo() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {/* Default variant */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm font-medium mb-2">Default Variant</p>
        <ToggleGroup type="single" defaultValue="system">
          <ToggleGroupItem value="light" aria-label="Light mode">
            <Sun className="h-4 w-4 mr-2" />
            Light
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" aria-label="Dark mode">
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </ToggleGroupItem>
          <ToggleGroupItem value="system" aria-label="System preference">
            <Laptop className="h-4 w-4 mr-2" />
            System
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Outline variant */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm font-medium mb-2">Outline Variant</p>
        <ToggleGroup type="single" defaultValue="system" variant="outline">
          <ToggleGroupItem value="light" aria-label="Light mode">
            <Sun className="h-4 w-4 mr-2" />
            Light
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" aria-label="Dark mode">
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </ToggleGroupItem>
          <ToggleGroupItem value="system" aria-label="System preference">
            <Laptop className="h-4 w-4 mr-2" />
            System
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Small size */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm font-medium mb-2">Small Size</p>
        <ToggleGroup type="single" defaultValue="system" size="sm">
          <ToggleGroupItem value="light" aria-label="Light mode">
            <Sun className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" aria-label="Dark mode">
            <Moon className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="system" aria-label="System preference">
            <Laptop className="h-3.5 w-3.5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Large size */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm font-medium mb-2">Large Size</p>
        <ToggleGroup type="single" defaultValue="system" size="lg">
          <ToggleGroupItem value="light" aria-label="Light mode">
            <Sun className="h-5 w-5 mr-2" />
            Light
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" aria-label="Dark mode">
            <Moon className="h-5 w-5 mr-2" />
            Dark
          </ToggleGroupItem>
          <ToggleGroupItem value="system" aria-label="System preference">
            <Laptop className="h-5 w-5 mr-2" />
            System
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
} 