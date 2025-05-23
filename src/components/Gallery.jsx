// import React, { useEffect, useRef } from "react";
// import { register } from 'swiper/element/bundle';

// // Register Swiper custom elements
// register();

// const Gallery = () => {
//   const swiperElRef = useRef(null);
  
//   useEffect(() => {
//     // Initialize horizontal sliding animations for desktop view
//     const initializeAnimations = () => {
//       // First row animation - sliding left to right
//       const firstRowContainer = document.querySelector('.marquee_mode-2');
//       if (firstRowContainer) {
//         // Clone gallery items to create infinite scroll effect
//         const originalItems = Array.from(firstRowContainer.children);
//         originalItems.forEach(item => {
//           const clone = item.cloneNode(true);
//           firstRowContainer.appendChild(clone);
//         });
        
//         // Apply sliding animation
//         firstRowContainer.classList.add('animate-slide-left');
//       }
      
//       // Second row animation - sliding right to left
//       const secondRowContainer = document.querySelector('.marquee_mode-3');
//       if (secondRowContainer) {
//         // Clone gallery items to create infinite scroll effect
//         const originalItems = Array.from(secondRowContainer.children);
//         originalItems.forEach(item => {
//           const clone = item.cloneNode(true);
//           secondRowContainer.appendChild(clone);
//         });
        
//         // Apply sliding animation
//         secondRowContainer.classList.add('animate-slide-right');
//       }
//     };

//     // Call animation initialization for desktop view
//     initializeAnimations();
    
//     // Initialize Swiper for mobile view
//     if (swiperElRef.current) {
//       // Swiper parameters
//       const swiperParams = {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         pagination: {
//           clickable: true,
//         },
//         navigation: true,
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: false,
//         }
//       };
      
//       // Assign all parameters to Swiper element
//       Object.assign(swiperElRef.current, swiperParams);
      
//       // Initialize Swiper
//       swiperElRef.current.initialize();
//     }
//   }, []);

//   return (
//     <div id="gallery-section" className="overflow-hidden">
//       <section className="gallery-three">
//         <div className="gallery-three__wrap">
//           <div className="section-title-two text-center sec-title-animation animation-style1">
//             <div className="section-title-two__tagline-box justify-content-center">
//               <div className="section-title-two__tagline-shape-1" />
//               <span className="section-title-two__tagline">Latest Gallery</span>
//               <div className="section-title-two__tagline-shape-1" />
//             </div>
//             <h2 className="section-title-two__title title-animation">
//               Quality Service Every Time <br />
//               Drive Safe Stay Secure
//             </h2>
//           </div>
          
//           {/* Desktop Gallery with Sliding Animations */}
//           <div className="d-none d-md-block">
//             {/* First row - slides from left to right */}
//             <ul className="gallery-three__list list-unstyled marquee_mode-2 d-flex overflow-hidden">
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="gallery/gallery-3-1.jpg" alt="Gallery image 1" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-1.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-2.jpg" alt="Gallery image 2" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-2.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-2.jpg" alt="Gallery image 3" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-3.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-4.jpg" alt="Gallery image 4" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-4.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//             </ul>
            
//             {/* Second row - slides from right to left */}
//             <ul className="gallery-three__list gallery-three__list--two list-unstyled marquee_mode-3 d-flex overflow-hidden">
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-5.jpg" alt="Gallery image 5" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-5.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-6.jpg" alt="Gallery image 6" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-6.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-7.jpg" alt="Gallery image 7" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-7.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-8.jpg" alt="Gallery image 8" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-8.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//           {/* Mobile Gallery with Swiper */}
//           <div className="d-md-none">
//             <swiper-container ref={swiperElRef} init="false" class="gallery-swiper">
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-1.jpg" className="d-block w-100" alt="Gallery image 1" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-1.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-2.jpg" className="d-block w-100" alt="Gallery image 2" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-2.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-3.jpg" className="d-block w-100" alt="Gallery image 3" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-3.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-4.jpg" className="d-block w-100" alt="Gallery image 4" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-4.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-5.jpg" className="d-block w-100" alt="Gallery image 5" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-5.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-6.jpg" className="d-block w-100" alt="Gallery image 6" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-6.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-7.jpg" className="d-block w-100" alt="Gallery image 7" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-7.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//               <swiper-slide>
//                 <div className="gallery-three__img">
//                   <img src="/gallery/gallery-3-8.jpg" className="d-block w-100" alt="Gallery image 8" />
//                   <div className="gallery-three__icon">
//                     <a className="img-popup" href="/gallery/gallery-3-8.jpg">
//                       <span className="icon-arrow-up-right-two" />
//                     </a>
//                   </div>
//                 </div>
//               </swiper-slide>
//             </swiper-container>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;






