// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const Review = () => {
//   // Configuration options for the carousel
//   const options = {
//     loop: true,
//     margin: 30,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 2
//       },
//       576: {
//         items: 3
//       },
//       768: {
//         items: 4
//       },
//       992: {
//         items: 5
//       }
//     }
//   };

//   return (
//     <section className="brand-one">
//       <div className="container">
//         <div className="brand-one__inner">
//           <OwlCarousel className="brand-one__carousel owl-theme" {...options}>
//             <div className="item">
//               <div className="brand-one__single">
//                 <div className="brand-one__img">
//                   <img src="/brand/brand-1-1.png" alt="Brand Logo 1" />
//                 </div>
//               </div>
//             </div>

//             <div className="item">
//               <div className="brand-one__single">
//                 <div className="brand-one__img">
//                   <img src="/brand/brand-1-2.png" alt="Brand Logo 2" />
//                 </div>
//               </div>
//             </div>

//             <div className="item">
//               <div className="brand-one__single">
//                 <div className="brand-one__img">
//                   <img src="/brand/brand-1-3.png" alt="Brand Logo 3" />
//                 </div>
//               </div>
//             </div>

//             <div className="item">
//               <div className="brand-one__single">
//                 <div className="brand-one__img">
//                   <img src="/brand/brand-1-4.png" alt="Brand Logo 4" />
//                 </div>
//               </div>
//             </div>

//             <div className="item">
//               <div className="brand-one__single">
//                 <div className="brand-one__img">
//                   <img src="/brand/brand-1-5.png" alt="Brand Logo 5" />
//                 </div>
//               </div>
//             </div>
//           </OwlCarousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Review;

// import React from "react";

// const Review = () => {
//   return (
//     <div id="review">
//     <section  className="brand-one  py-5">
//       <div className="container">
//         <div className="brand-one__inner">
//           <div className="row align-items-center">
//             <div className="col-md-8">
//       <h2 className="section-title text-white mb-0">
//   <span  style={{fontSize: "45px"}}>Kickstart</span> <span style={{fontSize: "18px"}}>your journey with us</span>
// </h2>

//             </div>
//             <div className="col-md-4">
//               <div className="app-stores d-flex justify-content-end gap-3">
//                 <img src="/app-store.webp" alt="Download on App Store" className="img-fluid" style={{maxHeight: '50px'}} />
//                 <img src="/google-store.webp" alt="Get it on Google Play" className="img-fluid" style={{maxHeight: '50px', paddingRight: '67px' }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default Review;

// import React from 'react'

// const Review = () => {
//   return (
//     <div><section className="section-container rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto my-10">
//     <div className="container mx-auto px-4 py-16 md:py-24">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 mb-10 md:mb-0">
//           <h1 className="text-6xl md:text-8xl font-extrabold mb-4 title-gradient">
//             KICKSTART
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-medium opacity-90 mb-8">
//             Your journey with us
//           </p>
//           <p className="text-gray-300 text-opacity-80 mb-10 max-w-md">
//             Download our app today and take the first step towards achieving
//             your goals. Available on both iOS and Android platforms.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-6">
//           <div className="text-white text-lg mb-2 font-medium text-center md:text-right">
//             Get the app now
//           </div>
//           <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:space-x-6">
//             <a
//               href="#"
//               className="download-btn bg-black text-white py-3 px-6 rounded-xl flex items-center border-2 border-white border-opacity-20 hover:border-opacity-40"
//             >
//               <i className="fab fa-apple text-3xl mr-3" />
//               <div className="text-left">
//                 <div className="text-xs opacity-70">Download on the</div>
//                 <div className="text-xl font-semibold">App Store</div>
//               </div>
//             </a>
//             <a
//               href="#"
//               className="download-btn bg-black text-white py-3 px-6 rounded-xl flex items-center border-2 border-white border-opacity-20 hover:border-opacity-40"
//             >
//               <i className="fab fa-google-play text-3xl mr-3" />
//               <div className="text-left">
//                 <div className="text-xs opacity-70">Get it on</div>
//                 <div className="text-xl font-semibold">Google Play</div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
//   )
// }

// export default Review

import React from "react";

