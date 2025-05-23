// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PricingPlan = () => {
//   const [activeTab, setActiveTab] = useState('montly');
  
//   // Slider settings with autoplay added
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,           // Enable autoplay
//     autoplaySpeed: 3000,      // 3 seconds between slides
//     pauseOnHover: true,       // Pause on hover (optional feature)
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   // Sample data for pricing plans
//   const pricingPlans = {
//     montly: [
//       {
//         id: 1,
//         title: 'Easy',
//         price: '$10',
//         period: '/month',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 2,
//         title: 'Medium',
//         price: '$20',
//         period: '/month',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 3,
//         title: 'Advanced',
//         price: '$30',
//         period: '/month',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 4,
//         title: 'Hard',
//         price: '$40',
//         period: '/month',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       }
//     ],
//     yearly: [
//       {
//         id: 1,
//         title: 'Easy',
//         price: '$100',
//         period: '/year',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 2,
//         title: 'Medium',
//         price: '$200',
//         period: '/year',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 3,
//         title: 'Advanced',
//         price: '$300',
//         period: '/year',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       },
//       {
//         id: 4,
//         title: 'Hard',
//         price: '$400',
//         period: '/year',
//         description: 'Car service is essential for maintaining performance and longevity of vehicle. From oil changes',
//         features: [
//           'Mistakes To Avoid',
//           'Winning for Your Startup',
//           'Mistakes To Avoid'
//         ]
//       }
//     ]
//   };

//   return (
//     <div>
//       <section className="pricing-two">
//         <div className="container">
//           <div className="pricing-two__tab-box pricing-two-tab">
//             <div className="row">
//               <div className="col-xl-4">
//                 <div className="pricing-two__left">
//                   <div className="section-title text-left sec-title-animation animation-style2">
//                     <div className="section-title__tagline-box">
//                       <span className="section-title__tagline text-white">Pricing Plan</span>
//                     </div>
//                     <h2 className="section-title__title title-animation text-white">
//                       Our Pricing Plan
//                     </h2>
//                   </div>
//                   <p className="pricing-two__text-1 ">
//                     Car service is essential for maintaining Car service is essential
//                     for maintaining performance and the longevity of vehicle. From oil
//                     changes
//                   </p>
//                   <ul className="pricing-two-tab-buttons pricing-two-tab-btns clearfix list-unstyled">
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'montly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('montly')}
//                     >
//                       <span>Monthly</span>
//                     </li>
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'yearly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('yearly')}
//                     >
//                       <span>Yearly</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-8">
//                 <div className="pricing-two__right">
//                   <div className="p-tabs-content">
//                     {/* Monthly Tab */}
//                     <div className={`p-tab ${activeTab === 'montly' ? 'active-tab' : ''}`} id="montly">
//                       <Slider {...sliderSettings}>
//                         {pricingPlans.montly.map(plan => (
//                           <div key={plan.id} className="px-2">
//                             <div className="pricing-two__single h-100">
//                               <div className="pricing-two__title-box">
//                                 <h2 className="pricing-two__title">{plan.title}</h2>
//                               </div>
//                               <div className="pricing-two__price-and-text-box">
//                                 <div className="pricing-two__price-box">
//                                   <h3 className="pricing-two__price">
//                                     {plan.price} <span>{plan.period}</span>
//                                   </h3>
//                                 </div>
//                                 <p className="pricing-two__price-text">
//                                   {plan.description}
//                                 </p>
//                               </div>
//                               <ul className="list-unstyled pricing-two__points">
//                                 {plan.features.map((feature, index) => (
//                                   <li key={index}>
//                                     <div className="icon">
//                                       <span className="icon-double-arrow-right" />
//                                     </div>
//                                     <div className="text">
//                                       <p>{feature}</p>
//                                     </div>
//                                   </li>
//                                 ))}
//                               </ul>
//                               <div className="pricing-two__btn-box">
//                                 <a href="pricing.html" className="thm-btn">
//                                   Get Started Now
//                                   <span className="icon-arrow-up-right" />
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </Slider>
//                     </div>
                    
