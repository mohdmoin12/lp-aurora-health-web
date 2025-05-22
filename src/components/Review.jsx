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



import React from "react";

const Review = () => {
  return (
    <section className="brand-one  py-5">
      <div className="container">
        <div className="brand-one__inner">
          <div className="row align-items-center">
            <div className="col-md-8">
      <h2 className="section-title text-white mb-0">
  <span  style={{fontSize: "45px"}}>Kickstart</span> <span style={{fontSize: "18px"}}>your journey with us</span>
</h2>


            </div>
            <div className="col-md-4">
              <div className="app-stores d-flex justify-content-end gap-3">
                <img src="/app-store.webp" alt="Download on App Store" className="img-fluid" style={{maxHeight: '50px'}} />
                <img src="/google-store.webp" alt="Get it on Google Play" className="img-fluid" style={{maxHeight: '50px', paddingRight: '67px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

