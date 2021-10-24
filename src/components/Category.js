import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getCategory } from '../services/Services';
import AddCategoryModel from './AddCategoryModal';

const Category = () => {
  const [list_category, setProducts] = useState([]);
  const [addCategorySucess, setCategorySucess] = useState(false);

  console.log(list_category);

  const getAllCategory = async () => {
    const data = await getCategory();
    setProducts(data.data);
  };

  useEffect(() => {
    getAllCategory();
  }, [addCategorySucess]);

  return (
    <>
      <AddCategoryModel setCategorySucess={setCategorySucess} />
      <Table bordered variant="dark">
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th>Category Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list_category.map((category, i) => (
            <tr key={i}>
              <td>{category.categoryId}</td>
              <td>{category.categoryName}</td>
              <td>{category.categoryCode}</td>
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

export default Category;
