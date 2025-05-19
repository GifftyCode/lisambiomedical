/* Single image */
import simg1 from "../images/service-single/1.webp";
import simg2 from "../images/service-single/2.jpg";
import simg3 from "../images/service-single/3.jpg";
import simg4 from "../images/service-single/4.jpg";
import simg5 from "../images/service-single/5.png";
import simg6 from "../images/service-single/6.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faDna,
  faMicroscope,
  faPager,
  faSyringe,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const Services = [
  {
    id: 1,
    icon: faFlask,
    simage: simg1,
    title: "Consumables",
    description:
      "Advanced laboratory supplies engineered for precision and optimal performance in reproductive medicine.",
    slug: "ivf-consumables",
  },
  {
    id: 2,
    icon: faMicroscope,
    simage: simg2,
    title: "Equipment",
    description:
      "Cutting-edge technological solutions designed to enhance embryology research and clinical reproductive procedures.",
    slug: "embryology-equipment",
  },
  {
    id: 3,
    icon: faPager,
    simage: simg3,
    title: "Cryopreservation",
    description:
      "State-of-the-art storage systems providing reliable preservation and protection of critical reproductive materials.",
    slug: "cryopreservation-systems",
  },
  {
    id: 4,
    icon: faDna,
    simage: simg4,
    title: "Genetic Kits",
    description:
      "Comprehensive diagnostic tools enabling detailed genetic screening for advanced reproductive health assessment.",
    slug: "genetic-testing-kits",
  },
  {
    id: 5,
    icon: faSyringe,
    simage: simg5,
    title: "Culture Media",
    description:
      "Specialized nutrient solutions meticulously formulated to support optimal embryo growth and development.",
    slug: "specialized-culture-media",
  },
  {
    id: 6,
    icon: faStethoscope,
    simage: simg6,
    title: "Diagnostics",
    description:
      "Innovative analytical instruments providing precise molecular insights into reproductive health and fertility.",
    slug: "laboratory-diagnostics",
  },
];

export default Services;
