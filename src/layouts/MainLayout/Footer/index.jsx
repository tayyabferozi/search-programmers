import React from "react";
import { Link } from "react-router-dom";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";

const Footer = () => {
  return (
    <Section id="footer">
      {/* <img
        className="bg-footer-left"
        src="/assets/vectors/bg-footer-left.svg"
        alt="bg-left"
      />
      <img
        className="bg-footer-right"
        src="/assets/vectors/bg-footer-right.svg"
        alt="bg-right"
      />
      <img
        className="bg-footer-left-dark"
        src="/assets/vectors/bg-footer-left-dark.svg"
        alt="bg-left"
      />
      <img
        className="bg-footer-right-dark"
        src="/assets/vectors/bg-footer-right-dark.svg"
        alt="bg-right"
      /> */}
      <GridContainer rowClassName="main-row">
        <div className="col-lg-4 left">
          <img className="logo-img" src="/assets/vectors/logo.svg" alt="logo" />

          <p className="fs-16 mt-4 text-light-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>

          <div className="social">
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-fb.svg" alt="FB" />
            </a>
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-twitter.svg" alt="twitter" />
            </a>
            <a href="www.facebook.com" className="btn">
              <img src="/assets/vectors/social-insta.svg" alt="insta" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <h5>Main Link</h5>

              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h5>Quick Link</h5>

              <div className="links">
                <Link to="/">Terms &amp; Conditions</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-sm-6">
              <h5>Contact</h5>

              <div className="links">
                <a
                  href="tel:+49(0)5117639940"
                  className="d-flex align-items-start"
                >
                  <img
                    className="contact-icon"
                    src="/assets/vectors/contact-phone.svg"
                    alt="phone"
                  />
                  <div className="text ms-2">
                    <h6>Telephone</h6>
                    <div className="fs-16 text-light-1 mt-1">
                      +49 (0) 511 763 99 40
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:www.kanzlei-duran.eu"
                  className="d-flex align-items-start mt-4"
                >
                  <img
                    className="contact-icon"
                    src="/assets/vectors/contact-mail.svg"
                    alt="mail"
                  />
                  <div className="text ms-2">
                    <h6>Email Address</h6>
                    <div className="fs-16 text-light-1">
                      www.kanzlei-duran.eu
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>

      <div className="copyright">©2022 by Lorem Ipsum. All Rights Reserved</div>
    </Section>
  );
};

export default Footer;
