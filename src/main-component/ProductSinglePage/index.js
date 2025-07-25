import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart } from "../../store/actions/action";
import Product from "./product";
import api from "../../api";
import ProductTabs from "./alltab";
import Footer from "../../components/footer/Footer";
import logo from "../../images/logo.png";

const ProductSinglePage = (props) => {
  const { slug } = useParams();

  const productsArray = api();
  const Allproduct = productsArray;

  const { addToCart } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(
      Allproduct.filter((Allproduct) => Allproduct.slug === String(slug))
    );
  }, []);

  const item = product[0];

  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header wpo-site-header-s2"} Logo={logo} />
      <PageTitle pageTitle={"Shop Single"} pagesub={"Shop Single"} />
      <section className="shop_single section-padding">
        <div className="container">
          {item ? <Product item={item} addToCart={addToCart} /> : null}
          <ProductTabs item={item} />
        </div>
      </section>
      <Footer hclass={"wpo-site-footer_s2"} />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
