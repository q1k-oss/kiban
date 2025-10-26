import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupLabelDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-3">Select your preferred notification method</h4>
        <RadioGroup defaultValue="email">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="email" id="notification-email" />
            <div className="grid gap-1.5">
              <Label htmlFor="notification-email">Email</Label>
              <p className="text-sm text-muted-foreground">
                We'll send you email notifications about account activity.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="sms" id="notification-sms" />
            <div className="grid gap-1.5">
              <Label htmlFor="notification-sms">SMS</Label>
              <p className="text-sm text-muted-foreground">
                We'll send you text messages about account activity.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="push" id="notification-push" />
            <div className="grid gap-1.5">
              <Label htmlFor="notification-push">Push Notification</Label>
              <p className="text-sm text-muted-foreground">
                We'll send you push notifications about account activity.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
} 