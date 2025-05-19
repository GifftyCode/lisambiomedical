import React from "react";
import CountUp from "react-countup";

// image
import Ab1 from "../../images/about.jpeg";
import Abd1 from "../../images/doctors/4.jpeg";
import Abd2 from "../../images/doctors/2.webp";
import Abd3 from "../../images/doctors/3.jpeg";
import Abd4 from "../../images/doctors/1.jpeg";
import sine from "../../images/signature.png";

const about = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about_left">
              <div className="image">
                <img src={Ab1} alt="" />
                <span className="round-on"></span>
                <span className="round-two"></span>
                <div className="award">
                  <div className="icon">
                    <i className="flaticon-cup"></i>
                  </div>
                  <div className="text">
                    <h2>
                      <CountUp end={25} enableScrollSpy />+
                    </h2>
                    <p>Fertility Clinics Served</p>
                  </div>
                </div>
                <div className="doctors">
                  <ul>
                    <li>
                      <img src={Abd1} alt="" />
                    </li>
                    <li>
                      <img src={Abd2} alt="" />
                    </li>
                    <li>
                      <img src={Abd3} alt="" />
                    </li>
                    <li>
                      <img src={Abd4} alt="" />
                    </li>
                    <li>
                      <span>95+</span>
                    </li>
                  </ul>
                  <h4>Available Products</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="content">
              <h2>About LISAM Biomedical</h2>
              <h3>Advancing IVF Success Through Innovation</h3>
              <p>
                At LISAM Biomedical, we specialize in providing cutting-edge
                consumables and equipment specifically designed for in vitro
                fertilization laboratories. Our comprehensive product range
                helps embryologists and IVF specialists achieve optimal
                conditions for embryo development, resulting in improved
                clinical outcomes and success rates.
              </p>
              <p>
                From state-of-the-art incubators and workstations to premium
                culture media and specialized laboratory consumables, our
                solutions are developed with precision and quality at their
                core. We partner with IVF clinics worldwide to elevate their
                technical capabilities and enhance patient care.
              </p>
              <div className="ceo">
                <div>
                  <h4>Samson Omonoji</h4>
                  <span>CEO & Founder of LISAM</span>
                </div>
                <div>
                  <img src={sine} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
