import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Section from "../../../components/Section";

const cardsData = [
  {
    bg: "/assets/imgs/category-1.png",
    icon: "/assets/imgs/category-icon-1.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-2.png",
    icon: "/assets/imgs/category-icon-2.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-3.png",
    icon: "/assets/imgs/category-icon-3.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bg: "/assets/imgs/category-4.png",
    icon: "/assets/imgs/category-icon-4.png",
    title: "JavaScript",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
];

const Categories = () => {
  return (
    <Section id="landing-categories">
      <div className="section-title">
        <h1>
          Important <span className="text-primary-1">Categories</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="cards mt-40">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cardsData.map((el, idx) => {
            const { icon, bg, title, desc } = el;

            return (
              <SwiperSlide key={"category-card" + idx}>
                <div className="card">
                  <img className="bg" src={bg} alt={title} />

                  <div className="text">
                    <img className="icon" src={icon} alt={title} />

                    <h6 className="mt-1">{title}</h6>

                    <p className="text-light-1 mt-10">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}{" "}
        </Swiper>
      </div>
    </Section>
  );
};

export default Categories;
