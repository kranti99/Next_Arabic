import Link from 'next/link'
import callToAction from './popup'

function Header() {
    return (<div> 
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
                        <ul>
                            <li><Link href="/"><a title="home">Home</a></Link></li>
                            <li><a href="#" title="title">Loyalty Program</a></li>
                            <li><a href="#" title="title">Partners</a></li>
                            <li><Link href="../../contact_us"><a title="contact us">Contact us</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="header-demo-box">
                    <div class="header-demo"><a class="btn small orange" href="#" title="Request a Demo">Request a
                            Demo</a></div>
                    <div class="header-lang">
                        <ul>
                            <li><a href="#" title="title"><span class="imgicon messagebox"></span><span
                                        class="text">العربيــة</span></a></li>
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
                    <ul>
                        <li><Link href="/"><a title="title">الرئيسية</a></Link></li>
                        <li><a href="#" title="title">نظام الولاء</a></li>
                        <li><a href="#" title="title">شركاؤنا</a></li>
                        <li><Link href="../../faq"><a title="FAQ">الأسئلة الشائعة</a></Link></li>
                        <li><Link href="../../contact_us"><a title="contact">تواصل معنا</a></Link></li>
                    </ul>
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
    </div>
    )
}
export default Header