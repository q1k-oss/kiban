import { Button } from "ethereal-ui";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="dashed">Dashed</Button>
    </div>
  );
}