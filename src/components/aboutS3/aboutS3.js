import React from "react";

import Ab2 from "../../images/hero.jpeg";
import Ab1 from "../../images/signature.png";

const aboutS3 = () => {
  return (
    <section className="about_section_s3 pt-0">
      <div className="container">
        <div className="wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-2 order-lg-1">
              <div className="content">
                <h2>About LISAM</h2>
                <h3>Empowering Excellence in IVF Solutions</h3>
                <p>
                  At LISAM BIOCHEMICALS, we stand at the forefront of the IVF
                  industry, committed to delivering cutting-edge solutions and
                  unparalleled service to fertility clinics worldwide. With a
                  dedication to innovation and quality,.
                </p>
                <p>
                  we specialize in providing a comprehensive range of
                  consumables and equipment essential for optimal reproductive
                  health outcomes.
                </p>
                <div className="ceo">
                  <div>
                    <h4>Samson Omonoji</h4>
                    <span>CEO & Founder of LISAM</span>
                  </div>
                  <div>
                    <img src={Ab1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-1 order-lg-2">
              <div className="about_left">
                <img src={Ab2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutS3;
