import { Label } from 'ethereal-ui';

export default () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <div className="flex items-center justify-between">
      <Label htmlFor="username" className="text-sm font-medium">
        Username
      </Label>
      <span className="text-sm font-medium text-destructive">*</span>
    </div>
    <input
      type="text"
      id="username"
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
    <p className="text-xs text-muted-foreground">This field is required</p>
    
    <div className="mt-4">
      <Label htmlFor="optional" className="text-sm font-medium">
        Optional field
      </Label>
      <input
        type="text"
        id="optional"
        className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  </div>
) 