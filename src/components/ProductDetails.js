import React from 'react'
import '../css/productDetail.scss'
const ProductDetails = () => {
    return (
        <section className="productCard">
        <div className="container">
          <div className="info">
            <h3 className="name">Fila Disruptor</h3>
            <h1 className="slogan">Performance with comfort</h1>
            <p className="price">$500.00</p>
            <div className="attribs">
              <div className="attrib size">
                <p className="header">Select Size</p>
                <div className="options">
                  <div className="option">6</div>
                  <div className="option">7</div>
                  <div className="option">8</div>
                  <div className="option">9</div>
                  <div className="option">10</div>
                  <div className="option">11</div>
                </div>
              </div>
              <div className="attrib color">
                <p className="header">Select Color</p>
                <div className="options">
                  <div className="option" style={{color: "#60aec1"}}></div>
                  <div className="option" style={{color: "#ef525e"}}></div>
                  <div className="option" style={{color: "#000000"}}></div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <div className="button">Add to cart</div>
              <div className="button colored">Buy now</div>
            </div>
          </div>
          <div className="preview">
            <div className="imgs">
              <img className="activ" src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/tenis%2Ffila%2Ft2.png?alt=media&token=f481e143-1e6f-43fd-8ba5-66bb593d8486" alt="img 1"/>
            </div>
          
          </div>
        </div>
      </section>
    )
}

export default ProductDetails
