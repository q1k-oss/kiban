import {
  Alert,
  AlertDescription,
  AlertTitle,
} from 'ethereal-ui';

export default () => (
  <div className="space-y-4">
    <Alert>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a standard alert providing information to the user.
      </AlertDescription>
    </Alert>
    
    <Alert className="border-blue-500/30 bg-blue-500/10">
      <AlertTitle className="text-blue-700">Note</AlertTitle>
      <AlertDescription className="text-blue-700">
        Alerts can be customized with additional classes to change their appearance.
      </AlertDescription>
    </Alert>
    
    <Alert className="border-amber-500/30 bg-amber-500/10">
      <AlertTitle className="text-amber-700">Warning</AlertTitle>
      <AlertDescription className="text-amber-700">
        You can style alerts with custom colors to indicate different levels of importance.
      </AlertDescription>
    </Alert>
  </div>
) 