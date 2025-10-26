import { Separator } from 'ethereal-ui';

export default () => (
  <div className="space-y-8">
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Default</h4>
      <Separator />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Thicker</h4>
      <Separator className="h-[2px]" />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Colored</h4>
      <Separator className="bg-primary" />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Dashed</h4>
      <div className="h-[1px] w-full border-t border-dashed border-border" />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Gradient</h4>
      <Separator className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" />
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Partial Width</h4>
      <div className="flex items-center">
        <Separator className="w-1/3" />
        <span className="px-2 text-xs text-muted-foreground">33%</span>
      </div>
    </div>
    
    <div className="space-y-2">
      <h4 className="text-sm font-medium">With Shadow</h4>
      <Separator className="h-[2px] shadow-md" />
    </div>
  </div>
) 