//                     {/* Yearly Tab */}
//                     <div className={`p-tab ${activeTab === 'yearly' ? 'active-tab' : ''}`} id="yearly">
//                       <Slider {...sliderSettings}>
//                         {pricingPlans.yearly.map(plan => (
//                           <div key={plan.id} className="px-2">
//                             <div className="pricing-two__single h-100">
//                               <div className="pricing-two__title-box">
//                                 <h2 className="pricing-two__title">{plan.title}</h2>
//                               </div>
//                               <div className="pricing-two__price-and-text-box">
//                                 <div className="pricing-two__price-box">
//                                   <h3 className="pricing-two__price">
//                                     {plan.price} <span>{plan.period}</span>
//                                   </h3>
//                                 </div>
//                                 <p className="pricing-two__price-text">
//                                   {plan.description}
//                                 </p>
//                               </div>
//                               <ul className="list-unstyled pricing-two__points">
//                                 {plan.features.map((feature, index) => (
//                                   <li key={index}>
//                                     <div className="icon">
//                                       <span className="icon-double-arrow-right" />
//                                     </div>
//                                     <div className="text">
//                                       <p>{feature}</p>
//                                     </div>
//                                   </li>
//                                 ))}
//                               </ul>
//                               <div className="pricing-two__btn-box">
//                                 <a href="pricing.html" className="thm-btn">
//                                   Get Started Now
//                                   <span className="icon-arrow-up-right" />
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </Slider>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default PricingPlan





// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PricingPlan = () => {
//   const [activeTab, setActiveTab] = useState('weekly');
//   const [pricingPlans, setPricingPlans] = useState({
//     weekly: [],
//     monthly: [],
//     yearly: []
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Slider settings with autoplay
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   // Function to extract features from description HTML
//   const extractFeatures = (description) => {
//     // Simple extraction by splitting on <p> tags
//     const features = [];
//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = description;
    
//     // Extract text from each paragraph
//     const paragraphs = tempDiv.querySelectorAll('p');
//     paragraphs.forEach(p => {
//       if (p.textContent.trim()) {
//         features.push(p.textContent.trim());
//       }
//     });
    
//     return features;
//   };

//   useEffect(() => {
//     const fetchPricingPlans = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://aurora.sabtrek.com/api/get_plans', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             latitude: 24.762979068238252,
//             longitude: 46.727271211164314
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch pricing plans');
//         }

//         const responseData = await response.json();
        
//         // Check if the API response has the expected structure
//         if (!responseData.data || !Array.isArray(responseData.data)) {
//           throw new Error('Invalid data format received from API');
//         }
        
//         // Map the API data to our component's expected format
//         const plansData = responseData.data;
        
//         // Organize the data into weekly, monthly, and yearly plans based on duration field
//         const organizedPlans = {
//           weekly: plansData.filter(plan => plan.duration === 'Weekly').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/week',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           })),
//           monthly: plansData.filter(plan => plan.duration === 'Monthly').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/month',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           })),
//           yearly: plansData.filter(plan => plan.duration === '3 Months').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/3 months',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           }))
//         };
        
//         setPricingPlans(organizedPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching plans:', err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchPricingPlans();
//   }, []);

