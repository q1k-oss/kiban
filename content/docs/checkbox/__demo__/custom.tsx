import { Checkbox } from 'ethereal-ui';

export default () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="custom1" 
        className="h-5 w-5 border-2 border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded-full" 
      />
      <label
        htmlFor="custom1"
        className="text-sm font-medium leading-none text-blue-600"
      >
        Blue rounded checkbox
      </label>
    </div>
    
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="custom2" 
        className="h-5 w-5 border-2 border-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500" 
      />
      <label
        htmlFor="custom2"
        className="text-sm font-medium leading-none text-amber-600"
      >
        Amber checkbox
      </label>
    </div>
    
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="custom3" 
        className="h-6 w-6 border-2 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 rounded-lg" 
      />
      <label
        htmlFor="custom3"
        className="text-sm font-medium leading-none text-green-600"
      >
        Larger green checkbox
      </label>
    </div>
    
    <div className="p-4 border rounded-md">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="custom4" 
          className="h-4 w-4 border-2 border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:animate-pulse" 
        />
        <label
          htmlFor="custom4"
          className="text-sm font-medium leading-none text-purple-600"
        >
          Animated checkbox when checked
        </label>
      </div>
    </div>
  </div>
) 