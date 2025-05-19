import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Projects from "../../api/projects";
import ContactForm from "../ServiceSinglePage/ServiceFrom ";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import logo from "../../images/logo.png";
import Psing1 from "../../images/project-single/img-1.jpg";
import Psing2 from "../../images/project-single/img-2.jpg";

// Additional project details
const projectDetails = {
  "ivf-lab-setup": {
    description: `Our IVF Lab Setup and Installation service provides comprehensive solutions for fertility clinics looking to establish or upgrade their reproductive technology facilities. We design, supply, and install state-of-the-art equipment essential for successful assisted reproductive procedures.`,
    detailedDescription: `Our experienced team begins with a thorough assessment of your facility's needs, spatial constraints, and budgetary considerations. We then create a customized laboratory layout that optimizes workflow efficiency while maintaining strict environmental controls necessary for embryo development. 

Our installation includes complete setup of laminar flow cabinets, incubators, HEPA filtration systems, anti-vibration tables, and specialized microscopy equipment. We ensure all systems are calibrated to meet international standards for air quality, temperature stability, and contamination prevention.`,
    strategies: [
      "Complete laboratory space planning and design optimization",
      "Installation of specialized air handling and filtration systems",
      "Integration of temperature and humidity control systems",
      "Setup of data management and electronic witnessing systems",
      "Calibration and validation of all equipment to regulatory standards",
    ],
    approach: `We implement a phased approach to minimize disruption to existing clinical operations. Our team works closely with your staff to ensure a smooth transition, providing comprehensive training on all installed equipment. We maintain ongoing technical support and offer preventative maintenance programs to ensure longevity and reliability of your investment.`,
    goals: [
      "Create an optimal environment for embryo culture and development",
      "Maximize workflow efficiency for laboratory staff",
      "Ensure compliance with all regulatory requirements",
      "Implement systems that accommodate future technological advancements",
    ],
    results: [
      "Increased fertilization and implantation rates",
      "Enhanced laboratory safety and quality control",
      "Improved embryo development metrics",
      "Reduced contamination risk and environmental variations",
    ],
    clientType: "Fertility Clinic Director",
    specialist: "Dr. Michael Chen, Laboratory Design Specialist",
    category: "Laboratory Infrastructure",
    tags: "IVF, Lab Design, Equipment Installation",
  },
  "embryo-monitoring": {
    description: `Our Embryo Monitoring Technology provides continuous, non-invasive observation of embryo development through advanced time-lapse imaging systems. This cutting-edge solution eliminates the need for removing embryos from optimal incubation conditions for assessment.`,
    detailedDescription: `The system captures thousands of images throughout the embryo development process, creating a comprehensive visual record that allows embryologists to identify precise timing of critical developmental milestones. This detailed morphokinetic data helps in selecting embryos with the highest implantation potential.

Our technology integrates seamlessly with existing laboratory information systems, allowing for efficient data management and analysis. The AI-assisted embryo assessment algorithms provide objective, standardized evaluation that complements embryologist expertise.`,
    strategies: [
      "Integration of time-lapse imaging with stable incubation environment",
      "Implementation of AI-assisted embryo selection algorithms",
      "Development of customized assessment parameters based on clinic data",
      "Training on morphokinetic marker identification and interpretation",
    ],
    approach: `We provide comprehensive installation and setup of the monitoring systems, ensuring perfect integration with your existing incubators or replacing them with our integrated units. Our team delivers in-depth training on system operation, data interpretation, and maintenance procedures. We offer ongoing software updates to ensure your clinic benefits from the latest advancements in embryo assessment algorithms.`,
    goals: [
      "Provide continuous embryo monitoring without disrupting optimal culture conditions",
      "Improve embryo selection through detailed morphokinetic analysis",
      "Standardize embryo assessment across all operators",
      "Create comprehensive documentation for quality assurance",
    ],
    results: [
      "Increased implantation rates through improved embryo selection",
      "Reduced time to pregnancy for patients",
      "Enhanced laboratory efficiency through automated monitoring",
      "Valuable research data for continual protocol improvement",
    ],
    clientType: "Senior Embryologist",
    specialist: "Dr. Sarah Johnson, Embryology Systems Specialist",
    category: "Monitoring Technology",
    tags: "Time-lapse Imaging, Embryo Development, AI Analysis",
  },
  "cryogenic-storage": {
    description: `Our Cryogenic Storage Equipment service provides state-of-the-art preservation solutions for gametes, embryos, and reproductive tissues. We design and implement complete cryopreservation facilities with advanced security and monitoring systems.`,
    detailedDescription: `We supply and install medical-grade liquid nitrogen storage tanks in various capacities, designed with advanced vacuum insulation technology to minimize nitrogen consumption while maintaining stable ultra-low temperatures. Our systems include comprehensive monitoring solutions that track temperature, liquid nitrogen levels, and access logs.

Security is paramount in our designs, with multi-layered access control systems, redundant power supplies, and automated emergency protocols. Each installation includes backup storage capacity and emergency response planning to protect irreplaceable genetic materials.`,
    strategies: [
      "Implementation of multi-vessel storage systems with risk distribution",
      "Integration of continuous electronic monitoring with alert systems",
      "Development of emergency response protocols for system failures",
      "Creation of secure inventory management and witnessing systems",
    ],
    approach: `Our implementation begins with a thorough risk assessment of your facility, followed by custom design of your cryostorage area. We provide complete installation, testing, and validation of all systems. Staff receive comprehensive training on safe handling procedures, emergency protocols, and routine maintenance. Our service includes ongoing technical support and scheduled preventative maintenance to ensure system reliability.`,
    goals: [
      "Ensure long-term viability of cryopreserved reproductive material",
      "Minimize risk through redundant safety systems",
      "Optimize liquid nitrogen consumption for cost efficiency",
      "Maintain complete traceability and chain of custody",
    ],
    results: [
      "Zero sample loss through equipment failure",
      "Reduced operating costs through efficient nitrogen usage",
      "Complete compliance with regulatory requirements",
      "Enhanced patient confidence in long-term storage",
    ],
    clientType: "Laboratory Manager",
    specialist: "Dr. Thomas Wright, Cryobiology Specialist",
    category: "Preservation Technology",
    tags: "Cryopreservation, Liquid Nitrogen, Sample Storage",
  },
  "culture-media-supply": {
    description: `Our Culture Media Supply service provides fertility clinics with premium quality, custom-formulated media solutions optimized for embryo development. We deliver complete media systems for all stages of IVF treatment, from gamete preparation through embryo culture.`,
    detailedDescription: `Our media products are developed based on the latest research in embryo physiology and metabolism. We offer sequential culture systems that adapt to the changing nutritional needs of developing embryos, as well as single-step media solutions for simplified workflow protocols.

Each batch undergoes rigorous quality control testing, including MEA (mouse embryo assay), endotoxin testing, and sterility validation. We provide complete documentation of quality control results with each shipment, ensuring traceability and compliance with regulatory requirements.`,
    strategies: [
      "Development of clinic-specific media protocols based on patient demographics",
      "Implementation of just-in-time delivery systems to ensure media freshness",
      "Creation of comprehensive media rotation and inventory systems",
      "Optimization of media formulations based on clinic-specific outcomes data",
    ],
    approach: `We work closely with your embryology team to understand your specific protocols and requirements. Based on this assessment, we recommend appropriate media systems and develop a customized supply schedule that ensures you always have fresh media while minimizing waste. Our team provides periodic in-service training on proper media handling and storage techniques to maximize effectiveness.`,
    goals: [
      "Optimize embryo development rates through superior nutritional support",
      "Minimize batch-to-batch variations for consistent results",
      "Ensure continuous supply chain reliability for critical media",
      "Provide complete documentation for regulatory compliance",
    ],
    results: [
      "Improved blastocyst development rates",
      "Enhanced implantation success",
      "Reduced media-related variability in outcomes",
      "Simplified inventory management and reduced waste",
    ],
    clientType: "IVF Laboratory Director",
    specialist: "Dr. Emma Rodriguez, Embryo Culture Specialist",
    category: "Laboratory Consumables",
    tags: "Culture Media, Embryo Development, Cell Culture",
  },
  "genetic-lab-tools": {
    description: `Our Genetic Lab Tools and Diagnostics service provides comprehensive solutions for preimplantation genetic testing. We supply and install advanced equipment for genetic sample preparation, analysis, and interpretation within the IVF laboratory setting.`,
    detailedDescription: `We offer complete workflow solutions for various genetic testing methodologies, including next-generation sequencing (NGS), array comparative genomic hybridization (aCGH), and PCR-based testing platforms. Our systems are designed for minimal sample requirements, ideal for the limited material available from embryo biopsies.

Our installation includes specialized equipment for biopsy processing, DNA amplification, and analysis, all designed to maintain sample integrity while providing rapid, accurate results. We implement strict workflow controls to prevent cross-contamination and ensure sample traceability throughout the testing process.`,
    strategies: [
      "Implementation of streamlined workflows for rapid test turnaround",
      "Integration of automated systems for sample preparation and analysis",
      "Development of robust quality control procedures for genetic testing",
      "Creation of secure data management systems for genetic information",
    ],
    approach: `Our team begins with a thorough assessment of your genetic testing needs and existing laboratory capabilities. We then design a comprehensive solution that includes equipment, consumables, and workflow protocols. Implementation includes complete installation, validation, and staff training. We provide ongoing technical support and regular updates on new developments in the rapidly evolving field of reproductive genetics.`,
    goals: [
      "Enable accurate detection of chromosomal and genetic abnormalities",
      "Minimize turnaround time for preimplantation genetic testing",
      "Ensure reliable results with minimal sample consumption",
      "Maintain full compliance with relevant genetic testing regulations",
    ],
    results: [
      "Reduced implantation failure and pregnancy loss rates",
      "Increased live birth rates for genetically at-risk patients",
      "Enhanced laboratory testing capabilities and reputation",
      "Expanded service offerings for patients with genetic concerns",
    ],
    clientType: "Clinical Geneticist",
    specialist: "Dr. Robert Kim, Reproductive Genetics Specialist",
    category: "Genetic Technology",
    tags: "PGT-A, Genetic Screening, DNA Analysis",
  },
  micromanipulation: {
    description: `Our Micromanipulation Precision service provides high-performance equipment for delicate procedures such as intracytoplasmic sperm injection (ICSI), embryo biopsy, and assisted hatching. We deliver integrated systems that combine superior optics with precise micromanipulation capabilities.`,
    detailedDescription: `Our micromanipulation systems feature advanced digital imaging with specialized contrast methods that enhance visibility while minimizing light exposure to sensitive gametes and embryos. The precision-engineered micromanipulators provide smooth, vibration-free movement with sub-micron accuracy.

The systems include ergonomically designed workstations that reduce operator fatigue during extended procedures. Integrated heating elements maintain optimal temperature throughout procedures, while anti-vibration tables eliminate external disturbances that could compromise precision.`,
    strategies: [
      "Installation of vibration-isolated workstations for maximum stability",
      "Integration of high-definition imaging with specialized embryo-safe lighting",
      "Implementation of precision hydraulic or electronic micromanipulation systems",
      "Development of optimized ergonomic setups for technician comfort",
    ],
    approach: `Implementation begins with a detailed workspace assessment to identify the optimal location and configuration for your micromanipulation station. Our team handles complete installation, calibration, and testing of all components. We provide comprehensive hands-on training for all operators, with advanced training options for specific techniques like embryo biopsy or piezo-ICSI. Ongoing support includes periodic recalibration and preventative maintenance to ensure continued precision.`,
    goals: [
      "Enhance success rates for micromanipulation procedures",
      "Minimize operator fatigue and repetitive stress injuries",
      "Ensure precise, consistent micromanipulation capabilities",
      "Enable advanced techniques such as blastocyst biopsy",
    ],
    results: [
      "Improved fertilization rates with ICSI procedures",
      "Higher quality biopsies for genetic testing",
      "Reduced procedure time through improved efficiency",
      "Extended equipment lifespan through proper installation and maintenance",
    ],
    clientType: "Senior Embryologist",
    specialist: "Dr. James Wilson, Micromanipulation Specialist",
    category: "Precision Instruments",
    tags: "ICSI, Embryo Biopsy, Micromanipulation",
  },
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ProjectSingle = () => {
  const { slug } = useParams();
  const ProjectSingleData = Projects.find((item) => item.slug === slug);
  const details = projectDetails[slug];

  // If project details not found, use placeholder data
  const safeDetails = details || {
    description: "Project description is not available.",
    detailedDescription:
      "Detailed project information is not available at this time.",
    strategies: ["Strategy information not available"],
    approach: "Approach information is not available.",
    goals: ["Goal information not available"],
    results: ["Result information not available"],
    clientType: "Not specified",
    specialist: "Not specified",
    category: "Not specified",
    tags: "Not specified",
  };

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={"wpo-site-header wpo-site-header-s2"} />
      <PageTitle
        pageTitle={ProjectSingleData?.title || "Project"}
        pagesub={"Portfolio"}
      />
      <section className="project_single section-padding">
        <div className="container">
          <img
            src={ProjectSingleData?.pSimg}
            alt={ProjectSingleData?.title}
            className="w-full rounded-lg shadow-lg mb-8"
          />
          <div className="row">
            <div className="col-lg-7 col-12">
              <h2 className="text-3xl font-bold mb-4">
                {ProjectSingleData?.title} {ProjectSingleData?.subtitle}
              </h2>
              <p className="mb-4">{safeDetails.description}</p>
              <p className="mb-6">{safeDetails.detailedDescription}</p>
            </div>
            <div className="col-lg-5 col-12">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Location:</th>
                    <td className="py-3">{ProjectSingleData?.location}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Client:</th>
                    <td className="py-3">{safeDetails.clientType}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Specialist:</th>
                    <td className="py-3">{safeDetails.specialist}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Category:</th>
                    <td className="py-3">{safeDetails.category}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Tags:</th>
                    <td className="py-3">{safeDetails.tags}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left pr-4">Date:</th>
                    <td className="py-3">{ProjectSingleData?.date}</td>
                  </tr>
                  {/* <tr>
                    <th className="py-3 text-left pr-4">Share:</th>
                    <td className="py-3">
                      <ul className="flex space-x-3">
                        <li>
                          <Link to="#">
                            <i className="flaticon-facebook-app-symbol"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="flaticon-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="flaticon-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="flaticon-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="quote bg-gray-100 p-6 my-8 rounded-lg">
            <h4 className="text-lg italic mb-2">
              "Our advanced IVF equipment and consumables help fertility
              specialists achieve higher success rates and offer patients
              renewed hope on their fertility journey."
            </h4>
            <p className="text-right">
              IVF Solutions -{" "}
              <span className="font-semibold">
                Advancing Reproductive Medicine
              </span>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12 strategies s2">
              <h2 className="text-2xl font-bold mb-4">Our Strategies</h2>
              <p className="mb-4">
                We implement comprehensive strategies tailored to each fertility
                center's unique requirements, ensuring optimal equipment
                performance and workflow efficiency.
              </p>
              <ul className="list-disc pl-5">
                {safeDetails.strategies.map((strategy, index) => (
                  <li key={index} className="mb-2">
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-12 strategies">
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p>{safeDetails.approach}</p>
            </div>
          </div>

          <div className="row my-8">
            <div className="col-lg-6 col-12 mb-4">
              <img
                src={Psing1}
                alt="Project visualization"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <img
                src={Psing2}
                alt="Project implementation"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12 strategies s3">
              <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
              <p className="mb-4">
                For this project, we established clear objectives focused on
                enhancing laboratory capabilities and optimizing clinical
                outcomes.
              </p>
              <ul className="list-disc pl-5">
                {safeDetails.goals.map((goal, index) => (
                  <li key={index} className="mb-2">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-12 strategies s3">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="mb-4">
                Our implementation delivered measurable improvements in
                laboratory efficiency and clinical outcomes, providing
                substantial value to the clinic and its patients.
              </p>
              <ul className="list-disc pl-5">
                {safeDetails.results.map((result, index) => (
                  <li key={index} className="mb-2">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="related_project mt-12">
            <h5 className="text-xl font-bold mb-6">Related Portfolio</h5>
            <div className="row">
              {Projects.slice(0, 3).map(
                (project, pitem) =>
                  project.slug !== slug && (
                    <div className="col-lg-4 col-md-6 col-12" key={pitem}>
                      <div className="project_card mb-4">
                        <img
                          src={project.pimg1}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="text bg-white p-4 shadow-md rounded-b-lg">
                          <h2 className="text-lg font-bold">
                            <Link
                              onClick={ClickHandler}
                              to={`/project-single/${project.slug}`}
                            >
                              {project.title}
                            </Link>
                          </h2>
                          <span className="text-gray-600">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="AppointmentFrom bg-gray-50 py-12 mt-12">
          <div className="container">
            <div className="cta_form_s2">
              <div className="title s2 text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Schedule a Consultation
                </h3>
                <p>
                  Get in touch with our specialists to discuss your laboratory
                  equipment needs.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer hclass={"wpo-site-footer_s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ProjectSingle;
