import { Textarea } from 'ethereal-ui';

export default () => (
  <div className="grid w-full gap-1.5">
    <label 
      htmlFor="message" 
      className="text-sm font-medium"
    >
      Your message
    </label>
    <Textarea 
      id="message" 
      placeholder="Type your message here." 
      className="min-h-[120px]"
    />
    <p className="text-sm text-muted-foreground">
      Your message will be sent to our support team.
    </p>
  </div>
)