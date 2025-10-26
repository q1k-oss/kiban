import { Input } from 'ethereal-ui';

export default function InputBasicDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
  );
} 