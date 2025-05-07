// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const MainSlider = () => {
//   return (
//     <section className="main-slider-two">
//       <div className="main-slider-two__wrap">
//         <OwlCarousel
//           className="main-slider-two__carousel owl-carousel owl-theme"
//           margin={10}
//           nav={false}
//           autoplayTimeout={3500}
//           items={1}
//           dots={false}
//         >
//           <div className="item">
//             <div className="container">
//               <div className="main-slider-two__content">
//                 <h2 className="main-slider-two__title">
//                   Professional Care <br />
//                   for Your Car <br />
//                   Keeping You on
//                 </h2>
//                 <p className="main-slider-two__text">
//                   Car service is essential for maintaining performance and
//                   longevity of <br />
//                   your vehicle. From oil changes Car service is essential
//                 </p>
//                 <div className="main-slider-two__btn">
//                   <a href="contact.html" className="thm-btn">
//                     Get Started
//                     <span className="icon-arrow-up-right" />
//                   </a>
//                 </div>
//                 <div className="main-slider-two__img-box">
//                   <div className="main-slider-two__shape-1">
//                     <img
//                       src="/shapes/main-slider-two-shape-1.png"
//                       alt=""
//                       className="rotate-me"
//                     />
//                   </div>
//                   <div className="main-slider-two__img">
//                     <img
//                       src="/resources/main-slider-two-img-1.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="container">
//               <div className="main-slider-two__content">
//                 <h2 className="main-slider-two__title">
//                   Professional Care <br />
//                   for Your Car <br />
//                   Keeping You on
//                 </h2>
//                 <p className="main-slider-two__text">
//                   Car service is essential for maintaining performance and
//                   longevity of <br />
//                   your vehicle. From oil changes Car service is essential
//                 </p>
//                 <div className="main-slider-two__btn">
//                   <a href="contact.html" className="thm-btn">
//                     Get Started
//                     <span className="icon-arrow-up-right" />
//                   </a>
//                 </div>
//                 <div className="main-slider-two__img-box">
//                   <div className="main-slider-two__shape-1">
//                     <img
//                       src="/shapes/main-slider-two-shape-1.png"
//                       alt=""
//                       className="rotate-me"
//                     />
//                   </div>
//                   <div className="main-slider-two__img">
//                     <img
//                       src="/resources/main-slider-two-img-2.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="container">
//               <div className="main-slider-two__content">
//                 <h2 className="main-slider-two__title">
//                   Professional Care <br />
//                   for Your Car <br />
//                   Keeping You on
//                 </h2>
//                 <p className="main-slider-two__text">
//                   Car service is essential for maintaining performance and
//                   longevity of <br />
//                   your vehicle. From oil changes Car service is essential
//                 </p>
//                 <div className="main-slider-two__btn">
//                   <a href="contact.html" className="thm-btn">
//                     Get Started
//                     <span className="icon-arrow-up-right" />
//                   </a>
//                 </div>
//                 <div className="main-slider-two__img-box">
//                   <div className="main-slider-two__shape-1">
//                     <img
//                       src="/shapes/main-slider-two-shape-1.png"
//                       alt=""
//                       className="rotate-me"
//                     />
//                   </div>
//                   <div className="main-slider-two__img">
//                     <img
//                       src="/resources/main-slider-two-img-3.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </OwlCarousel>
//       </div>
//     </section>
//   );
// };

// export default MainSlider;




import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MainSlider = () => {
  return (
    <section className="main-slider-two">
      <div className="main-slider-two__wrap">
        <OwlCarousel
          className="main-slider-two__carousel owl-carousel owl-theme"
          margin={10}
          nav={false}
          autoplay={true}
          autoplayTimeout={8000}
          items={1}
          dots={true}
          loop={true}
        >
          <div className="item">
            <div className="container">
              <div className="main-slider-two__content">
                <h2 className="main-slider-two__title">
                  Professional Care <br />
                  for Your Car <br />
                  Keeping You on
                </h2>
                <p className="main-slider-two__text">
                  Car service is essential for maintaining performance and
                  longevity of <br />
                  your vehicle. From oil changes Car service is essential
                </p>
                <div className="main-slider-two__btn">
                  <a href="contact.html" className="thm-btn">
                    Get Started
                    <span className="icon-arrow-up-right" />
                  </a>
                </div>
                <div className="main-slider-two__img-box">
                  <div className="main-slider-two__shape-1">
                    <img
                      src="/shapes/main-slider-two-shape-1.png"
                      alt=""
                      className="rotate-me"
                    />
                  </div>
                  <div className="main-slider-two__img">
                    <img
                      src="/resources/main-slider-two-img-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="main-slider-two__content">
                <h2 className="main-slider-two__title">
                  Professional Care <br />
                  for Your Car <br />
                  Keeping You on
                </h2>
                <p className="main-slider-two__text">
                  Car service is essential for maintaining performance and
                  longevity of <br />
                  your vehicle. From oil changes Car service is essential
                </p>
                <div className="main-slider-two__btn">
                  <a href="contact.html" className="thm-btn">
                    Get Started
                    <span className="icon-arrow-up-right" />
                  </a>
                </div>
                <div className="main-slider-two__img-box">
                  <div className="main-slider-two__shape-1">
                    <img
                      src="/shapes/main-slider-two-shape-1.png"
                      alt=""
                      className="rotate-me"
                    />
                  </div>
                  <div className="main-slider-two__img">
                    <img
                      src="/resources/main-slider-two-img-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="main-slider-two__content">
                <h2 className="main-slider-two__title">
                  Professional Care <br />
                  for Your Car <br />
                  Keeping You on
                </h2>
                <p className="main-slider-two__text">
                  Car service is essential for maintaining performance and
                  longevity of <br />
                  your vehicle. From oil changes Car service is essential
                </p>
                <div className="main-slider-two__btn">
                  <a href="contact.html" className="thm-btn">
                    Get Started
                    <span className="icon-arrow-up-right" />
                  </a>
                </div>
                <div className="main-slider-two__img-box">
                  <div className="main-slider-two__shape-1">
                    <img
                      src="/shapes/main-slider-two-shape-1.png"
                      alt=""
                      className="rotate-me"
                    />
                  </div>
                  <div className="main-slider-two__img">
                    <img
                      src="/resources/main-slider-two-img-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default MainSlider;