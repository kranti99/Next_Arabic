import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import React, {useState} from 'react'

import Header from '../components/english/header'
import Footer from '../components/english/footer'
import Partner from '../components/english/slider/partner'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head> <title>Bonat Home</title></Head>
        <Header />

        {/* <!-- BANNER SECTION STARTS--> */}
    <section class="banner-section">
        <div class="container">
            <div class="banner-box">
                <div class="banner-text-box">
                    <div class="title-holder">
                        <div class="title">
                            <h1 class="fw900">The Best Loyalty System</h1>
                        </div>
                        <div class="title">
                            <h2 class="fw600">That will help you drive sales</h2>
                        </div>
                    </div>
                    <div class="description">
                        <p class="fw500">By tools that will enhance customer (
                            <span class="colorange dotunderline">engagement, retention, lifetime value and
                                loyalty</span>
                            ) rate
                        </p>
                    </div>
                    <div class="btn-holder"><a class="btn blue fw500 fs-18" href="#" title="">Try It Now</a></div>
                </div>
                <div class="banner-img"><img src="img/banner-img.png" alt="" />
                    <div class="banner-object-1"></div>
                    <div class="banner-object-2"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- BANNER SECTION ENDS--> */}
    {/* <!-- TECHNOLOGY PARTNERS SECTION STARTS--> */}
    <section class="technology-partner">
        <div class="container">
            <div class="tech-part-box">
                <div class="tech-part-title">
                    <div class="title">
                        <h1 class="fw700">Technology Partners</h1>
                    </div>
                    <div class="description">
                        <p>POS integration for a full automated <br /> loyalty system</p>
                    </div>
                </div> 
                <div class="tech-part-slider-box sliderbox" id="tech-part-slider">
                    <Partner />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- TECHNOLOGY PARTNERS SECTION ENDS--> */}
    {/* <!-- WHY CHOOSE US SECTION STARTS--> */}
    <section class="whychooseus-section">
        <div class="bg-waves-mobile">
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1207.801" height="1377.005" viewBox="0 0 1207.801 1377.005">
                <defs>
                    <linearGradient id="linear-gradient" x1="1.012" y1="-0.195" x2="-0.012" y2="1.195"
                        gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#f5f5f5" stop-opacity="0.07" />
                        <stop offset="1" stop-color="#fff" />
                    </linearGradient>
                </defs>
                <path id="Path_35" data-name="Path 35"
                    d="M1204.8,1734s-149.088,350.86-306.48,142.988c-99.758-131.755-236.653-98.529-313.651,53.47-115.218,227.451-128.329,505.862-304.592,468.614S-3,2487.988-3,2583.513v524.44s76.639,38.761,251.374-160.005c133.235-151.559,214.385,223.114,428.392-21.505,243.641-278.492,528.035,21.505,528.035,21.505Z"
                    transform="translate(3 -1733.999)" fill="url(#linear-gradient)" />
            </svg> */}
        </div>
        <div class="container">
            <div class="whychooseus-box">
                <div class="whychooseus-title-box">
                    <div class="title">
                        <h3>Why Bonat Loyalty System</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">A fully automated, smart and customizable solution</p>
                    </div>
                </div>
                <div class="whychooseus-item-box">
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem1.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>An advanced system that collects real customers visits feedback</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem2.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem3.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem4.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem5.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem6.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem7.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a href="#" title="">
                            <div class="whychooseus-item-img"><img src="img/wcitem8.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>Smart customer segmentation to further understand customers' behavior</h6>
                            </div>
                        </a></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- WHY CHOOSE US SECTION ENDS--> */}
    {/* <!-- LOYALTY SECTION STARTS  --> */}
    <section class="loyalty-section">
        <div class="container">
            <div class="loyalty-box">
                <div class="loyalty-title-box">
                    <div class="title">
                        <h3>Why Loyalty Programs Matter ?</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">Keep your customers from going to the competition</p>
                    </div>
                </div>
                <div class="loyalty-slider-box sliderbox" id="loyalty-slider">
                    <div class="loyalty-slider owl-carousel owl-theme">
                        <div class="loyalty-item" data-text="01"> <a href="#" title="">
                                <div class="loyalty-img"><img src="img/loyaltyimg1.svg" alt="" /></div>
                                <div class="title">
                                    <h4>Grow Sales</h4>
                                </div>
                                <div class="description">
                                    <p>Loyal customers spend 20% more than new customers </p>
                                </div>
                                <div class="reviewed-by"><span>Harvard Business Review</span></div>
                            </a></div>
                        <div class="loyalty-item" data-text="02"> <a href="#" title="">
                                <div class="loyalty-img"><img src="img/loyaltyimg2.svg" alt="" /></div>
                                <div class="title">
                                    <h4>Reduce Cost of Customer Acquisition</h4>
                                </div>
                                <div class="description">
                                    <p>Increasing retention rate by 2% will reduce cost by 10%</p>
                                </div>
                                <div class="reviewed-by"><span>(Bain and co)</span></div>
                            </a></div>
                        <div class="loyalty-item" data-text="03"> <a href="#" title="">
                                <div class="loyalty-img"><img src="img/loyaltyimg3.svg" alt="" /></div>
                                <div class="title">
                                    <h4>Increase Profit</h4>
                                </div>
                                <div class="description">
                                    <p>Improving retention by 2% will increase profit by 25%- 95%</p>
                                </div>
                                <div class="reviewed-by"><span>(Bain and co)</span></div>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- LOYALTY SECTION ENDS--> */}
    {/* <!-- FEATURES SECTION STARTS--> */}
    <section class="feature-section">
        <div class="feature-main-section">
            <div class="feature-main-box">
                <div class="feature-main-title-box">
                    <div class="title">
                        <h3 class="colwhite">Bonat Dashboard Features</h3>
                    </div>
                    <div class="description">
                        <p class="colwhite">Smart solutions to help you make data-driven business decisions</p>
                    </div>
                </div>
                <div class="feature-main-item-box">
                    <div class="feature-main-item">
                        <div class="title">
                            <h5>لوحة تحكم سهلة الاستخدام</h5>
                        </div>
                        <div class="description">
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى</p>
                        </div>
                    </div>
                    <div class="feature-main-item">
                        <div class="title">
                            <h5>تحليل بيانات دقيقة</h5>
                        </div>
                        <div class="description">
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="feature-journey-section">
            <div class="journey-box">
                <div class="journey-text-box">
                    <div class="journey-title-box">
                        <div class="title">
                            <h3>Easy customer journey with Bonat</h3>
                        </div>
                        <div class="description">
                            <p class="colorange">Simple one step regestration and easy earning automated system</p>
                        </div>
                    </div>
                    <div class="btn-holder"><a class="btn orange" href="#" title="">اطلب التجربة</a></div>
                </div>
                <div class="journey-item-box">
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="img/journeyimg1.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>Regestration</h5>
                            </div>
                            <div class="description">
                                <p>in one step, using your mobile <br />number</p>
                            </div>
                        </div>
                    </div>
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="img/journeyimg2.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>Purchase</h5>
                            </div>
                            <div class="description">
                                <p>Automated points calculation in <br />conjunction with bill issuance</p>
                            </div>
                        </div>
                    </div>
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="img/journeyimg3.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>Reward</h5>
                            </div>
                            <div class="description">
                                <p>A simple collect process by <br /> adding redeemed reward code to<br /> the tablet in
                                    front of the cashier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- FEATURES SECTION ENDS--> */}
    {/* <!-- CUSTOMERS SECTION STARTS--> */}
    <section class="customer-section">
        <div class="container">
            <div class="customer-box">
                <div class="customer-title-box">
                    <div class="title">
                        <h3>What's in it to Your Custoemrs?</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">A special experience that will enhance their loyalty</p>
                    </div>
                </div>
                <div class="customer-item-box">
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg1.svg" alt="" /></div>
                        <div class="description">
                            <p>A user-friendly app with gamefication features to monitor their points</p>
                        </div>
                    </div>
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg2.svg" alt="" /></div>
                        <div class="description">
                            <p>Rewards for thier loyalty</p>
                        </div>
                    </div>
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg3.svg" alt="" /></div>
                        <div class="description">
                            <p>Send reviews and complaints to the store manager directly and in privacy after each visit
                            </p>
                        </div>
                    </div>
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg4.svg" alt="" /></div>
                        <div class="description">
                            <p>Gift thier family and friends</p>
                        </div>
                    </div>
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg5.svg" alt="" /></div>
                        <div class="description">
                            <p>Direct communication with the store</p>
                        </div>
                    </div>
                    <div class="customer-item">
                        <div class="customer-item-img"><img src="img/customerimg6.svg" alt="" /></div>
                        <div class="description">
                            <p>Skip the que by ordering from the app to pick up in-store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- CUSTOMERS SECTION ENDS--> */}
    {/* <!-- TESTIMONIAL SECTION STARTS--> */}
    <section class="testimonial-section">
        <div class="container">
            <div class="testimonial-section-title">
                <div class="testimonial-title-box">
                    <div class="title">
                        <h3 class="colwhite">Testimonials</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">Our clients love Bonat and so would you</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-section-main">
                <div class="testimonial-item-slider-box sliderbox" id="testimonial-slider">
                    <div class="testimonial-slider owl-carousel owl-theme">
                        <div class="testimonial-item">
                            <div class="testimonial-desription">
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                    النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                                    زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                            </div>
                            <div class="testimonial-person">
                                <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                                <div class="test-text-box">
                                    <div class="test-title">
                                        <h6>محمد بن خالد الاميري</h6>
                                    </div>
                                    <div class="test-span"><span>Breath Coffee</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-desription">
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                    النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                                    زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                            </div>
                            <div class="testimonial-person">
                                <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                                <div class="test-text-box">
                                    <div class="test-title">
                                        <h6>محمد بن خالد الاميري</h6>
                                    </div>
                                    <div class="test-span"><span>Breath Coffee</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-desription">
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                    النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                                    زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                            </div>
                            <div class="testimonial-person">
                                <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                                <div class="test-text-box">
                                    <div class="test-title">
                                        <h6>محمد بن خالد الاميري</h6>
                                    </div>
                                    <div class="test-span"><span>Breath Coffee</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-desription">
                                <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                    النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                                    زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                            </div>
                            <div class="testimonial-person">
                                <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                                <div class="test-text-box">
                                    <div class="test-title">
                                        <h6>محمد بن خالد الاميري</h6>
                                    </div>
                                    <div class="test-span"><span>Breath Coffee</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-section-info">
                <div class="test-info-title-box">
                    <div class="test-info-text-box">
                        <div class="title">
                            <h3>Join us today</h3>
                        </div>
                        <div class="description">
                            <p>Start winning your customers' loyalty</p>
                        </div>
                    </div>
                    <div class="btn-holder"><a class="btn orange" href="#" title="title">Start Here</a></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- TESTIMONIAL SECTION ENDS--> */}

      <Footer />
    </div>
  )
}
