import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableData from '../../components/ManageAdmin/TableData';
import '../../styles/ManageAdminStyles/tableData.scss';

const SortAdmin = ({data}) => {
 
  const [currentSort, setCurrentSort] = useState('up');
  const [rotation, setRotation] = useState(0);

  const onSortChange = () => {
    let nextSort;
    if (currentSort === 'down') {
      nextSort = 'up';
      setRotation(rotation + 180);
    } else if (currentSort === 'up') {
      nextSort = 'down';
      setRotation(rotation - 180);
    }
    setCurrentSort(nextSort);
  };

  const sortTypes = {
    up: {
      class: 'sort-up',
      fn: (a, b) => a.NoOfDoctors - b.NoOfDoctors
    },
    down: {
      class: 'sort-down',
      fn: (a, b) => b.NoOfDoctors - a.NoOfDoctors
    }
  };


  
  data=[...data].sort(sortTypes[currentSort].fn)
  if (data.length !== 0) {
    return (
      <div>
        <TableData className="table-data" data={data} onSortChange={onSortChange} rotation={rotation} />
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          position: 'absolute', top: '305px', left: '145px', color: 'orange', fontWeight: 'bold', fontSize: '30px'
        }}
      >No data to display
      </h1>
    </div>
  );
};
SortAdmin.propTypes = {
  data: PropTypes.array.isRequired,
};
export default SortAdmin;