//   // Function to render a plan
//   const renderPlan = (plan) => (
//     <div key={plan.id} className="px-2">
//       <div className="pricing-two__single h-100">
//         <div className="pricing-two__title-box">
//           <h2 className="pricing-two__title">{plan.title}</h2>
//           {plan.image && (
//             <div className="pricing-two__image mt-2">
//               <img 
//                 src={`https://aurora.sabtrek.com/public/uploads/${plan.image}`} 
//                 alt={plan.title} 
//                 className="img-fluid" 
//                 style={{ maxHeight: '60px', margin: '0 auto' }}
//               />
//             </div>
//           )}
//         </div>
//         <div className="pricing-two__price-and-text-box">
//           <div className="pricing-two__price-box">
//             <h3 className="pricing-two__price">
//               {plan.price} <span>{plan.period}</span>
//             </h3>
//           </div>
//           <p className="pricing-two__price-text">
//             {plan.description}
//           </p>
//         </div>
//         <ul className="list-unstyled pricing-two__points">
//           {plan.features && plan.features.map((feature, index) => (
//             <li key={index}>
//               <div className="icon">
//                 <span className="icon-double-arrow-right" />
//               </div>
//               <div className="text">
//                 <p>{feature}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="pricing-two__btn-box">
//           <a href={`plan-details/${plan.id}`} className="thm-btn">
//             Get Started Now
//             <span className="icon-arrow-up-right" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <section className="pricing-two">
//         <div className="container">
//           <div className="pricing-two__tab-box pricing-two-tab">
//             <div className="row">
//               <div className="col-xl-4">
//                 <div className="pricing-two__left">
//                   <div className="section-title text-left sec-title-animation animation-style2">
//                     <div className="section-title__tagline-box">
//                       <span className="section-title__tagline text-white">Pricing Plan</span>
//                     </div>
//                     <h2 className="section-title__title title-animation text-white">
//                       Our Pricing Plan
//                     </h2>
//                   </div>
//                   <p className="pricing-two__text-1">
//                     Choose the plan that suits your needs. We offer flexible weekly, monthly, and 3-month options for your convenience.
//                   </p>
//                   <ul className="pricing-two-tab-buttons pricing-two-tab-btns clearfix list-unstyled">
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'weekly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('weekly')}
//                     >
//                       <span>Weekly</span>
//                     </li>
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'monthly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('monthly')}
//                     >
//                       <span>Monthly</span>
//                     </li>
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'yearly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('yearly')}
//                     >
//                       <span>3 Months</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-8">
//                 <div className="pricing-two__right">
//                   <div className="p-tabs-content">
//                     {loading ? (
//                       <div className="text-center py-5">
//                         <div className="spinner-border text-primary" role="status">
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                       </div>
//                     ) : error ? (
//                       <div className="alert alert-danger" role="alert">
//                         {error}
//                       </div>
//                     ) : (
//                       <>
//                         {/* Weekly Tab */}
//                         <div className={`p-tab ${activeTab === 'weekly' ? 'active-tab' : ''}`} id="weekly">
//                           {pricingPlans.weekly.length > 0 ? (
//                             <Slider {...sliderSettings}>
//                               {pricingPlans.weekly.map(plan => renderPlan(plan))}
//                             </Slider>
//                           ) : (
//                             <div className="p-4 text-center">No weekly plans available</div>
//                           )}
//                         </div>
                        
//                         {/* Monthly Tab */}
//                         <div className={`p-tab ${activeTab === 'monthly' ? 'active-tab' : ''}`} id="monthly">
//                           {pricingPlans.monthly.length > 0 ? (
//                             <Slider {...sliderSettings}>
//                               {pricingPlans.monthly.map(plan => renderPlan(plan))}
//                             </Slider>
//                           ) : (
//                             <div className="p-4 text-center">No monthly plans available</div>
//                           )}
//                         </div>
                        
//                         {/* Yearly Tab (3 Months) */}
//                         <div className={`p-tab ${activeTab === 'yearly' ? 'active-tab' : ''}`} id="yearly">
//                           {pricingPlans.yearly.length > 0 ? (
//                             <Slider {...sliderSettings}>
//                               {pricingPlans.yearly.map(plan => renderPlan(plan))}
//                             </Slider>
//                           ) : (
//                             <div className="p-4 text-center">No 3-month plans available</div>
//                           )}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PricingPlan;



// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PricingPlan = () => {
//   const [activeTab, setActiveTab] = useState('weekly');
//   const [pricingPlans, setPricingPlans] = useState({
//     weekly: [],
//     monthly: [],
//     yearly: []
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Slider settings with autoplay
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   // Function to extract features from description HTML
//   const extractFeatures = (description) => {
//     // Simple extraction by splitting on <p> tags
//     const features = [];
//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = description;
    
