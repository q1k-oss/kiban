import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
} from 'ethereal-ui';

export default () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Project Details</SheetTitle>
        <SheetDescription>
          View and edit your project information.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Project Name</h4>
            <p className="text-sm text-muted-foreground">Ethereal Garden Dashboard</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Description</h4>
            <p className="text-sm text-muted-foreground">
              A modern dashboard for the Ethereal Garden platform, providing analytics, 
              user management, and content moderation tools.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Team Members</h4>
            <p className="text-sm text-muted-foreground">5 active members</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Last Updated</h4>
            <p className="text-sm text-muted-foreground">October 21, 2023</p>
          </div>
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
) 