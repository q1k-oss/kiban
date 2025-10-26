import {
  Alert,
  AlertDescription,
  AlertTitle,
} from 'ethereal-ui';

export default () => (
  <div className="space-y-4">
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
    
    <Alert variant="destructive" className="border-red-900/50 bg-red-950/20">
      <AlertTitle>Critical Error</AlertTitle>
      <AlertDescription>
        This alert uses the destructive variant with custom styling for a more intense error message.
      </AlertDescription>
    </Alert>
  </div>
) 