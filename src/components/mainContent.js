import React, { useEffect, useState } from 'react';
// import product_card from '../data/product_data';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProducts } from '../services/Services';

const MainContent = ({ showCart, productsByUser, path }) => {
  const [product_card, setProducts] = useState([]);
  console.log(product_card);
  let history = useHistory();

  const handleProductDetails = (item) => {
    history.push({
      pathname: `/product/description/${item.productID}`,
      state: item
    });
  };

  const getAllProducts = async () => {
    const data = await getProducts();
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const selectedData =
    path === '/profile/products' && productsByUser.length > 0
      ? productsByUser
      : product_card;

  const listItems =
    path === '/profile/products' && productsByUser.length === 0
      ? 'No Data Found'
      : selectedData?.map((item) => (
          <div className="card" key={item?.id || item?.productID}>
            <div style={{ color: '#fe8033', position: 'absolute', zIndex: 100 }}>
              <i class="fa fa-pencil"></i>
            </div>
            <div
              className="card_img"
              onClick={() => handleProductDetails(item)}
            >
              <img src={item.productImage} alt="data" />
            </div>
            <div
              className="card_header"
              onClick={() => handleProductDetails(item)}
            >
              <h2>{item.productName}</h2>
              <p>{item.description}</p>
              <p className="price">
                <span>Rs</span> {item.productPrice}
              </p>
            </div>
            {showCart && (
              <div
                className="btn"
                style={{ marginTop: '-15px', marginBottom: '20px' }}
              >
                Add to cart
              </div>
            )}
          </div>
        ));
  return (
    <div className="main_content">
      <h3>{product_card[0]?.categoryName}</h3>
      {listItems}
    </div>
  );
};
export default MainContent;