// import React, { useEffect, useRef, useState } from "react";
// import { register } from 'swiper/element/bundle';

// // Register Swiper custom elements
// register();

// const Gallery = () => {
//   const swiperElRef = useRef(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch products from API
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://aurora.sabtrek.com/api/get_all_products');
//         const data = await response.json();
        
//         if (data.status === 1) {
//           // Transform object to array with only image and name fields
//           const productsArray = Object.values(data.data).map(product => ({
//             image: product.image,
//             name: product.name
//           }));
//           console.log("prodtArray",productsArray)
//           setProducts(productsArray);
//         } else {
//           setError(data.message || 'Failed to fetch products');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     if (products.length === 0) return;

//     // Initialize horizontal sliding animations for desktop view
//     const initializeAnimations = () => {
//       // First row animation - sliding left to right
//       const firstRowContainer = document.querySelector('.marquee_mode-2');
//       if (firstRowContainer) {
//         // Clone gallery items to create infinite scroll effect
//         const originalItems = Array.from(firstRowContainer.children);
//         originalItems.forEach(item => {
//           const clone = item.cloneNode(true);
//           firstRowContainer.appendChild(clone);
//         });
        
//         // Apply sliding animation
//         firstRowContainer.classList.add('animate-slide-left');
//       }
      
//       // Second row animation - sliding right to left
//       const secondRowContainer = document.querySelector('.marquee_mode-3');
//       if (secondRowContainer) {
//         // Clone gallery items to create infinite scroll effect
//         const originalItems = Array.from(secondRowContainer.children);
//         originalItems.forEach(item => {
//           const clone = item.cloneNode(true);
//           secondRowContainer.appendChild(clone);
//         });
        
//         // Apply sliding animation
//         secondRowContainer.classList.add('animate-slide-right');
//       }
//     };

//     // Call animation initialization for desktop view
//     initializeAnimations();
    
//     // Initialize Swiper for mobile view
//     if (swiperElRef.current) {
//       // Swiper parameters
//       const swiperParams = {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         pagination: {
//           clickable: true,
//         },
//         navigation: true,
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: false,
//         }
//       };
      
//       // Assign all parameters to Swiper element
//       Object.assign(swiperElRef.current, swiperParams);
      
//       // Initialize Swiper
//       swiperElRef.current.initialize();
//     }
//   }, [products]);

//   if (loading) {
//     return (
//       <div id="gallery-section" className="overflow-hidden">
//         <section className="gallery-three">
//           <div className="gallery-three__wrap text-center py-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div id="gallery-section" className="overflow-hidden">
//         <section className="gallery-three">
//           <div className="gallery-three__wrap text-center py-5 text-danger">
//             Error: {error}
//           </div>
//         </section>
//       </div>
//     );
//   }

//   if (products.length === 0) {
//     return (
//       <div id="gallery-section" className="overflow-hidden">
//         <section className="gallery-three">
//           <div className="gallery-three__wrap text-center py-5">
//             No products found
//           </div>
//         </section>
//       </div>
//     );
//   }

//   // Split products into two rows for desktop view
//   const firstRowProducts = products.slice(0, Math.ceil(products.length / 2));
//   const secondRowProducts = products.slice(Math.ceil(products.length / 2));

