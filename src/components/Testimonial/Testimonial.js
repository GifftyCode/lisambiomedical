import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../images/testimonial/1.jpg";
import Img2 from "../../images/testimonial/2.jpeg";
import Img3 from "../../images/testimonial/3.jpeg";
import SectionTitle from "../SectionTitle/SectionTitle";

const testimonials = [
  {
    id: "01",
    img: Img1,
    Des: "LISAM's IVF consumables have significantly improved our lab's success rates. Their precision equipment and reliable support have been instrumental in advancing our clinical outcomes.",
    title: "Dr. Sarah Chen",
    sub: "Lab Director, Pacific Fertility Institute",
  },
  {
    id: "02",
    img: Img2,
    Des: "The embryo monitoring system from LISAM transformed our workflow efficiency. Superior design coupled with their exceptional technical support makes them our preferred equipment partner.",
    title: "Prof. Marcus Wilson",
    sub: "Chief Embryologist, European Reproductive ",
  },
  {
    id: "03",
    img: Img3,
    Des: "LISAM's cryopreservation solutions provide unmatched reliability. Their culture media consistently delivers optimal results for our most demanding reproductive medicine procedures.",
    title: "Dr. Elena Rodriguez",
    sub: "Clinical Director, Advanced Fertility ",
  },
];

const Testimonial = (props) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={"" + props.tClass}>
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-12">
            <SectionTitle title="Testimonials" subtitle="Client Feedback" />
          </div>
        </div>
        <div className="row testimonial_slider">
          <Slider {...settings}>
            {testimonials.map((testitem, titem) => (
              <div className="testimonial_card" key={titem}>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                  <li>
                    <i className="flaticon-star"></i>
                  </li>
                </ul>
                <p>{testitem.Des}</p>
                <div className="ath">
                  <div className="image">
                    <img src={testitem.img} alt="" />
                  </div>
                  <div className="text">
                    <h3>{testitem.title}</h3>
                    <span>{testitem.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
