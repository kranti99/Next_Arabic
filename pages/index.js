import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import React, {useState} from 'react'

import Header from '../components/english/header'
import Footer from '../components/english/footer'
import Partner from '../components/english/slider/partner'
import Testimonials from '../components/english/slider/testimonials'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head> <title>Bonat Home</title></Head>
        <Header />

        {/* <!-- BANNER TECHNOLOGY GROUP SECTION STARTS--> */}
    <section class="twoholder">
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
                            <p class="fw500">By tools that will enhance customer <br /> (
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
                    <div class="tech-part-slider-box">
                    <Partner />
                    
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- TECHNOLOGY PARTNERS SECTION ENDS--> */}
    </section>
    {/* <!-- BANNER TECHNOLOGY GROUP SECTION ENDS--> */}
    {/* <!-- WHY CHOOSE US SECTION STARTS--> */}
    <section class="whychooseus-section">
        <div class="waves-bg"></div>
        <div class="bg-circle"></div>
        <div class="bg-small-dot-1"></div>
        <div class="bg-small-dot-2"></div>
        <div class="bg-dots"></div>
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
            <div class="loyalty-box sliderbox">
                <div class="loyalty-title-box">
                    <div class="title">
                        <h3>Why Loyalty Programs Matter ?</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">Keep your customers from going to the competition</p>
                    </div>
                </div>
                <div class="loyalty-slider-box">
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
    </section>
    {/* <!-- LOYALTY SECTION ENDS--> */}
    {/* <!-- FEATURES SECTION STARTS--> */}
    <section class="feature-section">
        <div class="feature-main-section">
            <div class="container">
                <div class="feature-main-box">
                    <div class="feature-main-title-box">
                        <div class="title">
                            <h3 class="colwhite">Bonat Dashboard Features</h3>
                        </div>
                        <div class="description">
                            <p class="colwhite">Smart solutions to help you make data-driven business decisions</p>
                        </div>
                    </div>
                    <div class="feature-main-item-holder">
                        <div class="feature-main-item-img"><img src="img/feat-main-item-img.png" alt="" /></div>
                        <div class="feature-main-item-box">
                            <div class="feature-main-item">
                                <div class="title">
                                    <h5>لوحة تحكم سهلة الاستخدام</h5>
                                </div>
                                <div class="description">
                                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                        النص العربى</p>
                                </div>
                            </div>
                            <div class="feature-main-item">
                                <div class="title">
                                    <h5>تحليل بيانات دقيقة</h5>
                                </div>
                                <div class="description">
                                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                        النص العربى</p>
                                </div>
                            </div>
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
        <div class="bg-dots"></div>
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
                <div class="customer-item-holder">
                    <div class="customer-item-box">
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
                    <div class="custom-item-img"><img src="img/custom-item-img.svg" alt="" /></div>
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
                                <p>Send reviews and complaints to the store manager directly and in privacy after each
                                    visit</p>
                            </div>
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
            <div class="testimonial-section-holder">
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
                    <Testimonials />
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
                <div class="testimonial-section-img img-holderfeature-main-box"><img
                        src="img/testimonial-section-img.jpg" alt="" /></div>
            </div>
        </div>
    </section>
    {/* <!-- TESTIMONIAL SECTION ENDS--> */}

      <Footer />
    </div>
  )
}
