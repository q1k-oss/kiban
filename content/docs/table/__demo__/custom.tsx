import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from 'ethereal-ui';

// Sample product data
const products = [
  { 
    id: "PROD-001", 
    name: "Ergonomic Desk Chair", 
    category: "Furniture", 
    price: "$249.99",
    stock: 28,
    status: "In Stock" 
  },
  { 
    id: "PROD-002", 
    name: "Wireless Keyboard", 
    category: "Electronics", 
    price: "$89.99",
    stock: 5,
    status: "Low Stock" 
  },
  { 
    id: "PROD-003", 
    name: "Ultra-wide Monitor", 
    category: "Electronics", 
    price: "$549.99",
    stock: 0,
    status: "Out of Stock" 
  },
  { 
    id: "PROD-004", 
    name: "Leather Notebook", 
    category: "Accessories", 
    price: "$24.99",
    stock: 45,
    status: "In Stock" 
  },
  { 
    id: "PROD-005", 
    name: "Desk Lamp", 
    category: "Furniture", 
    price: "$59.99",
    stock: 12,
    status: "In Stock" 
  },
];

// Helper function to render status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case "In Stock":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          In Stock
        </Badge>
      );
    case "Low Stock":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          Low Stock
        </Badge>
      );
    case "Out of Stock":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
          <XCircle className="h-3 w-3" />
          Out of Stock
        </Badge>
      );
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default () => (
  <div className="rounded-xl border bg-card shadow-sm">
    <div className="p-4 border-b">
      <h3 className="text-lg font-semibold">Product Inventory</h3>
      <p className="text-sm text-muted-foreground">Manage your product stock and availability.</p>
    </div>
    <div className="p-0">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-muted/70">
            <TableHead className="w-[100px] font-semibold">Product ID</TableHead>
            <TableHead className="font-semibold">Product</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold text-right">Price</TableHead>
            <TableHead className="font-semibold text-center">Stock</TableHead>
            <TableHead className="font-semibold text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="border-b border-dashed">
              <TableCell className="font-mono text-sm text-muted-foreground">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary-foreground">
                  {product.category}
                </span>
              </TableCell>
              <TableCell className="text-right font-medium">{product.price}</TableCell>
              <TableCell className="text-center">
                <span className={`
                  ${product.stock === 0 ? 'text-red-500' : 
                    product.stock < 10 ? 'text-amber-500' : 'text-green-500'}
                `}>
                  {product.stock}
                </span>
              </TableCell>
              <TableCell className="text-right">
                {getStatusBadge(product.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="p-4 border-t bg-muted/30 text-sm text-muted-foreground">
      Displaying {products.length} of {products.length} products
    </div>
  </div>
) 