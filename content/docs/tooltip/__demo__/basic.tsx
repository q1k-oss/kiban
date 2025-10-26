import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <TooltipProvider>
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a simple tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)