import React, { useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../api/Services";

const ServiceSidebar = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (showError) {
      setShowError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("Subscription email:", email);
      // Here you would typically call an API to handle the subscription
      setEmail(""); // Clear form after submission
    }
  };

  return (
    <div className="service_sidebar">
      <div className="services_widget widget">
        <h2>IVF Solutions</h2>
        <ul>
          {Services.map((service, index) => (
            <li key={index}>
              <Link
                onClick={ClickHandler}
                to={`/service-single/${service.slug}`}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact_widget widget">
        <h2>Need Consultation?</h2>
        <p>
          Contact our specialists for personalized advice on the right IVF
          equipment and consumables for your laboratory.
        </p>
        <Link onClick={ClickHandler} to="/contact" className="theme-btn">
          Contact Us
        </Link>
      </div>

      {/* <div className="brochure_widget widget">
        <h2>Downloads</h2>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fi flaticon-pdf-file"></i> Product Catalog
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fi flaticon-pdf-file"></i> Technical Specifications
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fi flaticon-pdf-file"></i> Quality Certifications
            </a>
          </li>
        </ul>
      </div> */}

      {/* <div className="newsletter_widget widget">
        <h2>Stay Updated</h2>
        <span>Subscribe to our newsletter</span>
        <form className="emailForm" onSubmit={handleSubmit}>
          <input
            className="fild"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address"
          />
          <button type="submit">Subscribe</button>
        </form>
        {showError && (
          <p style={{ color: "red" }}>Please enter a valid email.</p>
        )}
        <p>Receive updates on new products and IVF innovations</p>
      </div> */}
    </div>
  );
};

export default ServiceSidebar;
