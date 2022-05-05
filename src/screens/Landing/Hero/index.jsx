import React, { useContext } from "react";

import Section from "../../../components/Section";
import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";

import { GlobalContext } from "../../../context/GlobalContext";

const content = {
  English: {
    text1: "We Make Working With",
    text2: "Programmers",
    text3: "Easier",
    text4:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text5: "Web Developer",
    text6: "App Developer",
  },
  Spanish: {
    text1: "Nosotras hacemos trabajar con",
    text2: "Programadores",
    text3: "Más fácil",
    text4:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    text5: "Search Web Developer",
    text6: "Desarrolladora web",
    text7: "Desarrollador de aplicaciones",
  },
};

const Hero = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <Section id="landing-hero">
      <div className="section-title text-center">
        <h1>
          {content[appLanguage].text1}{" "}
          <span className="text-primary-1">{content[appLanguage].text2}</span>{" "}
          {content[appLanguage].text3}
        </h1>
        <p className="mt-2">{content[appLanguage].text4}</p>
      </div>

      <img
        className="arrow"
        src="/assets/vectors/landing-hero-arrow..svg"
        alt="arrow"
      />
      <div className="search-container">
        <img src="/assets/vectors/magnifier.svg" alt="magnifier" />
        <input type="search" placeholder={content[appLanguage].text5} />
        <Select placeholder="Category">
          <Option value={content[appLanguage].text6}>
            {content[appLanguage].text5}
          </Option>
          <Option value={content[appLanguage].text7}>
            {content[appLanguage].text6}
          </Option>
        </Select>
      </div>
    </Section>
  );
};

export default Hero;
