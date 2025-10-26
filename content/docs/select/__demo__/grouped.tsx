import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from 'ethereal-ui';

export default () => (
  <Select>
    <SelectTrigger className="w-[280px]">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>North America</SelectLabel>
        <SelectItem value="usa">United States</SelectItem>
        <SelectItem value="canada">Canada</SelectItem>
        <SelectItem value="mexico">Mexico</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Europe</SelectLabel>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="france">France</SelectItem>
        <SelectItem value="germany">Germany</SelectItem>
        <SelectItem value="italy">Italy</SelectItem>
        <SelectItem value="spain">Spain</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Asia</SelectLabel>
        <SelectItem value="china">China</SelectItem>
        <SelectItem value="japan">Japan</SelectItem>
        <SelectItem value="korea">South Korea</SelectItem>
        <SelectItem value="india">India</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Oceania</SelectLabel>
        <SelectItem value="australia">Australia</SelectItem>
        <SelectItem value="newzealand">New Zealand</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
) 