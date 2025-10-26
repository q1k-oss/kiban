import { Button } from "ethereal-ui";

export default function ButtonSizesDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium mb-3">Default Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <span className="text-base">A</span>
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Outline Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline" size="default">Default</Button>
          <Button variant="outline" size="lg">Large</Button>
          <Button variant="outline" size="icon">
            <span className="text-base">A</span>
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Secondary Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="default">Default</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="secondary" size="icon">
            <span className="text-base">A</span>
          </Button>
        </div>
      </div>
    </div>
  );
} 