//     // Extract text from each paragraph
//     const paragraphs = tempDiv.querySelectorAll('p');
//     paragraphs.forEach(p => {
//       if (p.textContent.trim()) {
//         features.push(p.textContent.trim());
//       }
//     });
    
//     return features;
//   };

//   useEffect(() => {
//     const fetchPricingPlans = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://aurora.sabtrek.com/api/get_plans', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             latitude: 24.762979068238252,
//             longitude: 46.727271211164314
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch pricing plans');
//         }

//         const responseData = await response.json();
        
//         // Check if the API response has the expected structure
//         if (!responseData.data || !Array.isArray(responseData.data)) {
//           throw new Error('Invalid data format received from API');
//         }
        
//         // Map the API data to our component's expected format
//         const plansData = responseData.data;
        
//         // Organize the data into weekly, monthly, and yearly plans based on duration field
//         const organizedPlans = {
//           weekly: plansData.filter(plan => plan.duration === 'Weekly').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/week',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           })),
//           monthly: plansData.filter(plan => plan.duration === 'Monthly').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/month',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           })),
//           yearly: plansData.filter(plan => plan.duration === '3 Months').map(plan => ({
//             id: plan.id,
//             title: plan.name,
//             price: plan.amount,
//             period: '/3 months',
//             description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
//             features: extractFeatures(plan.description),
//             image: plan.img
//           }))
//         };
        
//         setPricingPlans(organizedPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching plans:', err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchPricingPlans();
//   }, []);

//   // Function to render a plan
//   const renderPlan = (plan) => (
//     <div key={plan.id} className="px-2 h-100">
//       <div className="pricing-two__single d-flex flex-column h-100">
//         {/* Title Section - Fixed Height */}
//         <div className="pricing-two__title-box">
//           <h2 className="pricing-two__title">{plan.title}</h2>
//           {plan.image && (
//             <div className="pricing-two__image mt-2">
//               <img 
//                 src={`https://aurora.sabtrek.com/public/uploads/${plan.image}`} 
//                 alt={plan.title} 
//                 className="img-fluid" 
//                 style={{ maxHeight: '60px', margin: '0 auto' }}
//               />
//             </div>
//           )}
//         </div>
        
//         {/* Price Section - Fixed Height */}
//         <div className="pricing-two__price-and-text-box">
//           <div className="pricing-two__price-box">
//             <h3 className="pricing-two__price">
//               {plan.price} <span>{plan.period}</span>
//             </h3>
//           </div>
//           <p className="pricing-two__price-text">
//             {plan.description}
//           </p>
//         </div>
        
