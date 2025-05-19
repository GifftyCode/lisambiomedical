import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Product = ({ item, addToCart }) => {
  return (
    <div className="row">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img src={item.proImg ? item.proImg : ""} alt="products" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="flaticon-star"></i>
              <i className="flaticon-star"></i>
              <i className="flaticon-star"></i>
              <i className="flaticon-star"></i>
              <i className="flaticon-star-1"></i>
            </div>
            <span>(25 customer reviews)</span>
          </div>
          <div className="price">
            <span className="current">${item.price}</span>
            <span className="old">${item.delPrice}</span>
          </div>
          <p>{item.short_desc}</p>
          <ul>
            <li>{item.p1}</li>
            <li>{item.p2}</li>
          </ul>
          <div className="product-option">
            <div className="product-row">
              <button className="theme-btn">Request a quote</button>
              <div></div>
            </div>
          </div>
          <div className="tg-btm">
            <p>
              <span>Categories:</span>
              {item.category}
            </p>
            <p>
              <span>Tags:</span>
              {item.tags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
