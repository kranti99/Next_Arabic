import HeaderMenu from '../components/english/nav-header'
import FooterMenu from '../components/english/nav-footer'

import Popup from '../components/english/popup'
import Link from 'next/link'


function FourOFour() {
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
    {/* <!-- 404 SECTION STARTS--> */}
    <section class="error-404-section">
        <div class="container">
            <div class="error-box">
                <div class="error-text-box">
                    <div class="title-holder">
                        <h1>404</h1>
                        <h6>Error</h6>
                    </div>
                    <div class="description">
                        <p>This page is outside of the Universe<br />
                            The page you are trying to access does not exist or has been moved.</p>
                    </div>
                    <div class="btn-holder"><a class="btn orange" href="/" title="title">Go To Homepage</a></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- 404 SECTION ENDS-->               */} */}
            

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
export default FourOFour