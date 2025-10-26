import { Checkbox } from 'ethereal-ui';

export default () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled checkbox
      </label>
    </div>
    
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled checked />
      <label
        htmlFor="disabled-checked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled checked
      </label>
    </div>
    
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-indeterminate" disabled defaultChecked />
      <label
        htmlFor="disabled-indeterminate"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled with default checked
      </label>
    </div>
  </div>
) 