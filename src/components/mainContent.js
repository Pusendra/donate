import React, { useEffect } from 'react';
import product_card from '../data/product_data';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProducts } from '../services/Services';

const MainContent = () => {
  console.log(product_card);
  let history = useHistory();

  const handleProductDetails = () => {
    history.push('/product/description');
  };

  const getAllProducts = async () => {
    const data = await getProducts();
    console.log(
      '🚀 ~ file: mainContent.js ~ line 18 ~ getAllProducts ~ data',
      data
    );
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt="data" />
      </div>
      <div className="card_header" onClick={handleProductDetails}>
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
      </div>
      <div className="btn" style={{ marginTop: '-15px', marginBottom: '20px' }}>
        Add to cart
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      <h3>Headphones</h3>
      {listItems}
    </div>
  );
};
export default MainContent;
