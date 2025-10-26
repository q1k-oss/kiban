'use client'

import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
} from 'ethereal-ui';

// Sample data
const initialData = [
  { id: 1, name: "John Doe", role: "Developer", department: "Engineering", joinDate: "2021-06-10" },
  { id: 2, name: "Jane Smith", role: "Designer", department: "Product", joinDate: "2020-03-15" },
  { id: 3, name: "Robert Johnson", role: "Manager", department: "Engineering", joinDate: "2019-11-20" },
  { id: 4, name: "Emily Davis", role: "Developer", department: "Engineering", joinDate: "2022-02-05" },
  { id: 5, name: "Michael Wilson", role: "Product Owner", department: "Product", joinDate: "2021-09-18" },
  { id: 6, name: "Sarah Thompson", role: "Designer", department: "Product", joinDate: "2022-04-30" },
  { id: 7, name: "David Brown", role: "Manager", department: "Marketing", joinDate: "2020-07-14" },
];

type SortDirection = 'asc' | 'desc' | null;
type SortableColumn = 'name' | 'role' | 'department' | 'joinDate';

export default () => {
  const [data, setData] = useState(initialData);
  const [sortColumn, setSortColumn] = useState<SortableColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (column: SortableColumn) => {
    // If clicking the same column, cycle through sort directions
    if (sortColumn === column) {
      const nextSortDirection: SortDirection = 
        sortDirection === 'asc' ? 'desc' : 
        sortDirection === 'desc' ? null : 'asc';
      
      setSortDirection(nextSortDirection);
      
      // Reset to original order if clearing sort
      if (nextSortDirection === null) {
        setData(initialData);
        setSortColumn(null);
        return;
      }
    } else {
      // New column, start with ascending sort
      setSortColumn(column);
      setSortDirection('asc');
    }
    
    // Sort the data
    const sortedData = [...data].sort((a, b) => {
      const direction = sortColumn === column && sortDirection === 'desc' ? -1 : 1;
      
      if (a[column] < b[column]) return -1 * direction;
      if (a[column] > b[column]) return 1 * direction;
      return 0;
    });
    
    setData(sortedData);
  };

  const getSortIcon = (column: SortableColumn) => {
    if (sortColumn !== column) return <ChevronsUpDown className="ml-2 h-4 w-4" />;
    if (sortDirection === 'asc') return <ChevronUp className="ml-2 h-4 w-4" />;
    if (sortDirection === 'desc') return <ChevronDown className="ml-2 h-4 w-4" />;
    return <ChevronsUpDown className="ml-2 h-4 w-4" />;
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort('name')}
                  className="flex items-center p-0 font-medium"
                >
                  Name
                  {getSortIcon('name')}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort('role')}
                  className="flex items-center p-0 font-medium"
                >
                  Role
                  {getSortIcon('role')}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort('department')}
                  className="flex items-center p-0 font-medium"
                >
                  Department
                  {getSortIcon('department')}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort('joinDate')}
                  className="flex items-center p-0 font-medium"
                >
                  Join Date
                  {getSortIcon('joinDate')}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Click on column headers to sort the table.
      </p>
    </div>
  );
} 