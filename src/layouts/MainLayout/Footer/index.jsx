import React from "react";
import { Link } from "react-router-dom";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer rowClassName="main-row">
        <div className="col-lg-4">
          <img src="/assets/vectors/logo.svg" alt="logo" />

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
          <div className="row">
            <div className="col-lg-4">
              <h5>Main Link</h5>

              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <h5>Quick Link</h5>

              <div className="links">
                <Link to="/">Terms &amp; Conditions</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <h5>Contact</h5>

              <div className="links">
                <a
                  href="tel:+49(0)5117639940"
                  className="d-flex align-items-start"
                >
                  <img src="/assets/vectors/contact-phone.svg" alt="phone" />
                  <div className="text ms-2">
                    <h6>Telephone</h6>
                    <div className="fs-16 text-light-1">
                      +49 (0) 511 763 99 40
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:www.kanzlei-duran.eu"
                  className="d-flex align-items-start mt-4"
                >
                  <img src="/assets/vectors/contact-mail.svg" alt="mail" />
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
    </Section>
  );
};

export default Footer;
