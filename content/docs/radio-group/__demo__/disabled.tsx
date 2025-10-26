import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabledDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-3">Disabled Radio Group</h4>
        <RadioGroup disabled defaultValue="default">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="disabled-option-one" />
            <Label htmlFor="disabled-option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="disabled-option-two" />
            <Label htmlFor="disabled-option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="disabled-option-three" />
            <Label htmlFor="disabled-option-three">Option Three</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">Individual Disabled Options</h4>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem disabled value="option-two" id="option-two" />
            <Label className="text-muted-foreground" htmlFor="option-two">
              Option Two (Disabled)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Option Three</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem disabled value="option-four" id="option-four" />
            <Label className="text-muted-foreground" htmlFor="option-four">
              Option Four (Disabled)
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
} 