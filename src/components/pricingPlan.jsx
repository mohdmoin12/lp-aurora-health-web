import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState('montly');
  
  // Slider settings with autoplay added
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // 3 seconds between slides
    pauseOnHover: true,       // Pause on hover (optional feature)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Sample data for pricing plans
  const pricingPlans = {
    montly: [
      {
        id: 1,
        title: 'Easy',
        price: '$10',
        period: '/month',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 2,
        title: 'Medium',
        price: '$20',
        period: '/month',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 3,
        title: 'Advanced',
        price: '$30',
        period: '/month',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 4,
        title: 'Hard',
        price: '$40',
        period: '/month',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      }
    ],
    yearly: [
      {
        id: 1,
        title: 'Easy',
        price: '$100',
        period: '/year',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 2,
        title: 'Medium',
        price: '$200',
        period: '/year',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 3,
        title: 'Advanced',
        price: '$300',
        period: '/year',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      },
      {
        id: 4,
        title: 'Hard',
        price: '$400',
        period: '/year',
        description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
        features: [
          'Mistakes To Avoid',
          'Winning for Your Startup',
          'Mistakes To Avoid'
        ]
      }
    ]
  };

  return (
    <div>
      <section className="pricing-two">
        <div className="container">
          <div className="pricing-two__tab-box pricing-two-tab">
            <div className="row">
              <div className="col-xl-4">
                <div className="pricing-two__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline text-white">Pricing Plan</span>
                    </div>
                    <h2 className="section-title__title title-animation text-white">
                      Our Pricing Plan
                    </h2>
                  </div>
                  <p className="pricing-two__text-1 ">
                    Car service is essential for maintaining Car service is essential
                    for maintaining performance and the longevity of vehicle. From oil
                    changes
                  </p>
                  <ul className="pricing-two-tab-buttons pricing-two-tab-btns clearfix list-unstyled">
                    <li 
                      className={`p-tab-btn ${activeTab === 'montly' ? 'active-btn' : ''}`}
                      onClick={() => setActiveTab('montly')}
                    >
                      <span>Monthly</span>
                    </li>
                    <li 
                      className={`p-tab-btn ${activeTab === 'yearly' ? 'active-btn' : ''}`}
                      onClick={() => setActiveTab('yearly')}
                    >
                      <span>Yearly</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="pricing-two__right">
                  <div className="p-tabs-content">
                    {/* Monthly Tab */}
                    <div className={`p-tab ${activeTab === 'montly' ? 'active-tab' : ''}`} id="montly">
                      <Slider {...sliderSettings}>
                        {pricingPlans.montly.map(plan => (
                          <div key={plan.id} className="px-2">
                            <div className="pricing-two__single h-100">
                              <div className="pricing-two__title-box">
                                <h2 className="pricing-two__title">{plan.title}</h2>
                              </div>
                              <div className="pricing-two__price-and-text-box">
                                <div className="pricing-two__price-box">
                                  <h3 className="pricing-two__price">
                                    {plan.price} <span>{plan.period}</span>
                                  </h3>
                                </div>
                                <p className="pricing-two__price-text">
                                  {plan.description}
                                </p>
                              </div>
                              <ul className="list-unstyled pricing-two__points">
                                {plan.features.map((feature, index) => (
                                  <li key={index}>
                                    <div className="icon">
                                      <span className="icon-double-arrow-right" />
                                    </div>
                                    <div className="text">
                                      <p>{feature}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <div className="pricing-two__btn-box">
                                <a href="pricing.html" className="thm-btn">
                                  Get Started Now
                                  <span className="icon-arrow-up-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    
                    {/* Yearly Tab */}
                    <div className={`p-tab ${activeTab === 'yearly' ? 'active-tab' : ''}`} id="yearly">
                      <Slider {...sliderSettings}>
                        {pricingPlans.yearly.map(plan => (
                          <div key={plan.id} className="px-2">
                            <div className="pricing-two__single h-100">
                              <div className="pricing-two__title-box">
                                <h2 className="pricing-two__title">{plan.title}</h2>
                              </div>
                              <div className="pricing-two__price-and-text-box">
                                <div className="pricing-two__price-box">
                                  <h3 className="pricing-two__price">
                                    {plan.price} <span>{plan.period}</span>
                                  </h3>
                                </div>
                                <p className="pricing-two__price-text">
                                  {plan.description}
                                </p>
                              </div>
                              <ul className="list-unstyled pricing-two__points">
                                {plan.features.map((feature, index) => (
                                  <li key={index}>
                                    <div className="icon">
                                      <span className="icon-double-arrow-right" />
                                    </div>
                                    <div className="text">
                                      <p>{feature}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <div className="pricing-two__btn-box">
                                <a href="pricing.html" className="thm-btn">
                                  Get Started Now
                                  <span className="icon-arrow-up-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPlan