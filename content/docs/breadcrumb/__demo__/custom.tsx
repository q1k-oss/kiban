import { ChevronRight, Home, FolderOpen, FileText } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'ethereal-ui';

export default () => (
  <div className="space-y-8">
    {/* Pill Style Breadcrumb */}
    <div>
      <h3 className="text-sm font-medium mb-3">Pill Style</h3>
      <Breadcrumb>
        <BreadcrumbList className="rounded-full bg-muted p-1 px-3">
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/" 
              className="text-muted-foreground hover:text-primary text-xs font-medium"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground/50" />
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/docs" 
              className="text-muted-foreground hover:text-primary text-xs font-medium"
            >
              Documentation
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground/50" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xs font-medium rounded-full bg-primary text-primary-foreground px-2 py-0.5">
              Components
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    {/* File Explorer Style */}
    <div>
      <h3 className="text-sm font-medium mb-3">File Explorer Style</h3>
      <Breadcrumb>
        <BreadcrumbList className="bg-muted/40 p-2 border rounded-md">
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/" 
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-muted text-sm"
            >
              <Home className="h-3.5 w-3.5" />
              <span>root</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/projects" 
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-muted text-sm"
            >
              <FolderOpen className="h-3.5 w-3.5 text-amber-500" />
              <span>projects</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-1 px-2 py-1 bg-muted text-primary rounded text-sm">
              <FileText className="h-3.5 w-3.5 text-blue-500" />
              <span>readme.md</span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </div>
) 