
import HeaderMenu from '../components/english/nav-header'
import FooterMenu from '../components/english/nav-footer'

import Link from 'next/link'
import Simplemap from '../components/map'
import Popup from '../components/arabic/popup'

function contact_us() {
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
                    <div class="header-logo"><Link href="/"><a title="Home-Bonat"><img src="img/logo.svg" alt="" /></a></Link></div>
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
                            <li><Link href="/ar/contact_us"><a title="title"><span class="imgicon messagebox"></span><span
                                        class="text">العربيــة</span></a></Link></li>
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
            {/* <!-- CONTACT INFO SECTION STARTS--> */}
                <section class="contact-info-section">
                    <div class="bg-dots"></div>
                    <div class="container">
                        <div class="contact-info-box">
                            <div class="contact-info-title">
                                <div class="title">
                                    <h3>Stay Connected</h3>
                                </div>
                                <div class="description">
                                    <p class="colorange">happy to talk with you</p>
                                </div>
                            </div>
                            <div class="contact-info-item-box">
                                <div class="contact-info-item">
                                    <div class="contact-info-icon"><img src="img/c-loc.svg" alt="" /></div>
                                    <div class="contact-info-text">
                                        <div class="contact-info-item-title">
                                            <h5>Visit Us</h5>
                                        </div>
                                        <div class="contact-info-item-des">
                                            <ul>
                                                <li><span>الرياض, المنطقة الصناعية, شارع الأمير فيصل بن عبد العزيز, عمارة الأمراء,
                                                        الط45ابق</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-info-icon"><img src="img/c-call.svg" alt="" /></div>
                                    <div class="contact-info-text">
                                        <div class="contact-info-item-title">
                                            <h5>Call Us</h5>
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
                                    <div class="contact-info-icon"><img src="img/c-mail.svg" alt="" /></div>
                                    <div class="contact-info-text">
                                        <div class="contact-info-item-title">
                                            <h5>Email US</h5>
                                        </div>
                                        <div class="contact-info-item-des">
                                            <ul>
                                                <li><a href="#" title="title">info@bonat.io</a></li>
                                                <li><a href="#" title="title">sales@bonat.io</a></li>
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
                        <div class="contact-map-form-box">
                            <div class="contact-form-box">
                                <div class="contact-form-title-box">
                                    <div class="title">
                                        <h3>Contact us</h3>
                                    </div>
                                    <div class="description">
                                        <p class="colorange">Ready to ask your questions</p>
                                    </div>
                                </div>
                                <div class="contact-form-item">
                                    <form class="contact-form-holder" action="">
                                        <div class="form-group"><input class="form-control" type="text" placeholder="Full Name"
                                                onfocus="this.placeholder=''" onblur="this.placeholder='Full Name'" /></div>
                                        <div class="form-group"><input class="form-control" type="email" placeholder="Email"
                                                onfocus="this.placeholder=''" onblur="this.placeholder='Email'" /></div>
                                        <div class="form-group col2"><input class="form-control" type="text" placeholder="Mobile No"
                                                onfocus="this.placeholder=''" onblur="this.placeholder='Mobile No'" /></div>
                                        <div class="form-group col2"><textarea class="form-control" rows="7"
                                                placeholder="Message Details" onfocus="this.placeholder=''"
                                                onblur="this.placeholder='Message Details'"></textarea></div>
                                        <div class="form-group col2 btn-holder"><button class="btn orange" type="submit">Send
                                                Now</button></div>
                                    </form>
                                </div>
                            </div>
                            <div class="contact-map-box">
                                <div class="bg-dots-1"></div>
                                <div class="bg-dots-2"></div>
                                <div class="bg-cancel-1"></div>
                                <div class="bg-cancel-2"></div>
                                <div class="map-holder">
                                    <Simplemap />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- CONTACT MAP SECTION ENDS--> */}
            
             {/* <!-- FOOTER SECTION STARTS--> */}
        
    <section class="footer-section">
        <div class="container">
            <div class="footer-box">
                <div class="footer-logo"><Link href="/"><a title="title"><img src="img/logo.svg" alt="" /></a></Link></div>
                <div class="footer-lang">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                    Arabia</span></a></li>
                        <li><a href="/ar/contact_us" title="title"><span class="imgicon messagebox"></span><span
                                    class="text">العربيـــة</span></a></li>
                    </ul>
                </div>
                <div class="footer-menu">
                    <FooterMenu />
                </div>
                <div class="footer-social-icon">
                    <ul>
                        <li><a href="#" title="title"><span class="imgicon instagram"></span></a></li>
                        <li><a href="#" title="title"><span class="imgicon twitter"></span></a></li>
                        <li><a href="#" title="title"><span class="imgicon linkedin"></span></a></li>
                        <li><a href="#" title="title"><span class="imgicon whatsapp"></span></a></li>
                    </ul>
                </div>
                <div class="footer-download">
                    <div class="footer-download-item"><a href="#" title="title">
                            <div class="fdown-icon"><img src="img/apple.svg" alt="" /></div>
                            <div class="fdown-textbox"><span class="text1">حمل التطبيق الان</span><span
                                    class="text2">أبل ستــــور</span></div>
                        </a></div>
                    <div class="footer-download-item"><a href="#" title="title">
                            <div class="fdown-icon"><img src="img/playstore.svg" alt="" /></div>
                            <div class="fdown-textbox"><span class="text1">حمل التطبيق الان</span><span
                                    class="text2">جوجل بلاي</span></div>
                        </a></div>
                </div>
                <div class="copyright-text"><span class="colorange">&copy; Bonat</span> Copyright 2020</div>
            </div>
        </div>
    </section>
          {/* <!-- FOOTER SECTION ENDS--> */}
        </div>
}
export default contact_us