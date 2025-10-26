import { Progress } from 'ethereal-ui';

export default () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="text-sm font-medium">Default</div>
      <Progress value={60} className="w-full" />
    </div>
    
    <div className="space-y-2">
      <div className="text-sm font-medium">Taller with rounded edges</div>
      <Progress value={45} className="h-4 w-full rounded-lg" />
    </div>
    
    <div className="space-y-2">
      <div className="text-sm font-medium">Success</div>
      <Progress 
        value={85} 
        className="w-full [&>div]:bg-green-500 bg-green-100 dark:bg-green-900/20" 
      />
    </div>
    
    <div className="space-y-2">
      <div className="text-sm font-medium">Warning</div>
      <Progress 
        value={35} 
        className="w-full [&>div]:bg-amber-500 bg-amber-100 dark:bg-amber-900/20" 
      />
    </div>
    
    <div className="space-y-2">
      <div className="text-sm font-medium">Error</div>
      <Progress 
        value={15} 
        className="w-full [&>div]:bg-red-500 bg-red-100 dark:bg-red-900/20" 
      />
    </div>
    
    <div className="space-y-2">
      <div className="text-sm font-medium">Gradient</div>
      <Progress 
        value={80} 
        className="w-full [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
      />
    </div>
  </div>
) 