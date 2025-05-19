import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PageTitle from "../../components/pagetitle/PageTitle";
import { addToCart } from "../../store/actions/action";
import ShopProduct from "../../components/ShopProduct";
import api from "../../api";
import Navbar from "../../components/Navbar/Navbar";
import CtafromSection from "../../components/CtafromSection/CtafromSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo.png";

const ShopPage = ({ addToCart }) => {
  const { category } = useParams();
  const productsArray = api();
  const [filteredProducts, setFilteredProducts] = useState(productsArray);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    if (category) {
      const filtered = productsArray.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsArray);
    }
  }, [category, productsArray]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header wpo-site-header-s2"} Logo={Logo} />
      <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
      <section className="shop_section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ShopProduct
                addToCartProduct={addToCartProduct}
                products={currentProducts}
              />
              <div className="pagination-wrapper pagination-wrapper-center">
                <ul className="pg-pagination">
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous"
                    >
                      <i className="ti-angle-left"></i>
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      <button onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next"
                    >
                      <i className="ti-angle-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtafromSection hclass={"ctafrom_section"} />
      <Footer hclass={"wpo-site-footer"} />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ShopPage);
