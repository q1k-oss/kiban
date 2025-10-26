import { Check, ArrowRight, Mail, Download, Plus, Settings } from "lucide-react";

import { Button, ButtonIconPosition } from "ethereal-ui";

export default function ButtonWithIconDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Icon Positions</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button icon={<Check />} iconPos={ButtonIconPosition.LEFT}>
            Left Icon
          </Button>
          
          <Button icon={<ArrowRight />} iconPos={ButtonIconPosition.RIGHT}>
            Right Icon
          </Button>
          
          <Button icon={<Mail />}>
            Default Position
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Icon with Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default" icon={<Download />}>
            Download
          </Button>
          
          <Button variant="secondary" icon={<Settings />}>
            Settings
          </Button>
          
          <Button variant="outline" icon={<Plus />}>
            New Item
          </Button>
          
          <Button variant="ghost" icon={<ArrowRight />} iconPos={ButtonIconPosition.RIGHT}>
            Next
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Icon Only</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="icon" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </Button>
          
          <Button size="icon" variant="outline" aria-label="Add">
            <Plus className="h-4 w-4" />
          </Button>
          
          <Button size="icon" variant="secondary" aria-label="Download">
            <Download className="h-4 w-4" />
          </Button>
          
          <Button size="icon" variant="ghost" aria-label="Mail">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 