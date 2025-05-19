import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Services from "../../api/Services";
import ServiceFrom from "./ServiceFrom ";
import ServiceSidebar from "./sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import simg1 from "../../images/service-single/img-1.webp";
import simg2 from "../../images/service-single/img-2.jpg";
import logo from "../../images/logo.png";

const ServiceDetails = {
  "ivf-consumables": {
    title: "Consumables",
    mainContent: `LISAM Biomedicals offers premium laboratory consumables specifically engineered for the demands of reproductive medicine. Our product line includes precision pipettes, specialized culture dishes, handling tools, and disposable labware designed to maintain sterility and optimize procedural outcomes in embryology labs.

    Our consumables are manufactured to the highest quality standards, ensuring reliability and consistency across all IVF procedures. Each product undergoes rigorous testing to meet international quality certifications, providing you with confidence in every procedure.`,
    capabilities: [
      "Single-use sterile consumables for contamination prevention",
      "Specialized microtools for precise embryo manipulation",
      "Non-toxic, embryo-safe materials certified for human IVF",
      "Ergonomically designed tools reducing operator fatigue",
      "Batch-tested products ensuring consistent quality",
    ],
    approach: `At LISAM, we understand that even the smallest components can have significant impacts on IVF success rates. Our approach to consumable development centers on three core principles: precision engineering, biocompatibility, and procedural efficiency.

    We collaborate directly with embryologists and IVF specialists to continuously refine our designs, incorporating practitioner feedback into each product iteration. This collaborative approach ensures our consumables address real clinical needs while advancing the technical capabilities of modern IVF laboratories.`,
  },
  "embryology-equipment": {
    title: "Equipment",
    mainContent: `LISAM's embryology equipment represents the pinnacle of reproductive technology, offering comprehensive solutions for every stage of the IVF process. Our equipment lineup includes advanced incubators with precise environmental control, state-of-the-art micromanipulation systems, and cutting-edge imaging platforms.

    Each piece of equipment is designed with both technical excellence and user experience in mind, featuring intuitive interfaces and automated monitoring capabilities to streamline laboratory workflows while maximizing successful outcomes.`,
    capabilities: [
      "Time-lapse monitoring systems for continuous embryo assessment",
      "Multi-gas incubators with advanced recovery systems",
      "Integrated data management for complete procedure documentation",
      "Laser systems with submicron precision for hatching procedures",
      "Automated platforms reducing variables in critical procedures",
    ],
    approach: `LISAM's equipment development philosophy centers on innovation balanced with reliability. We recognize that while technological advancement drives the field forward, consistency and dependability form the foundation of successful clinical practice.

    Our engineering teams work alongside reproductive scientists to identify emerging needs and technological opportunities, resulting in equipment that not only meets current standards but anticipates future directions in reproductive medicine. We provide comprehensive installation, training, and service packages to ensure your investment delivers optimal performance throughout its operational life.`,
  },
  "cryopreservation-systems": {
    title: "Cryopreservation",
    mainContent: `LISAM Biomedicals delivers comprehensive cryopreservation solutions designed to safeguard precious reproductive materials with uncompromising reliability. Our systems incorporate the latest advances in thermal management, featuring sophisticated monitoring technologies and redundant safety features.

    From compact benchtop units to large-scale biorepositories, our cryopreservation equipment maintains optimal storage conditions with minimal temperature variation, protecting the viability of gametes and embryos throughout extended storage periods.`,
    capabilities: [
      "Advanced vapor phase storage minimizing cross-contamination risks",
      "Intelligent monitoring with remote alert capabilities",
      "Backup power systems ensuring preservation during outages",
      "RFID inventory management for accurate sample tracking",
      "Ergonomic design features for safe sample handling",
    ],
    approach: `The core principle guiding our cryopreservation systems is uninterrupted protection. Every component, from insulation materials to electronic controllers, is selected and engineered for maximum reliability and performance longevity.

    We understand that cryopreservation represents both a significant technological challenge and a profound responsibility. Our development process incorporates extensive field testing and validation studies, ensuring that our systems deliver consistent performance under diverse operating conditions. LISAM's cryopreservation specialists provide comprehensive consultation on system selection, installation requirements, and operational protocols to optimize your facility's preservation capabilities.`,
  },
  "genetic-testing-kits": {
    title: "Genetic Kits",
    mainContent: `LISAM Biomedicals offers advanced genetic testing kits designed specifically for reproductive medicine applications. Our comprehensive testing solutions enable detailed chromosomal and genetic screening with exceptional accuracy and reproducibility.

    These kits provide the technological foundation for preimplantation genetic testing, carrier screening, and other advanced genetic analyses essential to modern fertility treatment protocols. Each kit is optimized for workflow efficiency while maintaining the highest standards of diagnostic reliability.`,
    capabilities: [
      "Comprehensive aneuploidy screening across all chromosomes",
      "Targeted mutation analysis for known genetic disorders",
      "Rapid turnaround protocols for fresh transfer compatibility",
      "Integrated quality controls ensuring result reliability",
      "User-friendly workflows reducing technical complexity",
    ],
    approach: `LISAM's approach to genetic testing technology emphasizes clinical utility balanced with analytical precision. We recognize that genetic information must be both accurate and actionable to provide meaningful benefits in reproductive medicine.

    Our development process incorporates extensive validation against reference standards and collaborative testing with leading genetic laboratories. This ensures that our kits deliver consistent performance across different laboratory environments and operator skill levels. We provide comprehensive technical support and interpretation guidance to help laboratories implement and maintain effective genetic testing programs.`,
  },
  "specialized-culture-media": {
    title: "Culture Media",
    mainContent: `LISAM Biomedicals offers premium culture media formulations specifically designed to support optimal embryo development throughout the IVF process. Our media systems are meticulously formulated to provide the precise nutritional and environmental support required at each developmental stage.

    Each media product undergoes extensive testing for osmolality, pH stability, endotoxin levels, and biocompatibility to ensure consistent performance. Our sequential media systems facilitate seamless transitions between developmental stages, supporting physiological progression from fertilization to blastocyst formation.`,
    capabilities: [
      "Stage-specific formulations matching embryo metabolic needs",
      "Extended culture support for blastocyst development",
      "Protein supplementation options for protocol flexibility",
      "Rigorous MEA testing exceeding industry standards",
      "Optimized buffer systems maintaining stable microenvironments",
    ],
    approach: `Our approach to culture media development balances physiological principles with practical clinical requirements. We recognize that embryo culture represents a complex interaction between biochemistry, metabolism, and developmental biology.

    LISAM's research partnerships with academic institutions and clinical centers drive continuous refinement of our media formulations. This collaborative approach ensures our products incorporate the latest scientific understanding while maintaining the reliability essential for clinical application. Our technical specialists provide comprehensive consultation on media selection, protocol optimization, and troubleshooting to maximize your laboratory's success rates.`,
  },
  "laboratory-diagnostics": {
    title: "Diagnostics",
    mainContent: `LISAM Biomedicals provides sophisticated diagnostic instruments designed specifically for reproductive medicine applications. Our diagnostic portfolio includes advanced hormone analyzers, sperm assessment systems, and specialized imaging platforms that deliver precise analytical capabilities essential for effective treatment planning.

    These systems combine innovative detection technologies with user-friendly interfaces, enabling clinics to perform complex diagnostic procedures with confidence. Each instrument undergoes extensive validation to ensure accuracy and reproducibility across diverse clinical scenarios.`,
    capabilities: [
      "Automated semen analysis with morphology assessment",
      "High-sensitivity hormone detection across critical ranges",
      "Non-invasive embryo metabolic assessment",
      "Integrated data systems for comprehensive patient profiling",
      "Quality control modules ensuring consistent performance",
    ],
    approach: `LISAM's diagnostic development philosophy centers on actionable insights. We understand that diagnostic value comes not merely from data generation but from providing clinically relevant information that informs treatment decisions.

    Our engineering teams work alongside reproductive medicine specialists to ensure our instruments address genuine clinical needs while maintaining analytical precision. Each diagnostic system is supported by comprehensive validation materials, training programs, and ongoing technical assistance to ensure optimal implementation and operation in your clinical setting.`,
  },
};

