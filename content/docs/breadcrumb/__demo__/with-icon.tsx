import { Home, Laptop, Smartphone, ChevronRight } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'ethereal-ui';

export default () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          <span>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className="h-3.5 w-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products" className="flex items-center gap-1">
          <span>Products</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className="h-3.5 w-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products/electronics" className="flex items-center gap-1">
          <Laptop className="h-3.5 w-3.5" />
          <span>Electronics</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronRight className="h-3.5 w-3.5" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage className="flex items-center gap-1">
          <Smartphone className="h-3.5 w-3.5" />
          <span>Smartphones</span>
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
) 