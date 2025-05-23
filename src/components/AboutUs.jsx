import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("#consulting");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="About-us">
      <section   className="about-two">
        <div className="container">
          <div className="about-two__top">
            <div className="row">
              <div className="col-xl-6">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline text-white ">
                      About Us
                    </span>
                  </div>
                  <h2 className="section-title__title title-animation text-white">
                    Reliable Health, Always There
                    <br />
                    Your Health, Our Priority
                  </h2>
                </div>
              </div>
              <div className="col-xl-6">
                <p className="about-two__text">
                  Health support is essential for maintaining the performance
                  and longevity of your body. From nutrition to fitness, we’ve
                  got you covered
                </p>
              </div>
            </div>
          </div>
          <div className="about-two__tab-box-inner">
            <div className="about-two__tab-box tabs-box">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  onClick={() => handleTabClick("#consulting")}
                  className={`tab-btn ${
                    activeTab === "#consulting" ? "active-btn" : ""
                  }`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)",
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-broken-car" />
                      </div>
                      <h3>Goal-Driven Plans</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Custom meal plans like keto, low-carb, or high-protein,
                      designed to match your fitness goals.
                    </p>
                  </div>
                </li>
                <li
                  onClick={() => handleTabClick("#solutions")}
                  className={`tab-btn ${
                    activeTab === "#solutions" ? "active-btn" : ""
                  }`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)",
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-engineer" />
                      </div>
                      <h3>Allergy-Safe Options</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Easily swap meals and ingredients to avoid allergens,
                      ensuring safe and enjoyable dining experiences
                    </p>
                  </div>
                </li>
                <li
                  onClick={() => handleTabClick("#insight")}
                  className={`tab-btn ${
                    activeTab === "#insight" ? "active-btn" : ""
                  }`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)",
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-wheel-2" />
                      </div>
                      <h3>Flexible Subscriptions</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Choose weekly, monthly, or 3-month plans with the freedom
                      to pause, resume, or skip meals.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="tabs-content">
                {/* Consulting Tab */}
                <div
                  className={`tab ${
                    activeTab === "#consulting" ? "active-tab" : ""
                  }`}
                  id="consulting"
                >
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img src="/Frame2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Personalized Nutrition, Your Wellness Priority
                          </h3>
                          <p className="about-two__tab-content-text">
                            A balanced diet is essential for achieving your
                            health goals. From weight loss to muscle gain, our
                            platform crafts meal plans tailored to your needs
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Personalized Plans for Your Health Goals</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Expert Guidance for Lasting Wellness</p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p> Prioritizing Your Nutrition and Fitness</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Supportive Care for a Healthier Lifestyle</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Tab */}
                <div
                  className={`tab ${
                    activeTab === "#solutions" ? "active-tab" : ""
                  }`}
                  id="solutions"
                >
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img src="/Frame2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Personalized Nutrition, Your Wellness Priority
                          </h3>
                          <p className="about-two__tab-content-text">
                            A balanced diet is essential for achieving your
                            health goals. From weight loss to muscle gain, our
                            platform crafts meal plans tailored to your needs
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Swap with a Tap</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Allergy Alerts Built-In</p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p> Personalized Plates</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Flexible & Safe Choices</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight Tab */}
                <div
                  className={`tab ${
                    activeTab === "#insight" ? "active-tab" : ""
                  }`}
                  id="insight"
                >
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img
                            src="/Frame2.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Personalized Nutrition, Your Wellness Priority
                          </h3>
                          <p className="about-two__tab-content-text">
                            A balanced diet is essential for achieving your
                            health goals. From weight loss to muscle gain, our
                            platform crafts meal plans tailored to your needs
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Pause Anytime </p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Plans That Fit You </p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p> Skip with Ease</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>No Lock-Ins</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
