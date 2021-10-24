import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getUsers } from '../services/Services';
// import AddSubCategoryModel from './';

const Users = () => {
  const [list_users, setUsers] = useState([]);

  console.log(list_users);

  const getAllUser = async () => {
    const data = await getUsers();
    setUsers(data.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      {/* <AddCategoryModel setCategorySucess={addSubCategorySucess} /> */}
      <Table bordered variant="dark">
        <thead>
          <tr>
            <th>Sn.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {list_users.map((users, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td>{users.email}</td>
              <td>{users.mobile}</td>
              <td
                style={{
                  justifyContent: 'space-evenly'
                }}
              >
                <i class="fa fa-trash"></i> <i class="fa fa-pencil"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
