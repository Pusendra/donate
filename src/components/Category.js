import React from 'react';
import '../css/category.css';
const Category = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Twitter</th>
            <th>Twitter</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: '60px' }}>
            <td data-column="First Name">James</td>
            <td data-column="Last Name">Matman</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@james</td>
            <td
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <i class="fa fa-trash"></i> <i class="fa fa-pencil"></i>{' '}
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Andor</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Designer</td>
            <td data-column="Twitter">@andornagy</td>
          </tr>
          <tr>
            <td data-column="First Name">Tamas</td>
            <td data-column="Last Name">Biro</td>
            <td data-column="Job Title">Game Tester</td>
            <td data-column="Twitter">@tamas</td>
          </tr>
          <tr>
            <td data-column="First Name">Zoli</td>
            <td data-column="Last Name">Mastah</td>
            <td data-column="Job Title">Developer</td>
            <td data-column="Twitter">@zoli</td>
          </tr>
          <tr>
            <td data-column="First Name">Szabi</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@szabi</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Category;
