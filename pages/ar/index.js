import Head from 'next/head'
import Link from 'next/link'

import React, {useState} from 'react'

import HeaderMenu from '../../components/arabic/nav-header'
import FooterMenu from '../../components/arabic/nav-footer'
import Partner from '../../components/arabic/slider/partner'

import Testimonials from '../../components/arabic/slider/testimonials'
import Popup from '../../components/arabic/popup'
import AnimatedTyping from '../../components/arabic/typing.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Home() {
    function changeBackground1(e){
        document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
    }
    function changeBackground2(e){
        document.querySelector('#TextHoverImage').src = '../img/2-sc.jpg';
    }
    function changeBackground3(e){
        document.querySelector('#TextHoverImage').src = '../img/3-sc.jpg';
    }
    function changeBackground4(e){
        document.querySelector('#TextHoverImage').src = '../img/feat-main-item-img.png';
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <div>
      <Head> <title>Bonat Home</title></Head>

    {/* pop up section starts here  */}
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
        </ModalHeader>
        <ModalBody>
          <section class="popup-section" style={{direction:"rtl"}}>
              <div class="popup-section-header">
                  <div class="popup-section-logo">
                      <img src="../img/logo.svg" alt=""/>
                  </div>
              </div>
              <div class="popup-section-box">
                  <div class="popup-section-title">
                      <div class="title">
                          <h3>Get to watch the features in action</h3>
                      </div>
                  </div>
                  <div class="popup-section-formbox">
                      <form class="popup-section-form" action="">
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* Full Name"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* Work Field"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* Mobile No"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* أدخل مجال العمل (في حال اختيار اخرى)"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* Email"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="*POS Type"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* Company"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* How did you know about Bonat"/>
                          </div>
                          <div class="form-group">
                              <input class="form-control pop" type="text" placeholder="* City"/>
                          </div>
                      </form>
                  </div>
                  <div class="popup-section-submit">
                      <button class="btn orange" type="submit">
                          Submit
                      </button>
                      <div class="popup-section-information">
                          <div class="info-text">
                              <span>اذا واجهتك مشكلة, لا تترد في التواصل معنا مباشرة</span>
                          </div>
                          <a class="info-btn" href="#">
                              <img src="../img/whatsapp.svg" alt=""/>
                              <span class="text">تواصل معنا</span>
                          </a>
                      </div>
                  </div>
              </div> 
          </section>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
      {/* pop up section ends here  */}

    {/* <!-- HEADER SECTION STARTS--> */}
    <section class="header-section">
        <div class="container">
            <div class="header-box">
                <div class="header-logo-box">
                    <div class="menu-bar-box">
                        <div class="menu-bar" id="mobilemenutrigger">
                            <span></span><span></span><span></span><span></span></div>
                    </div>
                    <div class="header-logo"><Link href="/ar"><a title="Home-Bonat"><img src="img/logo.svg" alt="" /></a></Link></div>
                </div>
                <div class="header-menu-box">
                    <div class="header-menu">
                        <HeaderMenu />
                    </div>
                </div>
                <div class="header-demo-box">
                    <div class="header-demo">
                        <Popup />
                    </div>

                    <div class="header-lang">
                        <ul>
                            <li><Link href="/"><a title="title"><span class="imgicon messagebox"></span><span
                                        class="text">English</span></a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- HEADER SECTION ENDS--> */}
    {/* <!-- MOBILE MENU SECTION STARTS--> */}
    <section class="mobile-menu-section">
        <div class="mobilemenuclosetrigger overlap"></div>
        <div class="mobile-menu-holder">
            <div class="mobile-menu-close mobilemenuclosetrigger-1"></div>
            <div class="mobile-menu-item">
                <div class="mobile-menu-list">
                   <HeaderMenu />
                </div>
                <div class="mobile-menu-lang">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon messagebox"></span><span
                                    class="text">English</span></a></li>
                    </ul>
                </div>
                <div class="mobile-menu-list">
                    <ul>
                        <li><a href="#" title="title">سياسة الاستخدام</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- MOBILE MENU SECTION ENDS--> */}

    {/* <!-- BANNER TECHNOLOGY GROUP SECTION STARTS--> */}
    <section class="twoholder">
        {/* <!-- BANNER SECTION STARTS--> */}
        <section class="banner-section" id="home">
            <div class="banner-dots"></div>
            <div class="container">
                <div class="banner-box">
                    <div class="banner-text-box">
                        <div class="title-holder">
                            <div class="title">
                                <h1 class="fw900">نظام الولاء الأمثل</h1>
                            </div>
                            <div class="title">
                                <h2 class="fw600">الذي يمكنك من رفع المبيعات</h2>
                            </div>
                        </div>
                        <div class="description">
                            <p class="fw500">من خلال ادوات تعزز <span class="colorange dotunderline"><AnimatedTyping /></span>العملاء</p>
                        </div>
                        <div class="btn-holder"><a class="btn blue fw500 fs-18" title="" onClick={toggle}>ابدأ بتجربتك الان</a>
                        </div>
                    </div>
                    <div class="banner-img"><img src="../img/banner-img.png" alt="" />
                        <div class="banner-object-1"></div>
                        <div class="banner-object-2"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- BANNER SECTION ENDS--> */}

         {/* <!-- TECHNOLOGY PARTNERS SECTION STARTS--> */}
        <section class="technology-partner" id="partner_ar">
            <div class="container">
                <div class="tech-part-box">
                    <div class="tech-part-title" style={{direction:"rtl"}}>
                        <div class="title">
                            <h1 class="fw700">فخورون بثقة شركاؤنا</h1>
                        </div>
                        <div class="description">
                            <p>انظمة سهلة الربط لبرنامج ولاء مؤتمت بالكامل</p>
                        </div>
                    </div>
                    <div class="tech-part-slider-box">
                       <Partner />
                    </div>
                </div>
            </div>
        {/* <!-- TECHNOLOGY PARTNERS SECTION ENDS--> */}
        </section>
    </section>
    {/* <!-- BANNER TECHNOLOGY GROUP SECTION ENDS--> */}
    {/* <!-- WHY CHOOSE US SECTION STARTS--> */}
    <section class="whychooseus-section" id="loyality_programme_ar">
        <div class="waves-bg"></div>
        <div class="bg-circle"></div>
        <div class="bg-small-dot-1"></div>
        <div class="bg-small-dot-2"></div>
        <div class="bg-dots"></div>
        <div class="container">
            <div class="whychooseus-box">
                <div class="whychooseus-title-box">
                    <div class="title">
                        <h3>لماذا بونات؟</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">نظام ذكي قابل للتخصيص ومؤتمت بالكامل</p>
                    </div>
                </div>
                <div class="whychooseus-item-box">
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem1.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>تحليل دقيق لبيانات العملاء</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem2.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>تقارير مفصلة لفهم العائد عن الاستثمار</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem3.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>تقسيم ذكي لشرائح العملاء لفهم سلوك العميل</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem4.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>تحليل دقيق لآراء العملاء الحقيقيين</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem5.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>متجر بونات لشراء القسائم</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem6.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>بناء العلاقات الفعالة مع العملاء عن بالهدايا والرسائل</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem7.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>الطلب المسبق من المتجر</h6>
                            </div>
                        </a></div>
                    <div class="whychooseus-item"><a title="">
                            <div class="whychooseus-item-img"><img src="../img/wcitem8.svg" alt="" /></div>
                            <div class="whychooseus-item-title">
                                <h6>تقديم عروض ترويجية خاصة بالعملاء وفي مناسباتهم الخاصة</h6>
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
                        <h3>اهمية برامج الولاء</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">حافظ على عملائك من التسرب للمنافسين</p>
                    </div>
                </div>
                <div class="loyalty-slider-box">
                    <div class="loyalty-item" data-text="01"> <a href="#" title="">
                            <div class="loyalty-img"><img src="../img/loyaltyimg1.svg" alt="" /></div>
                            <div class="title">
                                <h4>نمو المبيعات</h4>
                            </div>
                            <div class="description">
                                <p>ينفق العملاء المتكررون 20% اكثر من العملاء الجدد</p>
                            </div>
                            <div class="reviewed-by"><span>Harvard Business Review</span></div>
                        </a></div>
                    <div class="loyalty-item" data-text="02"> <a href="#" title="">
                            <div class="loyalty-img"><img src="../img/loyaltyimg2.svg" alt="" /></div>
                            <div class="title">
                                <h4>تخفيض تكلفة الاستحواذ على عملاء جدد</h4>
                            </div>
                            <div class="description">
                                <p>زيادة معدل عودة العميل بنسبة 2% يخفض التكلفة بنسبة %10</p>
                            </div>
                            <div class="reviewed-by"><span>(Bain and co)</span></div>
                        </a></div>
                    <div class="loyalty-item" data-text="03"> <a href="#" title="">
                            <div class="loyalty-img"><img src="../img/loyaltyimg3.svg" alt="" /></div>
                            <div class="title">
                                <h4>زيادة أرباح الشركة</h4>
                            </div>
                            <div class="description">
                                <p>زيادة معدل عودة العميل بنسبة 5% تزيد الأرباح بنسبة 25%-95%</p>
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
            <div class="feature-bg-dots"></div>
            <div class="container">
                <div class="feature-main-box">
                    <div class="feature-main-title-box">
                        <div class="title">
                            <h3 class="colwhite">مميزات نظام ولاء بونات</h3>
                        </div>
                        <div class="description">
                            <p class="colwhite">حلول تقنية ذكية ومتكاملة تساعدك على اتخاذ قرارات تسويقية وادارية مبنية
                                على بيانات حقيقية </p>
                        </div>
                    </div>
                    <div class="feature-main-item-holder">
                        <div class="feature-main-item-img"><img src="../img/feat-main-item-img.png" alt="" id="TextHoverImage"/></div>
                        <div class="feature-main-item-box">
                            <div class="feature-main-item" onMouseOver={changeBackground1}>
                                <div class="title">
                                    <h5>لوحة بيانات سهلة الاستخدام</h5>
                                </div>
                            </div>
                            <div class="feature-main-item" onMouseOver={changeBackground2}>
                                <div class="title">
                                    <h5>تحليل دقيق للبيانات</h5>
                                </div>
                            </div>
                            <div class="feature-main-item" onMouseOver={changeBackground3}>
                                <div class="title">
                                    <h5>تقارير تفصيلية</h5>
                                </div>
                            </div>
                            <div class="feature-main-item" onMouseOver={changeBackground4}>
                                <div class="title">
                                    <h5>أدوات تسويق مؤتمتة</h5>
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
                            <h3>رحلة عميلك مع بونات</h3>
                        </div>
                        <div class="description">
                            <p class="colorange">تسجيل سريع واحتساب نقاط مؤتمت وسهل</p>
                        </div>
                    </div>
                </div>
                <div class="journey-item-box">
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="../img/journeyimg1.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>التسجيــل</h5>
                            </div>
                            <div class="description">
                                <p>بخطوة واحد من خلال تسجيل<br />
                                    قم الهاتف</p>
                            </div>
                        </div>
                    </div>
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="../img/journeyimg2.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>الشــراء</h5>
                            </div>
                            <div class="description">
                                <p>احتساب نقاط مؤتمت بالتزامن مع
                                    صدور الفاتورة</p>
                            </div>
                        </div>
                    </div>
                    <div class="journey-item">
                        <div class="journey-item-img-box"><img src="../img/journeyimg3.svg" alt="" /></div>
                        <div class="journey-title-box">
                            <div class="title">
                                <h5>المكافـــاة</h5>
                            </div>
                            <div class="description">
                                <p>تحصيل سهل من خلال
                                    الجهاز اللوحي</p>
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
                        <h3>على ماذا سيحصل عميلك؟</h3>
                    </div>
                    <div class="description">
                        <p class="colorange">تجربة مميزة ستعزز من ولاء عملائك</p>
                    </div>
                </div>
                <div class="customer-item-holder">
                    <div class="customer-item-box">
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg4.svg" alt="" /></div>
                            <div class="description">
                                <p>مكافات للعملاء المميزين
                                    من اختيارك</p>
                            </div>
                        </div>
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg5.svg" alt="" /></div>
                            <div class="description">
                                <p>امكانية اهداء اصدقائهم
                                    قسائم</p>
                            </div>
                        </div>
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg6.svg" alt="" /></div>
                            <div class="description">
                                <p>الطلب المسبق من
                                    خلال التطبيق</p>
                            </div>
                        </div>
                    </div>
                    <div class="custom-item-img"><img src="../img/custom-item-img.svg" alt="" /></div>
                    <div class="customer-item-box">
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg1.svg" alt="" /></div>
                            <div class="description">
                                <p>تطبيق لمتابعة النقاط
                                    والمكافآت</p>
                            </div>
                        </div>
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg2.svg" alt="" /></div>
                            <div class="description">
                                <p>ارسال الآراء والشكاوى لمدير
                                    الفرع مباشرة</p>
                            </div>
                        </div>
                        <div class="customer-item">
                            <div class="customer-item-img"><img src="../img/customerimg3.svg" alt="" /></div>
                            <div class="description">
                                <p>التواصل مع المتجر بشكل
                                    مباشر</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- CUSTOMERS SECTION ENDS--> */}
    {/* <!-- TESTIMONIAL SECTION STARTS--> */}
    <section class="testimonial-section testimonial-section-ar" style={{direction:"rtl"}}>
        <div class="container">
            <div class="testimonial-section-holder">
                <div class="testimonial-section-title">
                    <div class="testimonial-title-box">
                    <div class="title">
                            <h3 class="colwhite">عملاؤنا نفخر بهم</h3>
                        </div>
                        <div class="description">
                            <p class="colorange">بعد تجربتهم لنظام ولاء بونات</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-section-main" style={{direction:"ltr"}}>
                    <Testimonials />
                </div>
                <div class="testimonial-section-info">
                    <div class="test-info-title-box">
                        <div class="test-info-text-box">
                            <div class="title">
                                <h3>انضم لنا اليوم </h3>
                            </div>
                            <div class="description">
                                <p>اطلب تجربة وانشئ نظام الولاء الخاص بك</p>
                            </div>
                        </div>
                        <div class="btn-holder"><a class="btn orange" title="title" onClick={toggle}>ابدأ هنــا</a></div>
                    </div>
                </div>
                <div class="testimonial-section-img img-holderfeature-main-box"><img
                        src="img/testimonial-section-img.jpg" alt="" /></div>
            </div>
        </div>
    </section>
    {/* <!-- TESTIMONIAL SECTION ENDS--> */}
   
        {/* <!-- FOOTER SECTION STARTS--> */}
        
    <section class="footer-section">
        <div class="container">
            <div class="footer-box">
                <div class="footer-logo"><Link href="/"><a title="title"><img src="img/logo.svg" alt="" /></a></Link></div>
                <div class="footer-lang">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                    Arabia</span></a></li>
                        <li><Link href="/"><a title="title"><span class="imgicon messagebox"></span><span
                                    class="text">English</span></a></Link></li>
                    </ul>
                </div>
                <div class="footer-menu">
                    <FooterMenu />
                </div>
                <div class="footer-social-icon">
                    <ul>
                        <li><a href="https://www.instagram.com/getbonat/?hl=en" target="_blank"><span class="imgicon instagram"></span></a></li>
                        <li><a href="https://twitter.com/getbonat?lang=en" target="_blank"><span class="imgicon twitter"></span></a></li>
                        <li><a href="https://www.linkedin.com/company/getbonat/" target="_blank"><span class="imgicon linkedin"></span></a></li>
                    </ul>
                </div>
                <div class="footer-download">
                    <div class="footer-download-item">
                        <a href="#" title="title">
                            <div class="fdown-icon"><img src="img/apple.svg" alt="" /></div>
                            <div class="fdown-textbox"><span class="text1">Download on the</span><span
                                    class="text2">App Store</span></div>
                            {/* <img src="img/app-store.png" />     */}
                        </a>
                    </div>
                    <div class="footer-download-item">
                        <a href="#" title="title">
                            <div class="fdown-icon"><img src="img/playstore.svg" alt="" /></div>
                            <div class="fdown-textbox"><span class="text1">Android App on</span>
                            <span class="text2">Google Play</span></div>
                        </a>
                    </div>
                </div>
                <div class="copyright-text"><span class="colorange">&copy; Bonat</span> Copyright 2020</div>
            </div>
        </div>
    </section>
          {/* <!-- FOOTER SECTION ENDS--> */}
    </div>
  )
}
