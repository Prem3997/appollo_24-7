import React, { useState } from 'react';
import PaginationAdmin from '../ManageAdmin/PaginationAdmin';
import TableData from '../ManageAdmin/TableData';

const Pagination = (props) => {
  // const [doctors, setDoctors] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(1);
  const paginate = (pageNumber, length) => {
    if (pageNumber <= length && pageNumber > 0) {
      setCurrentPage(pageNumber);
    }

  };
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = props.tableData.slice(indexOfFirstDoctor, indexOfLastDoctor);
  if (props.tableData.length !== 0) {
    return (
      <div>
        <PaginationAdmin className="pagination-admin" postsPerPage={doctorsPerPage} totalPosts={props.tableData.length} paginate={paginate} currentPage={currentPage}></PaginationAdmin>
        <TableData className="doctor-data" data={currentDoctors}></TableData>
      </div>
    );
  }

  return (
    <div></div>
  );

};

export default Pagination;
