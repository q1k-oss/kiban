import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  Button,
  Input,
  Label,
  Textarea,
} from "@q1k-oss/kiban";

export default () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>New Task</Button>
    </SheetTrigger>
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Create Task</SheetTitle>
        <SheetDescription>Add a new task to your board.</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 p-4">
        <div className="grid gap-2">
          <Label htmlFor="task-title">Title</Label>
          <Input id="task-title" placeholder="Fix login bug" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="task-desc">Description</Label>
          <Textarea
            id="task-desc"
            placeholder="What needs to be done?"
            className="min-h-[80px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="task-assignee">Assignee</Label>
            <Input id="task-assignee" placeholder="@username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="task-due">Due Date</Label>
            <Input id="task-due" type="date" />
          </div>
        </div>
      </div>
      <SheetFooter className="p-4">
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
        <Button>Create</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
