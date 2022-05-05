import React from "react";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const cardsData = [
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
  {
    img: "/assets/imgs/result-img-1.png",
    userImg: "/assets/imgs/result-user-img-1.png",
    name: "Edoardoizzo",
    desc: "I will create one product shopify store, dropshipping website",
    stars: "5.0",
    reviews: "325",
    startingAt: 187,
  },
];

const Results = () => {
  return (
    <Section id="search-results">
      <img
        className="bg-results-1"
        src="/assets/vectors/bg-results-1.svg"
        alt="bg-results"
      />
      <img
        className="bg-results-2"
        src="/assets/vectors/bg-results-2.svg"
        alt="bg-results"
      />
      <img
        className="bg-results-3"
        src="/assets/vectors/bg-results-3.svg"
        alt="bg-results"
      />
      <div className="section-title text-start">
        <h1>
          Results for <span className="text-primary-1">"Shopify"</span>
        </h1>
        <h4>26,221 services available</h4>
      </div>

      <div className="results-main mt-50 pt-20">
        <GridContainer>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="filter-items">
              <div className="item with-chevron">
                <div className="text">Category</div>
              </div>
              <div className="item with-chevron">
                <div className="text">Service Options</div>
              </div>
              <div className="item with-chevron">
                <div className="text">Seller Details</div>
              </div>
              <div className="item with-chevron">
                <div className="text">Budget</div>
              </div>
              <div className="item with-chevron">
                <div className="text">Delivery Time</div>
              </div>
              <div className="item">
                <div className="text">Pro services</div>
                <label class="switch-2">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div className="item">
                <div className="text">Local sellers</div>
                <label class="switch-2">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div className="item">
                <div className="text">Online sellers</div>
                <label class="switch-2">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-6">
            <div className="row cards-row">
              {cardsData.map((el, idx) => {
                const { img, userImg, name, desc, stars, reviews, startingAt } =
                  el;
                return (
                  <div className="col-xl-6">
                    <div key={"result-card" + idx} className="result-card">
                      <div className="card-img">
                        <img src={img} alt={desc} />
                      </div>
                      <div className="card-body">
                        <div className="user-info d-flex align-items-center justify-content-start gap-2">
                          <img src={userImg} alt={name} />
                          <div className="text">
                            <strong>{name}</strong>
                            <div className="fs-16 fw-400 text-primary-1">
                              Top Rated Seller
                            </div>
                          </div>
                        </div>

                        <div className="desc my-20">{desc}</div>

                        <div className="stars d-flex align-items-center">
                          <img
                            src="/assets/vectors/star-fill.svg"
                            alt="star-fill"
                          />
                          <div className="star-text ms-2">
                            <div className="fs-16 text-light-1">
                              <span className="text-orange">{stars}</span> (
                              {reviews})
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-foot">
                        <img src="/assets/vectors/heart-fill.svg" alt="heart" />
                        <div className="right-text">
                          <div>STARTING AT</div>
                          <div className="text-primary-1 fw-600 fs-16 mt-1 text-end">
                            ${startingAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Results;
