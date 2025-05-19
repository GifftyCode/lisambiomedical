import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShopProduct = ({ products }) => {
  const navigate = useNavigate();

  const viewDetails = (slug) => {
    navigate(`/product-single/show/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="wpo-shop-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="shop-grids clearfix">
              {products.length > 0 ? (
                products.slice(0, 6).map((product, index) => (
                  <div className="grid" key={index}>
                    <div className="img-holder">
                      <Link to={`/product-single/show/${product.slug}`}>
                        <img
                          src={product.proImg}
                          alt={product.title || "Product Image"}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="details">
                      <h3>
                        <Link to={`/product-single/show/${product.slug}`}>
                          {product.title}
                        </Link>
                      </h3>
                      <div className="theme-btn-s3 mt-2">
                        <button
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Click to view product details"
                          onClick={() => viewDetails(product.slug)}
                          className=""
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
