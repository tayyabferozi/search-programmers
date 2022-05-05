import React from "react";

import MainLayout from "../../layouts/MainLayout";
import Hero from "./Hero";
import Process from "./Process";
import Help from "./Help";
import Categories from "./Categories";
import Statistics from "../Statistics";

const Landing = () => {
  return (
    <MainLayout>
      <Hero />
      <Process />
      <Help />
      <Categories />
      <Statistics />
    </MainLayout>
  );
};

export default Landing;
