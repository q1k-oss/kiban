'use client'

import { useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'ethereal-ui';

export default function PaginationWithTextDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  
  const handlePageChange = (page: number) => {
    // Ensure page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  // Generate array of pages to show
  const getVisiblePages = () => {
    const delta = 1; // Number of pages to show on each side of current page
    const pages = [];
    
    // Always add first page
    pages.push(1);
    
    // Calculate range of pages to show around current page
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);
    
    // Add ellipsis if there's a gap after first page
    if (rangeStart > 2) {
      pages.push(null); // null represents ellipsis
    }
    
    // Add pages in the calculated range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }
    
    // Add ellipsis if there's a gap before last page
    if (rangeEnd < totalPages - 1) {
      pages.push(null); // null represents ellipsis
    }
    
    // Always add last page if it's not already included
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const visiblePages = getVisiblePages();
  
  return (
    <div className="space-y-2">
      <div className="text-sm text-center text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          
          {visiblePages.map((page, i) => (
            page === null ? (
              <PaginationItem key={`ellipsis-${i}`}>
                <span className="flex h-10 w-10 items-center justify-center">...</span>
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={page === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page as number);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          ))}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
} 