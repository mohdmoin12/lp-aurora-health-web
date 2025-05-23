// import React from "react";

// const Services = () => {
//   return (
//     <div id="services-section">
//      <section className="services-two">
//   <div className="container">
//     <div className="section-title text-center sec-title-animation animation-style1">
//       <div className="section-title__tagline-box">
//         <span className="section-title__tagline text-white">Latest service</span>
//       </div>
//       <h2 className="section-title__title title-animation text-white">
//         The Car Doctor Service Easy Drive
//         <br />
//         Maintenance Center
//       </h2>
//     </div>
//     <div className="row">
//       {/*Services Two Single Start*/}
//       <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
//         <div className="services-two__single">
//           <div className="services-two__icon">
//             <span className="icon-gearshift" />
//           </div>
//           <h3 className="services-two__title">
//             <a href="auto-pro-mechanic-shop.html">ProBuild Solutions</a>
//           </h3>
//           <p className="services-two__text text-black">
//             Car service is essential for maintaining a the performance and
//             longevity service is essential for maintaining
//           </p>
//         </div>
//         <div className="services-two__single">
//           <div className="services-two__icon">
//             <span className="icon-wheels" />
//           </div>
//           <h3 className="services-two__title text-black">
//             <a href="careful-car-service-station.html">Beyond Boundaries</a>
//           </h3>
//           <p className="services-two__text text-black">
//             Car service is essential for maintaining a the performance and
//             longevity service is essential for maintaining
//           </p>
//         </div>
//       </div>
//       {/*Services Two Single End*/}
//       {/*Services Two Single Start*/}
//       <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
//         <div className="services-two__img">
//           <img src="/service.jpg" alt="" />
//         </div>
//       </div>
//       {/*Services Two Single End*/}
//       {/*Services Two Single Start*/}
//       <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
//         <div className="services-two__single">
//           <div className="services-two__icon">
//             <span className="icon-piston" />
//           </div>
//           <h3 className="services-two__title">
//             <a href="smooth-ride-vehicle-care.html">Prime Construction</a>
//           </h3>
//           <p className="services-two__text text-black">
//             Car service is essential for maintaining a the performance and
//             longevity service is essential for maintaining
//           </p>
//         </div>
//         <div className="services-two__single">
//           <div className="services-two__icon">
//             <span className="icon-pressure" />
//           </div>
//           <h3 className="services-two__title">
//             <a href="elite-auto-services.html">Elite Builders</a>
//           </h3>
//           <p className="services-two__text text-black">
//             Car service is essential for maintaining a the performance and
//             longevity service is essential for maintaining
//           </p>
//         </div>
//       </div>
//       {/*Services Two Single End*/}
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Services;

import React from "react";

const Services = () => {
  return (
    <div id="why-aurora">
      <section className="services-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline text-white">
                Why Aurora
              </span>
            </div>
            <h2 className="section-title__title title-animation text-white">
              The Car Doctor Service Easy Drive
              <br />
              Maintenance Center
            </h2>
          </div>
          <div className="row">
            {/*Left Column - 3 Services*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp "
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-gearshift" />
                </div>
                <h3 className="services-two__title">
                  <a href="auto-pro-mechanic-shop.html">Trusted Nutrition</a>
                </h3>
                <p className="services-two__text text-black">
                  Our meals use fresh, wholesome ingredients thoughtfully selected to support your health, enhance your energy
                </p>
              </div>
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-wheels" />
                </div>
                <h3 className="services-two__title text-black">
                  <a href="careful-car-service-station.html">
                    Custom Nutrition
                  </a>
                </h3>
                <p className="services-two__text text-black">
                  Personalized plans like keto or high-protein align with your
                  fitness targets. Every meal is tailored to your activity level
                  and aspirations.
                </p>
              </div>
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-engine" />
                </div>
                <h3 className="services-two__title text-black">
                  <a href="engine-diagnostics.html">Simple Tracking</a>
                </h3>
                <p className="services-two__text text-black">
                  Easily track your daily meals with our intuitive platform.
                  Modify your menu on the go to suit your preferences or needs.
                </p>
              </div>
            </div>
            {/*Left Column End*/}

            {/*Center Column - Image*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-two__img">
                <img
                  className="services-two__img"
                  style={{ marginTop: "251px" }}
                  src="/service.jpg"
                  alt="Car Service"
                />
              </div>
            </div>
            {/*Center Column End*/}

            {/*Right Column - 3 Services*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-piston" />
                </div>
                <h3 className="services-two__title">
                  <a href="smooth-ride-vehicle-care.html">
                    Alert for Allergies
                  </a>
                </h3>
                <p className="services-two__text text-black">
                  Get instant alerts if a meal contains ingredients you’re
                  allergic to. Swap options seamlessly to keep your dining safe
                  and enjoyable.
                </p>
              </div>
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-pressure" />
                </div>
                <h3 className="services-two__title">
                  <a href="elite-auto-services.html">Pause Flexibility</a>
                </h3>
                <p className="services-two__text text-black">
                  Take control with flexible subscriptions you can pause
                  anytime. Resume your plan whenever you’re ready, hassle-free.
                </p>
              </div>
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-brake" />
                </div>
                <h3 className="services-two__title">
                  <a href="brake-service.html">Free Delivery</a>
                </h3>
                <p className="services-two__text text-black">
                  Enjoy the convenience of free delivery straight to your door.
                  Fresh, healthy meals arrive on time, ready for you to savor.
                </p>
              </div>
            </div>
            {/*Right Column End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
