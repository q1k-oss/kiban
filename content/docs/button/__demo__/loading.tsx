'use client'

import { Save, Download, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "ethereal-ui";

export default function ButtonLoadingDemo() {
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate async operation
    setTimeout(() => setIsSaving(false), 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate async operation
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const handleSend = () => {
    setIsSending(true);
    // Simulate async operation
    setTimeout(() => setIsSending(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Basic Loading</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button loading={true}>Loading</Button>
          <Button variant="outline" loading={true}>Loading</Button>
          <Button variant="secondary" loading={true}>Processing</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Interactive Loading</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button 
            icon={<Save />} 
            loading={isSaving} 
            onClick={handleSave}
          >
            {isSaving ? "Saving" : "Save"}
          </Button>
          
          <Button 
            variant="outline" 
            icon={<Download />} 
            loading={isDownloading} 
            onClick={handleDownload}
          >
            {isDownloading ? "Downloading" : "Download"}
          </Button>
          
          <Button 
            variant="secondary" 
            icon={<Send />} 
            loading={isSending} 
            onClick={handleSend}
          >
            {isSending ? "Sending" : "Send"}
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Click any of the buttons above to see the loading state in action.
      </div>
    </div>
  );
}