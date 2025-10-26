import { Separator } from 'ethereal-ui';

export default () => (
  <div className="space-y-6">
    <div>
      <h4 className="text-sm font-medium mb-2">Horizontal (Default)</h4>
      <Separator />
      <div className="flex justify-between my-4 text-sm">
        <div>Item One</div>
        <div>Item Two</div>
        <div>Item Three</div>
      </div>
      <Separator />
    </div>
    
    <div>
      <h4 className="text-sm font-medium mb-2">Vertical</h4>
      <div className="flex h-16 items-center space-x-4">
        <div className="text-sm">Account</div>
        <Separator orientation="vertical" />
        <div className="text-sm">Settings</div>
        <Separator orientation="vertical" />
        <div className="text-sm">Messages</div>
        <Separator orientation="vertical" />
        <div className="text-sm">Profile</div>
      </div>
    </div>
  </div>
) 