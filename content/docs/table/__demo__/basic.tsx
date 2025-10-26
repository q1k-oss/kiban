import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'ethereal-ui';

export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">001</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john.doe@example.com</TableCell>
        <TableCell className="text-right">Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">002</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane.smith@example.com</TableCell>
        <TableCell className="text-right">Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">003</TableCell>
        <TableCell>Michael Johnson</TableCell>
        <TableCell>michael.johnson@example.com</TableCell>
        <TableCell className="text-right">Inactive</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">004</TableCell>
        <TableCell>Emily Brown</TableCell>
        <TableCell>emily.brown@example.com</TableCell>
        <TableCell className="text-right">Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">005</TableCell>
        <TableCell>Robert Wilson</TableCell>
        <TableCell>robert.wilson@example.com</TableCell>
        <TableCell className="text-right">Pending</TableCell>
      </TableRow>
    </TableBody>
  </Table>
) 