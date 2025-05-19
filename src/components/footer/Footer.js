import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className={"" + props.hclass}>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={logo} alt="blog" />
                </div>
                <p>
                  At LISAM BIOCHEMICALS, we are dedicated to advancing
                  reproductive health through innovative solutions in IVF
                  consumables and equipment..
                </p>
                <div className="social-widget">
                  <ul>
                    {/* <li>
                      <Link onClick={ClickHandler} to="#">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </Link>
                    </li> */}
                    <li>
                      <Link onClick={ClickHandler} to="#">
                        <i className="flaticon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="#">
                        <i className="flaticon-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="#">
                        <i className="flaticon-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/services">
                      Services
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/blog">
                      Latest News
                    </Link>
                  </li> */}
                  <li>
                    <Link onClick={ClickHandler} to="/doctor">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget s2">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/project">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/faq">
                      Faq
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget contact-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>lisambiomedicals@gmail.com</span>
                  </li>
                  <li>
                    {" "}
                    <i className="flaticon-telephone"></i>
                    <span>
                      (+234) 818 397 1129
                      <br />
                      (+234) 807 304 4288
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-location-1"></i>
                    <span>
                      Plot 170DA Hillside Extension. <br />
                      Darwaki, Abuja{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row g-0">
            <div className="col col-lg-6 col-12">
              <p className="copyright">
                {" "}
                Copyright &copy; 2025 Crafted by{" "}
                <Link onClick={ClickHandler} to="/">
                  lisambiomedicals
                </Link>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col col-lg-6 col-12">
              <ul>
                <li>
                  <Link onClick={ClickHandler} to="/privace">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
