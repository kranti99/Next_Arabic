import HeaderMenu from '../../components/arabic/nav-header'
import FooterMenu from '../../components/arabic/nav-footer'

import Popup from '../../components/arabic/popup'
import Link from 'next/link'
import Accordion from '../../components/faq'

import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { useForm } from 'react-hook-form';



const onSubmit = async (data) => {
    try {
        document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';
        await fetch('https://development.bonat.io/website/application', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    } catch(e){
        document.querySelector('.successMsg').textContent  = 'Message Could not be sent. Please try again later';
        console.log(e)
    }
}
function Faq() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const {register, handleSubmit, errors} = useForm();
    

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
                                <input class="form-control pop" type="text" placeholder="الاسم بالكامل *" name="fullname" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="المدينة *" name="city"  ref={register} required/>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="number" placeholder="رقم الجوال *" name="phone" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="business" ref={register} class="form-control pop" required>
                                    <option value="" disabled selected hidden>اسم المنشأة *</option>
                                    <option value="Coffee Shop">مقهى</option>
                                    <option value="Bakery">مخبوزات</option>
                                    <option value="Restaurant">مطعم</option>
                                    <option value="Retail">تجزئة</option>
                                    <option value="Other">أخرى</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="email" placeholder="البريد الالكتروني" name="email" ref={register}/>
                            </div>
                            <div class="form-group">
                                <select name="POS" class="form-control pop" ref={register} required>
                                    <option value="" disabled selected hidden>نوع نظام المحاسبة *</option>
                                    <option value="Foodics">فوديكس</option>
                                    <option value="Odoo">أوودو</option>
                                    <option value="Square">سكوير</option>
                                    <option value="Marn">مرن</option>
                                    <option value="Ratm">رتم</option>
                                    <option value="Omega">أوميغا</option>
                                    <option value="Other">أخرى</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input class="form-control pop" type="text" placeholder="Business Name *" name="company" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <select name="knewus" class="form-control pop" ref={register}>
                                    <option value="" disabled selected hidden>كيف سمعت عن بونات</option>
                                    <option value="Search Engine (Google, Bing…)">محرك بحث (جووجل, بينج..)</option>
                                    <option value="Social Media">التواصل الاجتماعي</option>
                                    <option value="Linked In">لينكد إن</option>
                                    <option value="Another business">من منشأة أخرى</option>
                                    <option value="Other">أخرى</option>
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
                <div class="header-logo-box">
                    <div class="menu-bar-box">
                        <div class="menu-bar" id="mobilemenutrigger">
                            <span></span><span></span><span></span><span></span></div>
                    </div>
                    <div class="header-logo"><Link href="/ar"><a title="Home-Bonat"><img src="../img/logo.svg" alt="" /></a></Link></div>
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
                            <li><Link href="/faq"><a title="title"><span class="imgicon messagebox"></span><span
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
                        <li><Link href="/faq"><a title="title"><span class="imgicon messagebox"></span><span
                                    class="text">English</span></a></Link></li>
                    </ul>
                </div>
                <div class="mobile-menu-list">
                    <ul>
                        <li><a href="#" >سياسة الاستخدام</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- MOBILE MENU SECTION ENDS--> */}
             {/* <!-- FAQ SECTION STARTS--> */}
             <section class="faq-section" style={{direction:"rtl"}}>
                            <div class="bg-circle"></div>
                                <div class="container">
                                    <div class="faq-section-box">
                                        <div class="faq-title-box">
                                            <div class="title">
                                                <h3>الأسئلة الشائعة</h3>
                                            </div>
                                            <div class="description">
                                                <p class="colorange">اكثر ما تم الاستفسار عنه في بونات</p>
                                            </div>
                                        </div>

                                        <div class="faq-main-box">

                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title=" أرسل طلب تجربة من هنا وسيتم التواصل معك بأسرع وقت. كيف أجرب بونات؟">
                                                        <p>أرسل طلب تجربة من هنا وسيتم التواصل معك بأسرع وقت.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder in">
                                                <div class="faq-holder" style={{padding:"0px"}}>
                                                            <Accordion title="كيف اشترك بالخدمة؟">
                                                                <p>بعد طلب التجربة سيتواصل معك أحد ممثلي المبيعات لعرض الخدمة واستكمال إجراءات  التجربة والاشتراك.</p>
                                                            </Accordion>
                                                        
                                                            <Accordion title="ما هي آلية الاشتراك؟">
                                                                <p>الاشتراك بالخدمة برسوم شهرية ولتفاصيل عن المدفوعات الرجاء التواصل معنا <a href="#" onClick={toggle}>هنا</a></p>
                                                            </Accordion>
                                                            <Accordion title="هل يوجد تكاليف اخرى؟">
                                                                <p>هناك تكلفة تدفع لمرة واحدة وتشمل الجهاز اللوحي وقاعدة للجهاز اللوحي والتدريب والتركيب. </p>
                                                            </Accordion>
                                                        
                                                </div>
                                                <div class="quick-contact" style={{marginright:"30px"}}>
                                                    <div class="quick-contact-holder">
                                                        <div class="quick-contact-icon"><img src="../img/quick-contact.svg" alt="" /></div>
                                                        <div class="quick-contact-title">
                                                            <h6>لا تتردد بالتواصل معنا</h6>
                                                        </div>
                                                        <div class="quick-contact-des">
                                                            <p>لأي أسئلة او استفسارات اخرى</p>
                                                        </div>
                                                        <div class="quick-contact-list" style={{direction:"ltr"}}>
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
                                                    <Accordion title="هل يوجد فترة تجربة؟">
                                                        <p>نعم. يوجد شهر تجربة مستردة الرسوم.  </p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="ماهي سياسة الاشتراك لأكثر من فرع؟">
                                                        <p>يمكنك الاشتراك بعدد أفرع لا محدود ولكل فرع يضاف رسوم اضافية.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="هل يوجد رسوم او عمولة على خدمة الطلب المسبق؟">
                                                        <p>الخدمة مجانية ويخصم عمولة البنك فقط</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="هل يوجد رسوم او عمولة على عملية شراء القسائم من متجر بونات؟">
                                                        <p>الخدمة مجانية ويخصم عمولة البنك فقط.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="ما هي آلية المكافأة؟">
                                                        <p>يمكنك التحكم بعدد المكافآت والنقاط لكل صنف من خلال لوحة التحكم الخاصة بك.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                            <div class="faq-div-holder">
                                                <div class="faq-holder">
                                                    <Accordion title="هل يمكن لمستخدمين متعددين استخدام لوحة التحكم؟">
                                                        <p>نعم. يمكنك من خلال لوحة التحكم إضافة مستخدمين متعددين مثل: (مدير فرع, مدير التسويق, المحاسب الخ) وبصلاحيات مختلفة.</p>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="faq-button-box">
                                            <Link href="/ar/contact_us"><a class="btn orange" title="title"> تواصل معنا</a></Link>
                                        </div>
                                    </div>
                                </div>
                           
                        </section>
                {/* <!-- FAQ SECTION ENDS-->                          */}
            

             {/* <!-- FOOTER SECTION STARTS--> */}
        
    <section class="footer-section">
        <div class="container">
            <div class="footer-box">
                <div class="footer-logo"><Link href="/ar"><a title="title"><img src="../img/logo.svg" alt="" /></a></Link></div>
                <div class="footer-lang">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                    Arabia</span></a></li>
                        <li><Link href="/faq"><a title="title"><span class="imgicon messagebox"></span><span
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
                    <div class="footer-download-item"><a href="#" title="title">
                            <div class="fdown-icon"><img src="img/playstore.svg" alt="" /></div>
                            <div class="fdown-textbox"><span class="text1">Android App on</span><span
                                    class="text2">Google Play</span></div>
                        </a></div>
                </div>
                <div class="copyright-text"><span class="colorange">&copy; Bonat</span> Copyright 2020</div>
            </div>
        </div>
    </section>
          {/* <!-- FOOTER SECTION ENDS--> */}

        </div>
        )
}
export default Faq