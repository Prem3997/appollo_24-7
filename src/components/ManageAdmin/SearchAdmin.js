import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ManageAdminStyles/searchAdmin.scss';


function SearchAdmin({ searchAdmin }) {
  return (
    <div>
      <input type="text" style={{ width: '242px', height: '36px' }} className="text-box" placeholder="  Find Admin" onChange={searchAdmin}></input>
    </div>

  );
}

SearchAdmin.propTypes = {
  searchAdmin: PropTypes.string.isRequired
};

export default SearchAdmin;
