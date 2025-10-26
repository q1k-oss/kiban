import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <TooltipProvider>
    <div className="grid grid-cols-2 gap-6 max-w-md">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="w-full">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip appears on top</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="w-full">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip appears on right</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="w-full">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip appears on bottom</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="w-full">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip appears on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
) 