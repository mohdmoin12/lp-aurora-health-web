import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is common breakpoint for tablets
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
     <header className="main-header-two">
  <div className="main-header-two__wrapper">
    <nav className="main-menu main-menu-two">
      <div className="main-menu-two__wrapper">
        <div className="container">
          <div className="main-menu-two__wrapper-inner">
            <div className="main-menu-two__left">
            <div className="main-header-two__logo">
  <a href="index.html">
    <img src="/resources/Group1.jpg" alt="" style={{ width: '40%' }} />
  </a>
</div>
            </div>
            <div className="main-menu-two__main-menu-box">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars" />
              </a>
              <ul className="main-menu__list">
                <li className="dropdown">
                  <a href="index.html">Home </a>
                  <ul>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index3.html">Home Three</a>
                    </li>
                    <li>
                      <a href="index4.html">Home Four</a>
                    </li>
                    <li>
                      <a href="index-dark.html">Home Dark</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">One Page Styles</a>
                      <ul>
                        <li>
                          <a href="index-one-page.html">One Page Styles One</a>
                        </li>
                        <li>
                          <a href="index2-one-page.html">One Page Styles Two</a>
                        </li>
                        <li>
                          <a href="index3-one-page.html">
                            One Page Styles Three
                          </a>
                        </li>
                        <li>
                          <a href="index4-one-page.html">
                            One Page Styles Four
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-carousel.html">Team Carousel</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="project.html">Projects</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="testimonial-carousel.html">
                        Testimonial Carousel
                      </a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="pricing-carousel.html">Pricing Carousel</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="easy-drive-maintenance.html">
                        Easy Drive Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="elite-auto-services.html">Elite Auto Services</a>
                    </li>
                    <li>
                      <a href="smooth-ride-vehicle-care.html">
                        Smooth Ride Vehicle Care
                      </a>
                    </li>
                    <li>
                      <a href="careful-car-service-station.html">
                        Careful Car Service Station
                      </a>
                    </li>
                    <li>
                      <a href="auto-pro-mechanic-shop.html">
                        Auto Pro Mechanic Shop
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Shop</a>
                  <ul>
                    <li>
                      <a href="products.html">Products</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="sign-up.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-carousel.html">Blog Carousel</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="main-menu-two__right">
              <div className="main-menu-two__call">
                <div className="main-menu-two__call-icon">
                  <i className="icon-phone" />
                </div>
                <div className="main-menu-two__call-content">
                  <h5 className="main-menu-two__call-number">
                    <a href="tel:23645689622">+236 (456) 896 22</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>


      {/* Mobile sidebar - only rendered on mobile */}
      {isMobile && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default Header;