const Review = () => {
  return (
    <div>
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        body {\n            font-family: 'Poppins', sans-serif;\n        }\n        \n        .display-title {\n            font-family: 'Playfair Display', serif;\n            font-weight: 700;\n        }\n        \n        .gradient-text {\n            background: linear-gradient(90deg, #2F402F 0%, #71D630 100%);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n        }\n        \n        .gradient-bg {\n            background: linear-gradient(135deg, #2F402F 0%, #71D630 100%);\n        }\n        \n        .section-container {\n            background-color:rgb(8, 11, 8);\n            border-radius: 18px;\n            height: 299px;\n            position: relative;\n            overflow: hidden;\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        }\n        \n        .app-btn {\n            transition: all 0.3s ease;\n            transform: translateY(0);\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n        \n        .app-btn:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);\n        }\n        \n        .social-icon {\n            transition: all 0.3s ease;\n            background-color: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(5px);\n        }\n        \n        .social-icon:hover {\n            background-color: rgba(255, 255, 255, 0.2);\n            transform: translateY(-3px);\n        }\n        \n        .decorative-element {\n            position: absolute;\n            border-radius: 50%;\n            opacity: 0.08;\n            background: linear-gradient(135deg, #71D630 0%, #2F402F 100%);\n        }\n        \n        .leaf-decoration {\n            position: absolute;\n            opacity: 0.15;\n            transform: rotate(-15deg);\n        }\n        \n        .text-muted-light {\n            color: rgba(255, 255, 255, 0.7);\n        }\n        \n        .text-muted-lighter {\n            color: rgba(255, 255, 255, 0.5);\n        }\n        \n        .divider {\n            height: 1px;\n            background: rgba(255, 255, 255, 0.1);\n            width: 80px;\n            margin: 20px auto;\n        }\n    ",
          }}
        />
        <div className="container my-5">
          <div className="section-container position-relative p-4 p-md-5">
            {/* Decorative background elements */}
            <div
              className="decorative-element"
              style={{
                width: 300,
                height: 300,
                top: "-150px",
                right: "-150px",
              }}
            />
            <div
              className="decorative-element"
              style={{
                width: 200,
                height: 200,
                bottom: "-100px",
                left: "-100px",
              }}
            />
            {/* Leaf decorations */}
            <div className="leaf-decoration" style={{ top: 20, left: 20 }}>
              <i className="fas fa-leaf fa-2x text-success" />
            </div>
            <div className="leaf-decoration" style={{ bottom: 20, right: 20 }}>
              <i className="fas fa-leaf fa-2x text-success" />
            </div>
            <div className="row h-100 align-items-center position-relative">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-4 display-title fw-bold mb-3">
                  <span className="gradient-text">KICKSTART</span>
                </h1>
                <p className="h4 text-muted-light fw-light mb-4">
                  Your journey with us
                </p>
                {/* <p className="text-muted-light mb-4" style={{ maxWidth: 500 }}>
                  Join our premium platform and elevate your experience with our
                  exclusive solutions designed for discerning users.
                </p> */}
                <div className="d-flex align-items-center mt-4">
                  <div className="me-3">
                    <i className="fas fa-check-circle text-success me-2" />
                    <span className="text-white">Premium quality</span>
                  </div>
                  <div className="me-3">
                    <i className="fas fa-check-circle text-success me-2" />
                    <span className="text-white">Exclusive features</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-end">
                <div className="d-flex gap-4 mb-4">
                  {/* App Store Button */}
                  <div className="d-flex flex-column align-items-center">
                    <a
                      href="#"
                      className="app-btn gradient-bg text-white rounded-circle d-flex align-items-center justify-content-center mb-2"
                      style={{ width: 80, height: 80 }}
                    >
                      <i className="fab fa-apple fa-2x" />
                    </a>
                    <span className="text-muted-light small">App Store</span>
                  </div>
                  {/* Google Play Button */}
                  <div className="d-flex flex-column align-items-center">
                    <a
                      href="#"
                      className="app-btn gradient-bg text-white rounded-circle d-flex align-items-center justify-content-center mb-2"
                      style={{ width: 80, height: 80 }}
                    >
                      <i className="fab fa-google-play fa-2x" />
                    </a>
                    <span className="text-muted-light small">Google Play</span>
                  </div>
                </div>
                <div className="divider" />
                <p className="text-muted-lighter text-center text-lg-end mb-3">
                  Available on both platforms
                </p>
                {/* <div className="d-flex gap-3">
                  <a
                    href="#"
                    className="social-icon rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap JS Bundle with Popper */}
      </>
    </div>
  );
};

export default Review;
