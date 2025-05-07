import React, { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const Gallery = () => {
  const swiperElRef = useRef(null);
  
  useEffect(() => {
    // Initialize horizontal sliding animations for desktop view
    const initializeAnimations = () => {
      // First row animation - sliding left to right
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
      
      // Second row animation - sliding right to left
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
    initializeAnimations();
    
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
  }, []);

  return (
    <div id="gallery-section" className="overflow-hidden">
      <section className="gallery-three">
        <div className="gallery-three__wrap">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box justify-content-center">
              <div className="section-title-two__tagline-shape-1" />
              <span className="section-title-two__tagline">Latest Gallery</span>
              <div className="section-title-two__tagline-shape-1" />
            </div>
            <h2 className="section-title-two__title title-animation">
              Quality Service Every Time <br />
              Drive Safe Stay Secure
            </h2>
          </div>
          
          {/* Desktop Gallery with Sliding Animations */}
          <div className="d-none d-md-block">
            {/* First row - slides from left to right */}
            <ul className="gallery-three__list list-unstyled marquee_mode-2 d-flex overflow-hidden">
              <li>
                <div className="gallery-three__img">
                  <img src="gallery/gallery-3-1.jpg" alt="Gallery image 1" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-1.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-2.jpg" alt="Gallery image 2" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-2.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-2.jpg" alt="Gallery image 3" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-3.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-4.jpg" alt="Gallery image 4" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-4.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            
            {/* Second row - slides from right to left */}
            <ul className="gallery-three__list gallery-three__list--two list-unstyled marquee_mode-3 d-flex overflow-hidden">
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-5.jpg" alt="Gallery image 5" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-5.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-6.jpg" alt="Gallery image 6" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-6.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-7.jpg" alt="Gallery image 7" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-7.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-8.jpg" alt="Gallery image 8" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-8.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Mobile Gallery with Swiper */}
          <div className="d-md-none">
            <swiper-container ref={swiperElRef} init="false" class="gallery-swiper">
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-1.jpg" className="d-block w-100" alt="Gallery image 1" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-1.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-2.jpg" className="d-block w-100" alt="Gallery image 2" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-2.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-3.jpg" className="d-block w-100" alt="Gallery image 3" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-3.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-4.jpg" className="d-block w-100" alt="Gallery image 4" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-4.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-5.jpg" className="d-block w-100" alt="Gallery image 5" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-5.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-6.jpg" className="d-block w-100" alt="Gallery image 6" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-6.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-7.jpg" className="d-block w-100" alt="Gallery image 7" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-7.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="gallery-three__img">
                  <img src="/gallery/gallery-3-8.jpg" className="d-block w-100" alt="Gallery image 8" />
                  <div className="gallery-three__icon">
                    <a className="img-popup" href="/gallery/gallery-3-8.jpg">
                      <span className="icon-arrow-up-right-two" />
                    </a>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;