import React from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import '../../styles/ManageAdminStyles/pagination.scss';


const PaginationAdmin = ({
  className, postsPerPage, totalPosts, paginate, currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const { length } = pageNumbers;
  const number = currentPage;

  return (


    <div className={className}>
      <span id="leftArrow-a"><img src={leftArrow} alt="loading" onClick={() => paginate(number - 1, length)}></img></span>
      <span id="view-text1-a"> viewing </span>
      <span id="view-number-a">{number}</span>
      <span id="view-text2-a"> of </span>
      {number !== 0
        ? <span id="view-number-a">{pageNumbers[length - 1]}</span>
        : <span id="view-number-a">0</span>}
      <span id="rightArrow-a"><img src={rightArrow} alt="loading" onClick={() => paginate(number + 1, length)}></img></span>
    </div>

  );
};

PaginationAdmin.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default PaginationAdmin;
