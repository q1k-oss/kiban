import { Textarea } from 'ethereal-ui';

export default () => (
  <div className="grid gap-4">
    <div className="grid w-full gap-1.5">
      <label 
        htmlFor="disabled-empty" 
        className="text-sm font-medium"
      >
        Disabled Textarea (Empty)
      </label>
      <Textarea 
        id="disabled-empty" 
        placeholder="You cannot type here..." 
        disabled
      />
    </div>
    
    <div className="grid w-full gap-1.5">
      <label 
        htmlFor="disabled-with-value" 
        className="text-sm font-medium"
      >
        Disabled Textarea (With Value)
      </label>
      <Textarea 
        id="disabled-with-value" 
        disabled
        value="This content cannot be edited because the textarea is disabled."
      />
      <p className="text-sm text-muted-foreground">
        This content is for display purposes only.
      </p>
    </div>
  </div>
) 