//   return (
//     <div id="gallery-section" className="overflow-hidden">
//       <section className="gallery-three">
//         <div className="gallery-three__wrap">
//           <div className="section-title-two text-center sec-title-animation animation-style1">
//             <div className="section-title-two__tagline-box justify-content-center">
//               <div className="section-title-two__tagline-shape-1" />
//               <span className="section-title-two__tagline">Latest Gallery</span>
//               <div className="section-title-two__tagline-shape-1" />
//             </div>
//             <h2 className="section-title-two__title title-animation">
//               Quality Service Every Time <br />
//               Drive Safe Stay Secure
//             </h2>
//           </div>
          
//           {/* Desktop Gallery with Sliding Animations */}
//           <div className="d-none d-md-block">
//             {/* First row - slides from left to right */}
//             <ul className="gallery-three__list list-unstyled marquee_mode-2 d-flex overflow-hidden">
//               {firstRowProducts.map((product, index) => (
//                 <li key={`desktop-1-${index}`}>
//                   <div className="gallery-three__img">
//                     <img 
//                       src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
//                       alt={product.name} 
//                       onError={(e) => {
//                         e.target.onerror = null; 
//                         e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
//                       }}
//                     />
//                     <div className="gallery-three__icon">
//                       <a 
//                         className="img-popup" 
//                         href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
//                       >
//                         <span className="icon-arrow-up-right-two" />
//                       </a>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
            
//             {/* Second row - slides from right to left */}
//             <ul className="gallery-three__list gallery-three__list--two list-unstyled marquee_mode-3 d-flex overflow-hidden">
//               {secondRowProducts.map((product, index) => (
//                 <li key={`desktop-2-${index}`}>
//                   <div className="gallery-three__img">
//                     <img 
//                       src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
//                       alt={product.name}
//                       onError={(e) => {
//                         e.target.onerror = null; 
//                         e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
//                       }}
//                     />
//                     <div className="gallery-three__icon">
//                       <a 
//                         className="img-popup" 
//                         href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
//                       >
//                         <span className="icon-arrow-up-right-two" />
//                       </a>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Mobile Gallery with Swiper */}
//           <div className="d-md-none">
//             <swiper-container ref={swiperElRef} init="false" class="gallery-swiper">
//               {products.map((product, index) => (
//                 <swiper-slide key={`mobile-${index}`}>
//                   <div className="gallery-three__img">
//                     <img 
//                       src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
//                       className="d-block w-100" 
//                       alt={product.name}
//                       onError={(e) => {
//                         e.target.onerror = null; 
//                         e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
//                       }}
//                     />
//                     <div className="gallery-three__icon">
//                       <a 
//                         className="img-popup" 
//                         href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
//                       >
//                         <span className="icon-arrow-up-right-two" />
//                       </a>
//                     </div>
//                   </div>
//                 </swiper-slide>
//               ))}
//             </swiper-container>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;


