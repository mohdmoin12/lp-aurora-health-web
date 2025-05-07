import React from "react";

const Footer = () => {
  return (
    <div>
    <footer className="site-footer-three">
  <div className="site-footer-three__wrap">
    <div className="site-footer-three__shape-1" />
    <div className="site-footer-three__shape-2" />
    <div className="site-footer-three__top">
      <div className="container">
        <div className="site-footer-three__top-inner">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="site-footer-three__left">
                <h2 className="site-footer-three__title">
                  Subcribe To Our <br />
                  Newsletter
                </h2>
                <form className="site-footer-three__newsletter-form">
                  <div className="site-footer-three__newsletter-input">
                    <input type="email" placeholder="Your email..." />
                  </div>
                  <button
                    type="submit"
                    className="site-footer-three__newsletter-btn"
                  >
                    <span className="icon-send" />
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="site-footer-three__right">
                <ul className="list-unstyled site-footer-three__menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="products.html">Projects</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="about.html">Page</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <div className="site-footer-three__social">
                  <a href="#">
                    <span className="icon-facebook-f" />
                  </a>
                  <a href="#">
                    <span className="icon-Vector" />
                  </a>
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                  <a href="#">
                    <span className="icon-pintarest" />
                  </a>
                </div>
                <div className="site-footer-three__img-box">
                  <div className="site-footer-three__road">
                    <img
                      src="/shapes/site-footer-three-road.png"
                      alt=""
                    />
                  </div>
                  <div className="site-footer-three__img">
                    <img
                      src="/resources/site-footer-three-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-footer__bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-footer__bottom-inner">
              <div className="site-footer__copyright">
                <p className="site-footer__copyright-text">
                  Copyright ©2025 <a href="index.html">Crank</a>. All rights
                  reserved.
                </p>
              </div>
              <div className="site-footer__bottom-menu-box">
                <ul className="list-unstyled site-footer__bottom-menu">
                  <li>
                    <a href="about.html">Trems &amp; Condition</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footer;
