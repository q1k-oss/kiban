import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Input,
  Label,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ethereal-ui';

export default () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Create New Event</Button>
    </SheetTrigger>
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Create Event</SheetTitle>
        <SheetDescription>
          Add a new event to your calendar. Fill out the form below to get started.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="event-name">Event Name</Label>
          <Input id="event-name" placeholder="Enter event name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="event-description">Description</Label>
          <Textarea
            id="event-description"
            placeholder="What's this event about?"
            className="min-h-[80px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="event-date">Date</Label>
            <div className="flex">
              <Input id="event-date" type="date" className="rounded-r-none" />
              <div className="flex items-center justify-center rounded-r-md border border-l-0 bg-muted px-2">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-time">Time</Label>
            <div className="flex">
              <Input id="event-time" type="time" className="rounded-r-none" />
              <div className="flex items-center justify-center rounded-r-md border border-l-0 bg-muted px-2">
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="event-location">Location</Label>
          <div className="flex">
            <Input id="event-location" placeholder="Enter location" className="rounded-r-none" />
            <div className="flex items-center justify-center rounded-r-md border border-l-0 bg-muted px-2">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="event-type">Event Type</Label>
          <Select>
            <SelectTrigger id="event-type" className="w-full">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="meeting">Meeting</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="social">Social Event</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="event-attendees">Expected Attendees</Label>
          <div className="flex">
            <Input id="event-attendees" type="number" min="1" placeholder="Number of attendees" className="rounded-r-none" />
            <div className="flex items-center justify-center rounded-r-md border border-l-0 bg-muted px-2">
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Create Event</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
) 