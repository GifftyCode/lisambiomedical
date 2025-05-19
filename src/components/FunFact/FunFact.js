import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faVial,
  faDna,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const FunFact = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item">
              <i className="flaticon-award"></i>
              <h3>
                <CountUp end={250} enableScrollSpy />+
              </h3>
              <p>Fertility Clinics Served</p>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item">
              <i className="flaticon-remedy"></i>
              <h3>
                <CountUp end={720} enableScrollSpy />+
              </h3>
              <p> IVF Products</p>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item">
              <i className="flaticon-calendar"></i>
              <h3>
                <CountUp end={3} enableScrollSpy />+
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="item">
              <i className="flaticon-customer-care"></i>
              <h3>
                <CountUp end={24} enableScrollSpy />/
                <CountUp end={7} enableScrollSpy />
              </h3>
              <p>Client Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
