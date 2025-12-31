import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
} from "@happect/ethereal-ui";

export default () => (
  <div className="relative h-[300px] overflow-hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent disablePortal positioning="absolute">
        <SheetHeader>
          <SheetTitle>Project Details</SheetTitle>
          <SheetDescription>
            View and edit your project information.
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
);
