import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("#consulting");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <section className="about-two">
        <div className="container">
          <div className="about-two__top">
            <div className="row">
              <div className="col-xl-6">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline text-white ">About Us</span>
                  </div>
                  <h2 className="section-title__title title-animation text-white">

                    Fast and Reliable Car Care
                    <br />
                    Your Car Our Priority
                  </h2>
                </div>
              </div>
              <div className="col-xl-6">
                <p className="about-two__text">
                  Car service is essential for maintaining the performance and
                  longevity of your vehicle. From oil changes
                </p>
              </div>
            </div>
          </div>
          <div className="about-two__tab-box-inner">
            <div className="about-two__tab-box tabs-box">
              <ul className="tab-buttons clearfix list-unstyled">
                <li 
                  onClick={() => handleTabClick("#consulting")} 
                  className={`tab-btn ${activeTab === "#consulting" ? "active-btn" : ""}`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)"
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-broken-car" />
                      </div>
                      <h3>Growth Consulting</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Car service is essential for maintaining the performance and
                      longevity
                    </p>
                  </div>
                </li>
                <li 
                  onClick={() => handleTabClick("#solutions")} 
                  className={`tab-btn ${activeTab === "#solutions" ? "active-btn" : ""}`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)"
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-engineer" />
                      </div>
                      <h3>Profit Max Solutions</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Car service is essential for maintaining the performance and
                      longevity
                    </p>
                  </div>
                </li>
                <li 
                  onClick={() => handleTabClick("#insight")} 
                  className={`tab-btn ${activeTab === "#insight" ? "active-btn" : ""}`}
                >
                  <div className="about-two__tab-btn-single">
                    <div
                      className="about-two__shape-1"
                      style={{
                        backgroundImage: "url(/shapes/about-two-shape-1.png)"
                      }}
                    />
                    <div className="about-two__tab-btn-top">
                      <div className="icon">
                        <span className="icon-wheel-2" />
                      </div>
                      <h3>Insight Consultants</h3>
                    </div>
                    <p className="about-two__tab-btn-text">
                      Car service is essential for maintaining the performance and
                      longevity
                    </p>
                  </div>
                </li>
              </ul>
              <div className="tabs-content">
                {/* Consulting Tab */}
                <div className={`tab ${activeTab === "#consulting" ? "active-tab" : ""}`} id="consulting">
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img
                            src="/resources/about-two-tab-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Your Trusted Car Provider Keeping Your Vehicle
                          </h3>
                          <p className="about-two__tab-content-text">
                            Car service is essential for maintaining the performance
                            and longevity of your vehicle. From oil changes Car
                            service is essential for maintaining
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Fast and Reliable Car Care</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Free with Our Services Care</p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Top-notch Care for Your Vehicle</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Expert Service for Your Vehicle</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Tab */}
                <div className={`tab ${activeTab === "#solutions" ? "active-tab" : ""}`} id="solutions">
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img
                            src="/resources/about-two-tab-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Your Trusted Car Provider Keeping Your Vehicle
                          </h3>
                          <p className="about-two__tab-content-text">
                            Car service is essential for maintaining the performance
                            and longevity of your vehicle. From oil changes Car
                            service is essential for maintaining
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Fast and Reliable Car Care</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Free with Our Services Care</p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Top-notch Care for Your Vehicle</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Expert Service for Your Vehicle</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight Tab */}
                <div className={`tab ${activeTab === "#insight" ? "active-tab" : ""}`} id="insight">
                  <div className="tabs-content__inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-two__tab-img">
                          <img
                            src="/resources/about-two-tab-img-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-two__tab-content">
                          <h3 className="about-two__tab-content-title">
                            Your Trusted Car Provider Keeping Your Vehicle
                          </h3>
                          <p className="about-two__tab-content-text">
                            Car service is essential for maintaining the performance
                            and longevity of your vehicle. From oil changes Car
                            service is essential for maintaining
                          </p>
                          <div className="about-two__tab-content-points-box">
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Fast and Reliable Car Care</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Free with Our Services Care</p>
                              </li>
                            </ul>
                            <ul className="about-two__tab-content-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Top-notch Care for Your Vehicle</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-double-arrow-right" />
                                </div>
                                <p>Expert Service for Your Vehicle</p>
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