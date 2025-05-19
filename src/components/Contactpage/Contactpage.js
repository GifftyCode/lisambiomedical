import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-location-1"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>Plot 170DA HillSide Extension, Darwaki Abuja</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>lisambiomedicals@gmail.com</p>
                      <p>lisambiomedicals@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Call Now</h2>
                      <p>+234 818 397 1129</p>
                      <p>+234 818 397 1129</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>Have Any Questions?</h2>
              <p>
                Need expert advice on IVF consumables, equipment, or services?
                Our team at LISAM Biomedicals is here to help.
              </p>
            </div>

            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          <iframe
            title="comtact-map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126084.14091593822!2d7.363083364956795!3d9.051959243772286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20170DA%20HillSide%20Extension%2C%20Darwaki%20Abuja!5e0!3m2!1sen!2sng!4v1747691519820!5m2!1sen!2sng"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