const ServiceSinglePage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { slug } = useParams();
  const serviceDetails = Services.find((item) => item.slug === slug);
  const detailedContent = ServiceDetails[slug];

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={"wpo-site-header wpo-site-header-s2"} />
      <PageTitle pageTitle={serviceDetails.title} pagesub={"Service Single"} />
      <section className="service_single section-padding">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-8 col-12 service_content">
              <div>
                <img src={serviceDetails.simage} alt="" />
                <h2>{serviceDetails.title}</h2>
                <p>{detailedContent.mainContent}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <img src={simg1} alt="" />
                </div>
                <div className="col-lg-6 col-12">
                  <img src={simg2} alt="" />
                </div>
              </div>
              <div>
                <h3>Our Capabilities</h3>
                <p>
                  At LISAM Biomedicals, we've developed specialized expertise in{" "}
                  {serviceDetails.title.toLowerCase()} that enables us to
                  deliver exceptional value to IVF clinics and reproductive
                  medicine facilities worldwide.
                </p>
                <ul>
                  {detailedContent.capabilities.map((capability, index) => (
                    <li key={index}>{capability}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Our approach</h3>
                <p>{detailedContent.approach}</p>
              </div>
              <div className="other-service">
                <h3>Related Service</h3>
                <div className="row">
                  {Services.filter((service) => service.slug !== slug)
                    .slice(0, 3)
                    .map((serves, sitem) => (
                      <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                        <div className="service_card">
                          <div className="icon">
                            <i className={serves.icon}></i>
                          </div>
                          <div className="content">
                            <h2>{serves.title}</h2>
                            <p>{serves.description}</p>
                            <Link
                              onClick={ClickHandler}
                              to={`/service-single/${serves.slug}`}
                            >
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* <div className="cta_form_s2">
                <div className={"title"}>
                  <h3>Make An Appointment</h3>
                  <p>
                    Get in touch with us to see how we can help you with your
                    IVF laboratory needs.
                  </p>
                </div>
                <ServiceFrom />
              </div> */}
            </div>
            <div className="col-lg-4 col-12">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer hclass={"wpo-site-footer_s2"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
