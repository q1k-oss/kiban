'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/components/utils';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Button,
} from '@happect/ethereal-ui';

export default function PaginationCustomDemo() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 12;
  
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Card-style pagination */}
      <div className="p-4 bg-card rounded-lg border shadow-sm">
        <Pagination>
          <PaginationContent className="flex flex-wrap">
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(1)}
              >
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">First page</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
            </PaginationItem>
            
            {Array.from({ length: 5 }, (_, i) => {
              const page = currentPage - 2 + i;
              if (page < 1 || page > totalPages) return null;
              return (
                <PaginationItem key={page}>
                  <Button
                    variant={currentPage === page ? "default" : "ghost"}
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
              >
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Last page</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      {/* Gradient style pagination */}
      <div className="py-4">
        <Pagination>
          <PaginationContent className="flex flex-wrap items-center gap-2">
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={cn(
                  "flex h-9 items-center gap-1 rounded-md border border-transparent px-3 transition-colors",
                  currentPage === 1 
                    ? "pointer-events-none cursor-not-allowed opacity-50 text-muted-foreground" 
                    : "hover:border-border hover:bg-accent"
                )}
                aria-disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </PaginationLink>
            </PaginationItem>
            
            <PaginationItem className="flex items-center px-3">
              <span className="text-sm font-medium whitespace-nowrap">
                Page {currentPage} of {totalPages}
              </span>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={cn(
                  "flex h-9 items-center gap-1 rounded-md border border-transparent px-3 transition-colors",
                  currentPage === totalPages 
                    ? "pointer-events-none cursor-not-allowed opacity-50 text-muted-foreground" 
                    : "hover:border-border hover:bg-accent"
                )}
                aria-disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      {/* Colored, separated pagination */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-4 rounded-lg">
        <Pagination>
          <PaginationContent className="justify-center gap-1">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    className={cn(
                      "h-8 w-8 rounded-md flex items-center justify-center transition-all",
                      currentPage === page
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:from-purple-600 hover:to-blue-600"
                        : "hover:bg-muted text-foreground"
                    )}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
} 