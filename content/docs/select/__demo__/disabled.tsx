import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ethereal-ui';

export default () => (
  <div className="flex flex-col space-y-8">
    {/* Disabled Select */}
    <div className="space-y-2">
      <p className="text-sm font-medium">Disabled Select</p>
      <Select disabled>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Select with Disabled Options */}
    <div className="space-y-2">
      <p className="text-sm font-medium">Select with Disabled Options</p>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free Plan</SelectItem>
          <SelectItem value="starter">Starter Plan</SelectItem>
          <SelectItem value="pro" disabled>
            Pro Plan (Unavailable)
          </SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise Plan (Contact Sales)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
) 