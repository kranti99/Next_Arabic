import HeaderMenu from '../components/english/nav-header'
import FooterMenu from '../components/english/nav-footer'
import Accordion from '../components/english/accordions/accordion'

import Popup from '../components/english/popup'
import Link from 'next/link'


function contact_us() {
    return ( 
        <div>
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
                            <Accordion />
                            <div class="faq-button-box"><Link href="../../contact_us"><a class="btn orange" title="title">Send Message</a></Link></div>
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
        )
}
export default contact_us