import React, { useEffect, useRef, useState } from "react";
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const Gallery = () => {
  const swiperElRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://aurora.sabtrek.com/api/get_all_products');
        const data = await response.json();
        
        if (data.status === 1) {
          // Transform object to array with only image and name fields
          const productsArray = Object.values(data.data).map(product => ({
            image: product.image,
            name: product.name
          }));
          console.log("prodtArray", productsArray);
          setProducts(productsArray);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Only initialize animations once products are loaded
    if (products.length === 0) return;
    
    // Animation CSS setup
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes slideLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes slideRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .animate-slide-left {
        animation: slideLeft 30s linear infinite;
      }
      
      .animate-slide-right {
        animation: slideRight 30s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    // Initialize horizontal sliding animations for desktop view
    const initializeAnimations = () => {
      // First row animation - sliding right to left
      const firstRowContainer = document.querySelector('.marquee_mode-2');
      if (firstRowContainer) {
        // Clone gallery items to create infinite scroll effect
        const originalItems = Array.from(firstRowContainer.children);
        originalItems.forEach(item => {
          const clone = item.cloneNode(true);
          firstRowContainer.appendChild(clone);
        });
        
        // Apply sliding animation
        firstRowContainer.classList.add('animate-slide-left');
      }
      
      // Second row animation - sliding left to right
      const secondRowContainer = document.querySelector('.marquee_mode-3');
      if (secondRowContainer) {
        // Clone gallery items to create infinite scroll effect
        const originalItems = Array.from(secondRowContainer.children);
        originalItems.forEach(item => {
          const clone = item.cloneNode(true);
          secondRowContainer.appendChild(clone);
        });
        
        // Apply sliding animation
        secondRowContainer.classList.add('animate-slide-right');
      }
    };

    // Call animation initialization for desktop view
    setTimeout(() => {
      initializeAnimations();
    }, 500);
    
    // Initialize Swiper for mobile view
    if (swiperElRef.current) {
      // Swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          clickable: true,
        },
        navigation: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      };
      
      // Assign all parameters to Swiper element
      Object.assign(swiperElRef.current, swiperParams);
      
      // Initialize Swiper
      swiperElRef.current.initialize();
    }
  }, [products]);

  if (loading) {
    return (
      <div id="gallery-section" className="overflow-hidden">
        <section className="gallery-three">
          <div className="gallery-three__wrap text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div id="gallery-section" className="overflow-hidden">
        <section className="gallery-three">
          <div className="gallery-three__wrap text-center py-5 text-danger">
            Error: {error}
          </div>
        </section>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div id="gallery-section" className="overflow-hidden">
        <section className="gallery-three">
          <div className="gallery-three__wrap text-center py-5">
            No products found
          </div>
        </section>
      </div>
    );
  }

  // Split products into two rows for desktop view
  const firstRowProducts = products.slice(0, Math.ceil(products.length / 2));
  const secondRowProducts = products.slice(Math.ceil(products.length / 2));

  return (
    <div id="our-menu" className="overflow-hidden">
      <section className="gallery-three">
        <div className="gallery-three__wrap">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box justify-content-center">
              <div className="section-title-two__tagline-shape-1" />
              <span className="section-title-two__tagline">Our menu</span>
              <div className="section-title-two__tagline-shape-1" />
            </div>
            <h2 className="section-title-two__title title-animation">
              Quality Service Every Time <br />
              Drive Safe Stay Secure
            </h2>
          </div>
          
          {/* Desktop Gallery with Sliding Animations */}
          <div className="d-none d-md-block">
            {/* First row - slides from right to left */}
            <div className="position-relative overflow-hidden" style={{ width: '100%' }}>
              <ul className="gallery-three__list list-unstyled marquee_mode-2 d-flex" 
                  style={{ width: 'fit-content', flexShrink: 0 }}>
                {firstRowProducts.map((product, index) => (
                  <li key={`desktop-1-${index}`} style={{ display: 'inline-block', width: '300px', margin: '0 10px' }}>
                    <div className="gallery-three__img">
                      <img 
                        src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
                        alt={product.name} 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                        }}
                      />
                      <div className="gallery-three__icon">
                        <a 
                          className="img-popup" 
                          href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
                        >
                          <span className="icon-arrow-up-right-two" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Second row - slides from left to right */}
            <div className="position-relative overflow-hidden mt-4" style={{ width: '100%' }}>
              <ul className="gallery-three__list gallery-three__list--two list-unstyled marquee_mode-3 d-flex" 
                  style={{ width: 'fit-content', flexShrink: 0 }}>
                {secondRowProducts.map((product, index) => (
                  <li key={`desktop-2-${index}`} style={{ display: 'inline-block', width: '300px', margin: '0 10px' }}>
                    <div className="gallery-three__img">
                      <img 
                        src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
                        alt={product.name}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                        }}
                      />
                      <div className="gallery-three__icon">
                        <a 
                          className="img-popup" 
                          href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
                        >
                          <span className="icon-arrow-up-right-two" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Mobile Gallery with Swiper */}
          <div className="d-md-none">
            <swiper-container ref={swiperElRef} init="false" class="gallery-swiper">
              {products.map((product, index) => (
                <swiper-slide key={`mobile-${index}`}>
                  <div className="gallery-three__img">
                    <img 
                      src={`https://aurora.sabtrek.com/public/uploads/${product.image}`} 
                      className="d-block w-100" 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                      }}
                    />
                    <div className="gallery-three__icon">
                      <a 
                        className="img-popup" 
                        href={`https://aurora.sabtrek.com/public/uploads/${product.image}`}
                      >
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;