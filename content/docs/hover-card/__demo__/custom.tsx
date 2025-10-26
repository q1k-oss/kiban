import { Info, Star, Clock, DollarSign, MapPin } from 'lucide-react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Badge,
} from 'ethereal-ui';

export default () => (
  <div className="flex justify-center">
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium gap-1.5 cursor-pointer hover:bg-accent">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          Sunset Restaurant
          <Info className="h-3.5 w-3.5 text-muted-foreground ml-1" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-0 overflow-hidden rounded-lg border-none shadow-xl">
        {/* Header with image */}
        <div className="relative h-32 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330" 
            alt="Restaurant interior" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-lg font-bold text-white">Sunset Restaurant</h3>
            <p className="text-sm text-white/80">Fine dining experience</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 bg-card">
          <div className="grid grid-cols-2 gap-3 pb-3">
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">4.8/5</span>
              <span className="text-xs text-muted-foreground">(128 reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">$$$</span>
              <span className="text-xs text-muted-foreground">Expensive</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">Open now</span>
              <span className="text-xs text-muted-foreground">Until 10 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">2.4 miles</span>
            </div>
          </div>
          
          <div className="flex gap-1.5 pt-1 pb-2">
            <Badge variant="outline" className="bg-muted/50">Seafood</Badge>
            <Badge variant="outline" className="bg-muted/50">Italian</Badge>
            <Badge variant="outline" className="bg-muted/50">Bar</Badge>
          </div>
          
          <p className="text-xs text-muted-foreground border-t pt-3">
            Tap to view details, make reservations, or get directions.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
) 