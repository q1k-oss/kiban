import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'ethereal-ui';

export default () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <span className="text-primary underline decoration-dotted cursor-pointer">
        Hover over me
      </span>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">What is a Hover Card?</h4>
        <p className="text-sm text-muted-foreground">
          A hover card is a UI element that displays additional information when a user hovers over a trigger element.
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
) 