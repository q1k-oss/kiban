'use client'
import { ExternalLink } from 'lucide-react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a 
        href="#" 
        className="text-primary underline decoration-dotted inline-flex items-center"
        onClick={(e) => e.preventDefault()}
      >
        Mountain Landscape
        <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-3">
        <div className="overflow-hidden rounded-md">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba" 
            alt="Mountain landscape with snow and starry sky" 
            className="aspect-video object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold">Mountain Landscape</h4>
          <p className="text-sm text-muted-foreground">
            A beautiful mountain landscape under a starry night sky.
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>Photo by John Doe</span>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="sr-only">View full size</span>
          </Button>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
) 