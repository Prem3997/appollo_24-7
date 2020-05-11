import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AdminService from '../../services/AdminService';
import SearchAdmin from '../../components/ManageAdmin/SearchAdmin';
import img1 from '../../assets/images/edit.png';
import img2 from '../../assets/images/addEdit.png';
import ManageAdminHeader from '../../components/ManageAdmin/ManageAdminHeader';
import PaginationAdmin from '../../components/ManageAdmin/PaginationAdmin';
import '../../styles/ManageAdminStyles/manageAdmin.scss';
import SortAdmin from './SortAdmin';

const ManageAdmins = () => {
  const [adminTable, setAdminTable] = useState([]);
  const [adminTable1, setAdminTable1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  
  const history = useHistory();

  const nextPage = (id) => {
    history.push(`/admin/${id}`);
  };


  let data;

  useEffect(() => {
    AdminService.getAdmin().then((res) => {
      const adminArray = [];
      data = res.data;
      data.map((superAdmin) => {
        superAdmin.admin.map((admin) => {
          const requiredAdminData = {};
          Object.assign(requiredAdminData, {
            Admins: <a style={{ color: '#FC9916', flex: '2', cursor: 'pointer' }} onClick={() => nextPage(admin.id)}>{admin.adminName}</a>,
            NoOfDoctors: admin.doctors.length,
            Descriptions: admin.shortDescription,
            Actions: <a><img src={img1} alt="required"></img><img src={img2} alt="required"></img></a>
          });
          adminArray.push(requiredAdminData);
        });
      });
      setAdminTable(adminArray);
      setAdminTable1(adminArray);
    });
  }, []);

  const searchAdmin = (e) => {
    const filteredArray = adminTable1.filter((admin) => admin.Admins.props.children.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
    setAdminTable(filteredArray);
    if (e.target.value.length !== 0 && currentPage !== 1) setCurrentPage(currentPage - 1);
    if (filteredArray.length === 0)setCurrentPage(0);
    else setCurrentPage(1);
  };

  const paginate = (pageNumber, length) => {
    if (pageNumber <= length && pageNumber > 0) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = adminTable.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="manage-admin">
      <ManageAdminHeader></ManageAdminHeader>
      <PaginationAdmin
        className="pagination-manage-admin"
        postsPerPage={postsPerPage}
        totalPosts={adminTable.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <SearchAdmin searchAdmin={searchAdmin}></SearchAdmin>
      <SortAdmin data={currentPosts}></SortAdmin>
    </div>
  );
};

export default ManageAdmins;
