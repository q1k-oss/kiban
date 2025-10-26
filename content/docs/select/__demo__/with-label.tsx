import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ethereal-ui';

export default () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="timezone">Timezone</Label>
    <Select>
      <SelectTrigger id="timezone" className="w-full">
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
        <SelectItem value="cet">Central European Time (CET)</SelectItem>
        <SelectItem value="ist">India Standard Time (IST)</SelectItem>
        <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
        <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
      </SelectContent>
    </Select>
    <p className="text-sm text-muted-foreground">
      Select your local timezone for accurate scheduling.
    </p>
  </div>
) 