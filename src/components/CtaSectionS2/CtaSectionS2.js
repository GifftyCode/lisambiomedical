import React from "react";
import Cta1 from "../../images/sliderImg.png";
const CtaSectionS2 = () => {
  return (
    <section className="cta_section_s2">
      <div className="container">
        <div className="cta_wrapper">
          <div className="content">
            <div className="icon">
              <i className="flaticon-phone-call"></i>
            </div>
            <div className="text">
              <h2>Available 24/7</h2>
              <h3>(818) 397-1129</h3>
            </div>
          </div>
          {/* <div className="shape-icon">
                        <i className="flaticon-24-7"></i>
                    </div> */}
          <div className="image">
            <img src={Cta1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionS2;
