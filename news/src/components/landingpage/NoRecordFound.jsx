import React from 'react';
import { FaSearch } from 'react-icons/fa';

function NoRecordFound() {
  return (
    <div className="text-center py-2">
      <FaSearch className="headingText mb-3" size={30} />
      <h5 className="fw-bold headingText">No Records Found</h5>
      <p className="text-muted small mb-0">We couldn't find news at the moment. Please check back later.</p>
    </div>
  );
}

export default NoRecordFound;