//         {/* Features Section - Scrollable if needed */}
//         <div className="flex-grow-1 overflow-auto" style={{ minHeight: '150px', maxHeight: '150px' }}>
//           <ul className="list-unstyled pricing-two__points mb-0">
//             {plan.features && plan.features.map((feature, index) => (
//               <li key={index}>
//                 <div className="icon">
//                   <span className="icon-double-arrow-right" />
//                 </div>
//                 <div className="text">
//                   <p>{feature}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Button Section - Fixed Height */}
//         <div className="pricing-two__btn-box mt-auto pt-3">
//           <a href={`plan-details/${plan.id}`} className="thm-btn w-100 text-center">
//             Get Started Now
//             <span className="icon-arrow-up-right" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <section className="pricing-two">
//         <div className="container">
//           <div className="pricing-two__tab-box pricing-two-tab">
//             <div className="row">
//               <div className="col-xl-4">
//                 <div className="pricing-two__left">
//                   <div className="section-title text-left sec-title-animation animation-style2">
//                     <div className="section-title__tagline-box">
//                       <span className="section-title__tagline text-white">Pricing Plan</span>
//                     </div>
//                     <h2 className="section-title__title title-animation text-white">
//                       Our Pricing Plan
//                     </h2>
//                   </div>
//                   <p className="pricing-two__text-1">
//                     Choose the plan that suits your needs. We offer flexible weekly, monthly, and 3-month options for your convenience.
//                   </p>
//                   <ul className="pricing-two-tab-buttons pricing-two-tab-btns clearfix list-unstyled">
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'weekly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('weekly')}
//                     >
//                       <span>Weekly</span>
//                     </li>
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'monthly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('monthly')}
//                     >
//                       <span>Monthly</span>
//                     </li>
//                     <li 
//                       className={`p-tab-btn ${activeTab === 'yearly' ? 'active-btn' : ''}`}
//                       onClick={() => setActiveTab('yearly')}
//                     >
//                       <span>3 Months</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-8">
//                 <div className="pricing-two__right">
//                   <div className="p-tabs-content">
//                     {loading ? (
//                       <div className="text-center py-5">
//                         <div className="spinner-border text-primary" role="status">
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                       </div>
//                     ) : error ? (
//                       <div className="alert alert-danger" role="alert">
//                         {error}
//                       </div>
//                     ) : (
//                       <>
//                         {/* Weekly Tab */}
//                         <div className={`p-tab ${activeTab === 'weekly' ? 'active-tab' : ''}`} id="weekly">
//                           {pricingPlans.weekly.length > 0 ? (
//                             <div className="pricing-card-slider h-100">
//                               <Slider {...sliderSettings}>
//                                 {pricingPlans.weekly.map(plan => renderPlan(plan))}
//                               </Slider>
//                             </div>
//                           ) : (
//                             <div className="p-4 text-center">No weekly plans available</div>
//                           )}
//                         </div>
                        
//                         {/* Monthly Tab */}
//                         <div className={`p-tab ${activeTab === 'monthly' ? 'active-tab' : ''}`} id="monthly">
//                           {pricingPlans.monthly.length > 0 ? (
//                             <div className="pricing-card-slider h-100">
//                               <Slider {...sliderSettings}>
//                                 {pricingPlans.monthly.map(plan => renderPlan(plan))}
//                               </Slider>
//                             </div>
//                           ) : (
//                             <div className="p-4 text-center">No monthly plans available</div>
//                           )}
//                         </div>
                        
