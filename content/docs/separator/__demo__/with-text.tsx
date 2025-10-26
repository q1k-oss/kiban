import { Separator } from 'ethereal-ui';

export default () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Section Divider</h4>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Recent Activity
          </span>
        </div>
      </div>
      <div className="rounded-md border p-4">
        <div className="text-sm">Content goes here</div>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground rounded-full border">
            OR
          </span>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-muted-foreground">
            End of Section
          </span>
        </div>
      </div>
    </div>
  </div>
) 