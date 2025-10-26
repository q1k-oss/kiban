import { Switch } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <label 
        htmlFor="disabled-unchecked" 
        className="text-sm font-medium leading-none text-muted-foreground"
      >
        Disabled unchecked
      </label>
      <Switch 
        id="disabled-unchecked"
        disabled
      />
    </div>
    
    <div className="flex items-center justify-between">
      <label 
        htmlFor="disabled-checked" 
        className="text-sm font-medium leading-none text-muted-foreground"
      >
        Disabled checked
      </label>
      <Switch 
        id="disabled-checked"
        disabled
        checked
      />
    </div>
  </div>
) 