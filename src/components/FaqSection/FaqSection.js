import React, { useState } from "react";

const accordionData = [
  {
    title: "What IVF consumables do you supply?",
    content:
      "At LISAM Biomedicals, we supply a wide range of IVF consumables including culture media, micropipettes, embryo transfer catheters, petri dishes, and all essential laboratory disposables tailored for reproductive medicine.",
  },
  {
    title: "Do you offer installation and setup of IVF laboratory equipment?",
    content:
      "Yes, we provide complete installation and setup services for IVF laboratories. Our expert team ensures that all equipment is installed properly, calibrated, and fully operational, adhering to industry standards.",
  },
  {
    title:
      "Can you provide maintenance and support for existing IVF equipment?",
    content:
      "Absolutely. We offer preventive maintenance, emergency repairs, calibration, and technical support for all IVF equipment, ensuring uninterrupted operations in your lab.",
  },
  {
    title: "What brands of equipment do you sell?",
    content:
      "We partner with leading global brands in the IVF industry, including Olympus, Thermo Fisher Scientific, Eppendorf, and more, offering high-quality, certified equipment.",
  },
  {
    title: "Do you offer training for laboratory staff?",
    content:
      "Yes, LISAM Biomedicals provides comprehensive training for laboratory staff on the proper use, maintenance, and safety protocols of all equipment we supply.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="wpo-faq-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2">
            <div className="section_title">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="wpo-faq-wrap">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="wpo-benefits-item">
                    {accordionData.map((accordion, index) => (
                      <div
                        className={`accordion-item ${
                          activeIndex === index ? "active" : ""
                        }`}
                        key={index}
                      >
                        <h3 className="accordion-header">
                          <button onClick={() => handleToggle(index)}>
                            {accordion.title}
                          </button>
                        </h3>
                        {activeIndex === index && (
                          <div className="accordion-body">
                            <p>{accordion.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
