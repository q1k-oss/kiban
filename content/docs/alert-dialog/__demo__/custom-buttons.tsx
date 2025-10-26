import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from 'ethereal-ui';

export default () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
        <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
        Update Required
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="border-t-4 border-t-amber-500">
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2 text-amber-600">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          System Update Required
        </AlertDialogTitle>
        <AlertDialogDescription>
          Your system needs to be updated to the latest version to ensure security and performance.
          This will require a restart of the application. Would you like to update now or later?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="gap-2">
        <AlertDialogCancel className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
          <XCircle className="mr-2 h-4 w-4" />
          Remind me later
        </AlertDialogCancel>
        <AlertDialogAction className="bg-green-600 text-white hover:bg-green-700">
          <CheckCircle className="mr-2 h-4 w-4" />
          Update now
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
) 