import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Import FontAwesome if not already imported in your main file
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonial = () => {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 500,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 1 },
      1200: { items: 1 },
    },
  };

  return (
    <div  id="testimonials">
      <section className="testimonial-one">
        <div className="testimonial-one__wrap">
          <div className="container">
            <div className="section-title text-left sec-title-animation animation-style2">
              <div className="section-title__tagline-box">
                {/* <span className="section-title__tagline">TESTIMONIAL</span> */}
              </div>
              <h2 className="section-title__title title-animation">
                Franchise Testimonials
              </h2>
            </div>

            {/* Using react-owl-carousel component */}
            <OwlCarousel
              className="testimonial-one__carousel owl-theme"
              {...options}
            >
              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__img">
                    {/* <img src="/testimonial/testimonial-1-1.jpg" alt="" /> */}
                  </div>
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Fatimah Al-Qahtani</a>
                    </h3>
                    <p className="testimonial-one__client-text">
                     Riyadh
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                  “Finally, a food delivery service that understands my dietary needs!”
I have a gluten allergy and used to stress about meals — now I just select my preferences and let the app do the work. Total game changer!by
                
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}

              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__img">
                    {/* <img src="/testimonial/testimonial-1-2.jpg" alt="" /> */}
                  </div>
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Omar Al-Mutairi</a>
                    </h3>
                    <p className="testimonial-one__client-text">Jeddah</p>
                  </div>
                  <p className="testimonial-one__text">
                    “Super convenient and truly healthy.”
I’ve tried a lot of so-called 'healthy' options, but this app delivers real nutrition with great taste. And the ability to reschedule meals is a lifesaver.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}

              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__img">
                    {/* <img src="/testimonial/testimonial-1-2.jpg" alt="" /> */}
                  </div>
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Layla Al-Harbi</a>
                    </h3>
                    <p className="testimonial-one__client-text">
                      Dammam
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                   “Love the customization and flexibility!”
Being vegan, I always struggled with meal plans. This app let me pick exactly what I wanted — and skip meals when needed. Highly recommended.
                  
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__img">
                    {/* <img src="/testimonial/testimonial-1-2.jpg" alt="" /> */}
                  </div>
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Abdullah Al-Shehri </a>
                    </h3>
                    <p className="testimonial-one__client-text">
                      Khobar
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                    “Fresh meals, right on time, every time.”
The best part? No more worrying about what to eat. Everything is planned around my workout days, and delivery is always on point.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__img">
                    {/* <img src="/testimonial/testimonial-1-2.jpg" alt="" /> */}
                  </div>
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Reem Al-Otaibi </a>
                    </h3>
                    <p className="testimonial-one__client-text">
                    Mecca
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                   “Eating healthy has never been this effortless!”
With my busy work schedule, I barely had time to plan meals. This app made it super simple — just pick, confirm, and enjoy. Total time-saver!
                   
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
