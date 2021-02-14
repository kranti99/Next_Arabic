
import HeaderMenu from '../../components/arabic/nav-header'
import FooterMenu from '../../components/arabic/nav-footer'

import Link from 'next/link'
import Simplemap from '../../components/map'
import Popup from '../../components/arabic/popup'
import { useForm } from 'react-hook-form';



const postData = async (data) => {

    try {
        document.querySelector('.successMsg').textContent  = 'Thank you, Bonat will contact you back as soon as possible';
        await fetch('https://development.bonat.io/website/contact-us', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: data
        });
    } catch(e){
        document.querySelector('.successMsg').textContent  = 'Message Could not be sent. Please try again later';
        console.log(e)
    }
}
function contact_us() {
    const {register, handleSubmit} = useForm();

    return <div>

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
                            <li><Link href="/contact_us"><a title="title"><span class="imgicon messagebox"></span><span
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
                        <li><Link href="/contact_us"><a title="title"><span class="imgicon messagebox"></span><span
                                    class="text">English</span></a></Link></li>
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
            {/* <!-- CONTACT INFO SECTION STARTS--> */}
            <section class="contact-info-section">
                <div class="bg-dots"></div>
                <div class="container">
                    <div class="contact-info-box">
                        <div class="contact-info-title">
                            <div class="title">
                                <h3>ابقى على تواصل</h3>
                            </div>
                            <div class="description">
                                <p class="colorange">نسعد بمحادثتك</p>
                            </div>
                        </div>
                        <div class="contact-info-item-box">
                            <div class="contact-info-item">
                                <div class="contact-info-icon"><img src="../img/c-loc.svg" alt="" /></div>
                                <div class="contact-info-text">
                                    <div class="contact-info-item-title">
                                        <h5>عنوان المكتب</h5>
                                    </div>
                                    <div class="contact-info-item-des">
                                        <ul>
                                            <li><span>المعذر الشمالي, شارع التخصصي, مركز تفاصيل التجاري, الطابق الأول, مكتب 16</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="contact-info-icon"><img src="../img/c-call.svg" alt="" /></div>
                                <div class="contact-info-text">
                                    <div class="contact-info-item-title">
                                        <h5>بيانات الاتصال</h5>
                                    </div>
                                    <div class="contact-info-item-des">
                                        <ul>
                                            <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                            <li><a href="#" title="title">+966(5) 587-3407</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="contact-info-icon"><img src="../img/c-mail.svg" alt="" /></div>
                                <div class="contact-info-text">
                                    <div class="contact-info-item-title">
                                        <h5>راسلنا عبر البريد</h5>
                                    </div>
                                    <div class="contact-info-item-des">
                                        <ul>
                                            <li><a href="#" title="title">customercare@bonat.io</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                {/* <!-- CONTACT INFO SECTION ENDS--> */}
                {/* <!-- CONTACT MAP SECTION STARTS--> */}
                <section class="contact-map-form-section">
                    <div class="container">
                        <div class="contact-map-form-box"  style={{direction:"rtl"}}>
                            <div class="contact-form-box">
                                <div class="contact-form-title-box">
                                    <div class="title">
                                        <h3>تواصل معنا</h3>
                                    </div>
                                    <div class="description">
                                        <p class="colorange">فريقنا جاهز للاجابة عن استفساراتكم</p>
                                    </div>
                                    <div class="successMsg"></div>
                                </div>
                                <div class="contact-form-item">
                                    <form class="contact-form-holder" action=""  onSubmit={handleSubmit(postData)}>
                                        <div class="form-group"><input class="form-control" type="text" name="fullname" placeholder="الاسم كاملاً"
                                            ref={register} required/></div>
                                        <div class="form-group"><input class="form-control" type="email" name="email"
                                                placeholder="البريد الالكتروني" ref={register} required/></div>
                                        <div class="form-group col2"><input class="form-control" type="text" name="phone" 
                                                placeholder="رقم الجوال" ref={register} required/></div>
                                        <div class="form-group col2"><textarea class="form-control" rows="7"
                                                placeholder="تفاصيل الرسالة" name="message" ref={register} required></textarea></div>
                                        <div class="form-group col2 btn-holder"><button class="btn orange" type="submit">أرسل
                                                الرسالة</button></div>
                                    </form>
                                </div>
                            </div>
                            <div class="contact-map-box">
                                <div class="bg-dots-1"></div>
                                <div class="bg-dots-2"></div>
                                <div class="bg-cancel-1"></div>
                                <div class="bg-cancel-2"></div>
                                <div class="map-holder"><Simplemap /></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- CONTACT MAP SECTION ENDS--> */}
            
             {/* <!-- FOOTER SECTION STARTS--> */}
        
    <section class="footer-section">
        <div class="container">
            <div class="footer-box">
                <div class="footer-logo"><Link href="/"><a title="title"><img src="../img/logo.svg" alt="" /></a></Link></div>
                <div class="footer-lang">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                    Arabia</span></a></li>
                        <li><Link href="/contact_us"><a title="title"><span class="imgicon messagebox"></span><span
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
}
export default contact_us