import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ManageAdminStyles/tableData.scss';
import dropdown from '../../assets/images/dropdwn.png';

const TableData = ({
  data, onSortChange, rotation, className
}) => {
  const getKeys = () => Object.keys(data[0]);

  const getHeader = () => {
    const keys = getKeys();
    if (keys[1] === 'NoOfDoctors') {
      keys[1] = ['No of Doctors', <img src={dropdown} alt="loading" onClick={onSortChange} onKeyDown={onSortChange} style={{ transform: `rotate(${rotation}deg)` }}></img>];
    }
    return keys.map((key) => (<th key={key}>{key}</th>));
  };
  const getRowsData = () => {
    const items = data;
    const keys = getKeys();
    return items.map((row) => <tr><RenderRow data={row} keys={keys}></RenderRow></tr>);
  };
  const RenderRow = (props) => {
    return props.keys.map((key) => <td key={props.data[key]}>{props.data[key]}</td>);
  };
  return (
    <div className={className}>
      <table className="admin-table-a">
        <thead>
          <tr>
            {getHeader()}
          </tr>
        </thead>
        <tbody>
          {getRowsData()}
        </tbody>
      </table>
    </div>
  );
};
TableData.propTypes = {
  data: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
  rotation: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};
export default TableData;
