import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  const totalPages = 10; // Total number of pages.
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumbersToShow = 5; // Maximum number of page numbers to display at once.

  // Inline styles
  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the pagination.
    listStyleType: 'none',
    padding: '0',
  };

  const paginationItemStyle = {
    margin: '0 4px',
  };

  const paginationLinkStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: '#fff',
    color: '#000', // Text color.
  };

  const activePaginationLinkStyle = {
    ...paginationLinkStyle,
    backgroundColor: '#F97316', // Background color for the active item.
    borderColor: '#F97316', // Border color for the active item.
    color: '#fff', // Text color for the active item.
  };

  // Styles for the "Previous" and "Next" arrows.
  const normalArrowStyle = {
    ...paginationLinkStyle,
    backgroundColor: '#fff',
  };

  const disabledArrowStyle = {
    ...paginationLinkStyle,
    backgroundColor: '#f0f0f0',
    cursor: 'default',
    color: '#d3d3d3',
  };

  // Handle page click.
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Generate page links, including logic for ellipsis.
  const generatePageLinks = () => {
    let pages = [];
    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - maxPageNumbersToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page} style={paginationItemStyle}>
          <PaginationLink
            href="#"
            onClick={(e) => handlePageChange(e, page)}
            style={currentPage === page ? activePaginationLinkStyle : paginationLinkStyle}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis at the start if needed.
    if (startPage > 1) {
      pages.unshift(
        <PaginationItem key="startEllipsis" style={paginationItemStyle}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add ellipsis at the end if needed.
    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="endEllipsis" style={paginationItemStyle}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pages;
  };

  // Handle "Next" click.
  const handleNext = (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle "Previous" click.
  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Pagination style={paginationStyle}>
      <PaginationContent>
        <PaginationItem style={paginationItemStyle}>
          <PaginationPrevious 
            href="#"
            onClick={handlePrevious}
            style={currentPage === 1 ? disabledArrowStyle : normalArrowStyle}
          />
        </PaginationItem>
        {generatePageLinks()}
        <PaginationItem style={paginationItemStyle}>
          <PaginationNext 
            href="#"
            onClick={handleNext}
            style={currentPage === totalPages ? disabledArrowStyle : normalArrowStyle}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationDemo;
