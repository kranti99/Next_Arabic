import HeaderMenu from '../components/english/nav-header'
import FooterMenu from '../components/english/nav-footer'

import Popup from '../components/english/popup'
import Link from 'next/link'
import Accordion from '../components/faq'
import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { useForm } from 'react-hook-form';
import axios from 'axios';

function contact_us() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const {register, handleSubmit, errors} = useForm();
    const onSubmit =  (data)  => {
        document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';
        axios
        .post('https://webhook.site/fe14a0bc-06af-4ff0-80a8-454498d2c69a', JSON.stringify(data))
        .then(response => {
        })
        .catch(error=> {
        })
    }

    return ( 
        <div>
            
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
                      <div class="successMsg"></div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                          <div class="popup-section-form">
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="الاسم بالكامل *" name="full_name" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="المدينة *" name="city"  ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="number" placeholder="رقم الجوال *" name="mobile_nu" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="business_type" ref={register} class="form-control pop" required>
                                    <option value="" disabled selected hidden>اسم المنشأة *</option>
                                    <option value="Coffee Shop">Coffee Shop</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="email" placeholder="البريد الالكتروني" name="email" ref={register}/>
                            </div>
                            <div class="form-group">
                                <select name="pos_type" class="form-control pop" ref={register} required>
                                    <option value="" disabled selected hidden>نوع نظام المحاسبة *</option>
                                    <option value="Foodics">Foodics</option>
                                    <option value="Odoo">Odoo</option>
                                    <option value="Square">Square</option>
                                    <option value="Marn">Marn</option>
                                    <option value="Ratm">Ratm</option>
                                    <option value="Omega">Omega</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="Business Name *" name="business_name" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="know_how" class="form-control pop" ref={register}>
                                    <option value="" disabled selected hidden>كيف سمعت عن بونات</option>
                                    <option value="Search Engine (Google, Bing…)">Search Engine (Google, Bing…)</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Linked In">Linked In</option>
                                    <option value="Another business">Another business</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                            <div class="popup-section-submit">
                                <button class="btn orange" type="submit">
                                ارسال   
                                </button>
                                <div class="popup-section-information">
                                    <div class="info-text">
                                        <span>لا تتردد في التواصل معنا اذا كانت لديك أي اسئلة</span>
                                    </div>
                                    <a class="info-btn" href="#">
                                        <img src="img/whatsapp.svg" alt=""/>
                                        <span class="text">تواصل معنا</span>
                                    </a>
                                </div>
                            </div>
                        
                      </form>
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
                            <div class="header-demo-box">
                                <div class="header-lang">
                                    <ul>
                                        <li><Link href="/ar/faq"><a title="title"><span class="imgicon messagebox"></span><span
                                                    class="text">العربيــة</span></a></Link></li>
                                    </ul>
                                </div>
                                <div class="header-demo">
                                    <Popup />
                                </div>
                            </div>
                            <div class="header-menu-box">
                                <div class="header-menu">
                                    <HeaderMenu />
                                </div>
                            </div>
                            
                            <div class="header-logo-box">
                                <div class="header-logo"><Link href="/"><a title="Home-Bonat"><img src="/img/logo.svg" alt="" /></a></Link></div>
                                <div class="menu-bar-box">
                                    <div class="menu-bar" id="mobilemenutrigger">
                                        <span></span><span></span><span></span><span></span></div>
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
                                    <li><a href="/ar/faq" title="FAQ">سياسة الاستخدام</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- MOBILE MENU SECTION ENDS--> */}
                        {/* <!-- FAQ SECTION STARTS--> */}
                        <section class="faq-section">
                            <div class="bg-circle"></div>
                                <div class="container">
                                    <div class="faq-section-box">
                                        <div class="faq-title-box">
                                            <div class="title">
                                                <h3>FAQs</h3>
                                            </div>
                                            <div class="description">
                                                <p class="colorange">Most of what was inquired about in Bonat</p>
                                            </div>
                                        </div>

                                        <div class="faq-main-box">

                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="How can I try Bonat?">
                                                        <p>You can request a demo from <a href="#">here</a> and our team will reach out to you.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder in">
                                                <div class="faq-holder">
                                                            <Accordion title="How can I subscribe to Bonat?">
                                                                <p>Request a demo from <a href="#">here </a>and our team will contact you to complete the subscription process.</p>
                                                            </Accordion>
                                                        
                                                            <Accordion title="How is Bonat Priced?">
                                                                <p>Bonat subscription is a fixed monthly fee, for payment information please contact us <a href="#">here.</a></p>
                                                            </Accordion>
                                                            <Accordion title="Are there other expenses?">
                                                                <p>There is a onetime payment which includes tablet, stand, charger, establishment, and training. </p>
                                                            </Accordion>
                                                        
                                                </div>
                                                <div class="quick-contact" style={{marginright:"30px"}}>
                                                    <div class="quick-contact-holder">
                                                        <div class="quick-contact-icon"><img src="../img/quick-contact.svg" alt="" /></div>
                                                        <div class="quick-contact-title">
                                                            <h6>Call Us anytime</h6>
                                                        </div>
                                                        <div class="quick-contact-des">
                                                            <p>For any additional inquiries</p>
                                                        </div>
                                                        <div class="quick-contact-list">
                                                            <ul>
                                                                <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                                                <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="Is there a trial period?">
                                                        <p>Yes, there is a free 1-month fully refunded trial. </p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="How can I subscribe for multiple branches?">
                                                        <p>You can subscribe for as many branches as you have with an additional subscription and establishment fees.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="Is there a cost or fee for the pickup service?">
                                                        <p>Pickup service is free. Only bank commission is deducted from order.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="Is there a cost or fee on coupon purchases in the Bonat store?">
                                                        <p>Bonat store is free. Only bank commission is deducted from purchases.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="How can I set up the rewards?">
                                                        <p>You will have your own dashboard which will grant you full control to customize your reward menu.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="Can I have multiple users in a subscription? ">
                                                        <p>Yes. Through the dashboard you will be able to create different roles (e.g. marketing manager, branch manager, accountant etc.) with different permissions and access to sections in the dashboard.  You can assign different users to the role.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="faq-button-box">
                                            <Link href="/contact_us"><a class="btn orange" title="title">Contact Us</a></Link>
                                        </div>
                                    </div>
                                </div>
                           
                        </section>
                {/* <!-- FAQ SECTION ENDS-->                          */}
                        

                        {/* <!-- FOOTER SECTION STARTS--> */}
                    
                <section class="footer-section">
                    <div class="container">
                        <div class="footer-box">
                            <div class="footer-logo"><Link href="/"><a title="title"><img src="img/logo.svg" alt="" /></a></Link></div>
                            <div class="footer-lang">
                                <ul>
                                    <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                                Arabia</span></a></li>
                                    <li><Link href="/ar/faq"><a title="title"><span class="imgicon messagebox"></span><span
                                                class="text">العربيـــة</span></a></Link></li>
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
export default contact_us