import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import LightModeToggler from "../../../components/LightModeToggler";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });
  return (
    <Section id="header" className={clsx(scrolled && "scrolled")}>
      <img className="logo-img" src="/assets/vectors/logo.svg" alt="logo" />
      <div className={clsx(isMenuActive && "active", "menu-sm")}>
        <div className="close" onClick={toggleMenuActive}>
          &times;
        </div>
        <img className="logo-img" src="/assets/vectors/logo.svg" alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/beginning">Beginning</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/log-in">Log in</NavLink>
        <LightModeToggler />
        <Select placeholder="English">
          <Option value="English">English</Option>
          <Option value="Urdu">Urdu</Option>
          <Option value="Maths">Maths</Option>
        </Select>

        <Button primary>Check In</Button>
      </div>
      <div className="hamburger" onClick={toggleMenuActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/beginning">Beginning</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/log-in">Log in</NavLink>
      </div>
      <div className="options">
        <LightModeToggler />
        <Select placeholder="English">
          <Option value="English">English</Option>
          <Option value="Urdu">Urdu</Option>
          <Option value="Maths">Maths</Option>
        </Select>

        <Button primary>Check In</Button>
      </div>
    </Section>
  );
};

export default Header;
