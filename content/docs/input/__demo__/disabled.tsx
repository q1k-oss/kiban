import { Input, Label } from "ethereal-ui";

export default function InputDisabledDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="disabled-empty">Disabled Input (Empty)</Label>
        <Input
          type="text"
          id="disabled-empty"
          placeholder="You cannot type here..."
          disabled
        />
      </div>
      
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="disabled-with-value">Disabled Input (With Value)</Label>
        <Input
          type="text"
          id="disabled-with-value"
          value="This content cannot be edited"
          disabled
        />
      </div>
    </div>
  );
}