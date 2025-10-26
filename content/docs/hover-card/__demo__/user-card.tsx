import { CalendarDays, Mail, MapPin } from 'lucide-react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from 'ethereal-ui';

export default () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className="p-0">
        @sarahjohnson
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Sarah Johnson</h4>
          <p className="text-sm text-muted-foreground">
            Product Designer at Ethereal Garden
          </p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t pt-4 mt-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <Mail className="mr-1 h-3 w-3" />
          sarah@example.com
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="mr-1 h-3 w-3" />
          San Francisco, CA
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
) 