//                         {/* Yearly Tab (3 Months) */}
//                         <div className={`p-tab ${activeTab === 'yearly' ? 'active-tab' : ''}`} id="yearly">
//                           {pricingPlans.yearly.length > 0 ? (
//                             <div className="pricing-card-slider h-100">
//                               <Slider {...sliderSettings}>
//                                 {pricingPlans.yearly.map(plan => renderPlan(plan))}
//                               </Slider>
//                             </div>
//                           ) : (
//                             <div className="p-4 text-center">No 3-month plans available</div>
//                           )}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PricingPlan;


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [pricingPlans, setPricingPlans] = useState({
    weekly: [],
    monthly: [],
    yearly: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Slider settings with autoplay
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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

  // Function to extract features from description HTML
  const extractFeatures = (description) => {
    const features = [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = description;
    
    const paragraphs = tempDiv.querySelectorAll('p');
    paragraphs.forEach(p => {
      if (p.textContent.trim()) {
        features.push(p.textContent.trim());
      }
    });
    
    return features;
  };

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://aurora.sabtrek.com/api/get_plans', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            latitude: 24.762979068238252,
            longitude: 46.727271211164314
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch pricing plans');
        }

        const responseData = await response.json();
        
        if (!responseData.data || !Array.isArray(responseData.data)) {
          throw new Error('Invalid data format received from API');
        }
        
        const plansData = responseData.data;
        
        const organizedPlans = {
          weekly: plansData.filter(plan => plan.duration === 'Weekly').map(plan => ({
            id: plan.id,
            title: plan.name,
            price: plan.amount,
            period: '/week',
            description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
            features: extractFeatures(plan.description),
            image: plan.img
          })),
          monthly: plansData.filter(plan => plan.duration === 'Monthly').map(plan => ({
            id: plan.id,
            title: plan.name,
            price: plan.amount,
            period: '/month',
            description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
            features: extractFeatures(plan.description),
            image: plan.img
          })),
          yearly: plansData.filter(plan => plan.duration === '3 Months').map(plan => ({
            id: plan.id,
            title: plan.name,
            price: plan.amount,
            period: '/3 months',
            description: plan.days + ' days plan, ' + plan.distance + 'km distance covered',
            features: extractFeatures(plan.description),
            image: plan.img
          }))
        };
        
        setPricingPlans(organizedPlans);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching plans:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  // Function to render a plan
  const renderPlan = (plan) => (
    <div key={plan.id} className="px-2 h-100">
      <div className="pricing-two__single d-flex flex-column h-100">
        <div className="pricing-two__title-box">
          <h2 className="pricing-two__title">{plan.title}</h2>
          {plan.image && (
            <div className="pricing-two__image mt-2">
              <img 
                src={`https://aurora.sabtrek.com/public/uploads/${plan.image}`} 
                alt={plan.title} 
                className="img-fluid" 
                style={{ maxHeight: '60px', margin: '0 auto' }}
              />
            </div>
          )}
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
        
        <div className="flex-grow-1 overflow-auto" style={{ minHeight: '150px', maxHeight: '150px' }}>
          <ul className="list-unstyled pricing-two__points mb-0">
            {plan.features && plan.features.map((feature, index) => (
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
        </div>
        
        <div className="pricing-two__btn-box mt-auto pt-3">
          <a href={"#review"} className="thm-btn w-100 text-center">
            Get Started Now
            <span className="icon-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div id="pricing">
      
      
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
                  <p className="pricing-two__text-1">
                    Choose the plan that suits your needs. We offer flexible weekly, monthly, and 3-month options for your convenience.
                  </p>
                  
                  <div className="pricing-tabs-container">
                    <button
                      className={`pricing-tab-btn ${activeTab === 'weekly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('weekly')}
                    >
                      Weekly
                    </button>
                    <button
                      className={`pricing-tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      className={`pricing-tab-btn ${activeTab === 'yearly' ? 'active' : ''}`}
                      onClick={() => setActiveTab('yearly')}
                    >
                      3 Months
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="pricing-two__right">
                  <div className="p-tabs-content">
                    {loading ? (
                      <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : error ? (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    ) : (
                      <>
                        <div className={`p-tab ${activeTab === 'weekly' ? 'active-tab' : ''}`} id="weekly">
                          {pricingPlans.weekly.length > 0 ? (
                            <div className="pricing-card-slider h-100">
                              <Slider {...sliderSettings}>
                                {pricingPlans.weekly.map(plan => renderPlan(plan))}
                              </Slider>
                            </div>
                          ) : (
                            <div className="p-4 text-center">No weekly plans available</div>
                          )}
                        </div>
                        
                        <div className={`p-tab ${activeTab === 'monthly' ? 'active-tab' : ''}`} id="monthly">
                          {pricingPlans.monthly.length > 0 ? (
                            <div className="pricing-card-slider h-100">
                              <Slider {...sliderSettings}>
                                {pricingPlans.monthly.map(plan => renderPlan(plan))}
                              </Slider>
                            </div>
                          ) : (
                            <div className="p-4 text-center">No monthly plans available</div>
                          )}
                        </div>
                        
                        <div className={`p-tab ${activeTab === 'yearly' ? 'active-tab' : ''}`} id="yearly">
                          {pricingPlans.yearly.length > 0 ? (
                            <div className="pricing-card-slider h-100">
                              <Slider {...sliderSettings}>
                                {pricingPlans.yearly.map(plan => renderPlan(plan))}
                              </Slider>
                            </div>
                          ) : (
                            <div className="p-4 text-center">No 3-month plans available</div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlan;