import { Button } from "ethereal-ui";

export default function ButtonVariantsDemo() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Default</h4>
        <Button>Default</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Secondary</h4>
        <Button variant="secondary">Secondary</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Destructive</h4>
        <Button variant="destructive">Destructive</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Outline</h4>
        <Button variant="outline">Outline</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Ghost</h4>
        <Button variant="ghost">Ghost</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Link</h4>
        <Button variant="link">Link</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Dashed</h4>
        <Button variant="dashed">Dashed</Button>
      </div>
      
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-sm font-medium">Disabled</h4>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
} 