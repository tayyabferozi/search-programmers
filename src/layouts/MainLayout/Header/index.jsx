import React from "react";
import { NavLink } from "react-router-dom";

import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";
import Section from "../../../components/Section";
import Button from "../../../components/Button";

const Header = () => {
  return (
    <Section id="header">
      <img src="/assets/vectors/logo.svg" alt="logo" />
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/beginning">Beginning</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/log-in">Log in</NavLink>
      </div>
      <div className="options">
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
