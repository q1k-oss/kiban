'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Button,
} from 'ethereal-ui';

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
          <PaginationContent className="flex flex-wrap">
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={`flex h-9 items-center gap-1 rounded-md border border-transparent px-2 ${
                  currentPage === 1 
                    ? "pointer-events-none text-muted-foreground" 
                    : "hover:border-border"
                }`}
                aria-disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </PaginationLink>
            </PaginationItem>
            
            <div className="flex items-center px-2">
              <span className="text-sm font-medium">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={`flex h-9 items-center gap-1 rounded-md border border-transparent px-2 ${
                  currentPage === totalPages 
                    ? "pointer-events-none text-muted-foreground" 
                    : "hover:border-border"
                }`}
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
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
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
                    className={`h-8 w-8 rounded-md ${
                      currentPage === page
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                        : "hover:bg-muted"
                    }`}
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