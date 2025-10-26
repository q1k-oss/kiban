import {
  Info,
  AlertCircle,
  HelpCircle,
  LifeBuoy,
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <TooltipProvider>
    <div className="flex flex-wrap justify-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5 text-blue-500" />
            <span className="sr-only">Info</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-blue-500 text-white">
          <p>Information tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span className="sr-only">Warning</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-red-500 text-white">
          <p>Warning tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5 text-amber-500" />
            <span className="sr-only">Help</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          className="bg-amber-100 text-amber-800 border border-amber-200"
          side="bottom"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <p>Need help with this feature?</p>
          </div>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <LifeBuoy className="h-5 w-5 text-green-500" />
            <span className="sr-only">Support</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg shadow-lg"
          sideOffset={10}
        >
          <div className="text-center">
            <h3 className="font-bold mb-1">Need Support?</h3>
            <p className="text-xs">Contact our support team for assistance</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
) 