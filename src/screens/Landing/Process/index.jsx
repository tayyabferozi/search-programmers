import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const cardsData = [
  {
    img: "/assets/vectors/process-1.svg",
    title: "Search",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "/assets/vectors/process-2.svg",
    title: "Chat",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    img: "/assets/vectors/process-3.svg",
    title: "Remember",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Process = () => {
  return (
    <Section id="landing-process">
      <div className="section-title">
        <h1>
          Our <span className="text-primary-1">Process</span>
        </h1>
        <p>Work with developers from anywhere in the world in 3 easy steps</p>
      </div>

      <div className="cards">
        <GridContainer rowClassName="justify-content-center main-row">
          <img
            className="arrow-1"
            src="/assets/vectors/process-arrow-1.svg"
            alt="arrow"
          />
          <img
            className="arrow-2"
            src="/assets/vectors/process-arrow-2.svg"
            alt="arrow"
          />
          {cardsData.map((el, idx) => {
            const { img, title, desc } = el;

            return (
              <div key={"process" + idx} className="col-xl-4 col-lg-6">
                <div className="card">
                  <img src={img} alt={title} />

                  <h5>{title}</h5>
                  <p className="text-light-1 mt-15">{desc}</p>
                </div>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </Section>
  );
};

export default Process;
