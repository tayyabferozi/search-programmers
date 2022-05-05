import React from "react";

import GridContainer from "../../components/GridContainer";
import Section from "../../components/Section";
import Button from "../../components/Button";

const cardsData = [
  {
    icon: "/assets/vectors/stats-1.svg",
    number: "2,575,457",
    title: "Programmers",
  },
  {
    icon: "/assets/vectors/stats-2.svg",
    number: "55,896",
    title: "Clients Registered",
  },
  {
    icon: "/assets/vectors/stats-3.svg",
    number: "33,768",
    title: "Users Online",
  },
  {
    icon: "/assets/vectors/stats-4.svg",
    number: "30,337",
    title: "Monthly Projects",
  },
];

const Statistics = () => {
  return (
    <Section id="landing-stats">
      <div className="section-title">
        <h1>Statistics</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <GridContainer
        rowClassName="main-row justify-content-center"
        rootClassName="mt-50"
      >
        {cardsData.map((el, idx) => {
          const { icon, number, title } = el;

          return (
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              key={"stats-card" + idx}
            >
              <div className="card">
                <img src={icon} alt={title} />

                <div className="text">
                  <h4 className="text-primary-1">{number}</h4>
                  <div className="text-light-1 mt-2">{title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </GridContainer>

      <div className="mt-50 btns">
        <Button transparent>Work As A Programmer</Button>
        <Button primary>Work With Programmer</Button>
      </div>
    </Section>
  );
};

export default Statistics;
