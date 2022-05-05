import React from "react";

import Section from "../../../components/Section";
import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";

const Hero = () => {
  return (
    <Section id="landing-hero">
      <div className="section-title text-center">
        <h1>
          We Make Working With{" "}
          <span className="text-primary-1">Programmers</span> Easier
        </h1>
        <p className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <img
        className="arrow"
        src="/assets/vectors/landing-hero-arrow..svg"
        alt="arrow"
      />
      <div className="search-container">
        <img src="/assets/vectors/magnifier.svg" alt="magnifier" />
        <input type="search" placeholder="Search Web Developer" />
        <Select placeholder="Category">
          <Option value="Web Developer">Web Developer</Option>
          <Option value="App Developer">App Developer</Option>
        </Select>
      </div>
    </Section>
  );
};

export default Hero;
