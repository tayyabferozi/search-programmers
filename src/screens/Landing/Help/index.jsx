import React from "react";
import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const Help = () => {
  return (
    <Section id="help">
      <GridContainer rowClassName="main-row align-items-center">
        <div className="col-lg-3">
          <img src="/assets/imgs/help-left.png" alt="help" />{" "}
        </div>
        <div className="col-lg-9">
          <h1>Need Help?</h1>

          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <Button primaryInverted className="mt-30">
            Answer Questionnaire
          </Button>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Help;
