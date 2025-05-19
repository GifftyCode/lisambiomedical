import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

/* image */
import Pross1 from "../../images/work/consultation.jpeg";
import Pross2 from "../../images/work/solution.webp";
import Pross3 from "../../images/work/support.jpeg";
import Pross4 from "../../images/work/optimaztion.png";
import Shape from "../../images/work/shape.svg";

const ProcessSection = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-12">
            <SectionTitle
              title={"LISAM Biomedical Workflow"}
              subtitle={"Our Precision Process"}
            />
          </div>
        </div>
        <div className="work_wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <div className="work_card">
                <div className="image">
                  <img src={Pross1} alt="" />
                  <span className="number">01</span>
                </div>
                <div className="text">
                  <h3>Consultation & Needs Assessment</h3>
                  <p>
                    Comprehensive evaluation of your clinical requirements,
                    focusing on specialized IVF consumables and advanced
                    reproductive technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <div className="work_card">
                <div className="image">
                  <img src={Pross2} alt="" />
                  <span className="number">02</span>
                </div>
                <div className="text">
                  <h3>Customized Solution Design</h3>
                  <p>
                    Tailored equipment and consumables selection, ensuring
                    optimal performance and compatibility with your specific
                    laboratory workflow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <div className="work_card">
                <div className="image">
                  <img src={Pross3} alt="" />
                  <span className="number">03</span>
                </div>
                <div className="text">
                  <h3>Technical Support & Training</h3>
                  <p>
                    Comprehensive implementation support, including equipment
                    installation, calibration, and specialized staff training.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <div className="work_card">
                <div className="image">
                  <img src={Pross4} alt="" />
                  <span className="number">04</span>
                </div>
                <div className="text">
                  <h3>Ongoing Optimization</h3>
                  <p>
                    Continuous performance monitoring, maintenance support, and
                    adaptive solutions to enhance your reproductive medicine
                    capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shape">
            <img src={Shape} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
