import Link from 'next/link'

function Header() {
    return (<div> 
{/* <!-- HEADER SECTION STARTS--> */}
    <section class="header-section">
        <div class="container">
            <div class="header-box">
                <div class="header-logo-box">
                    <div class="menu-bar-box">
                        <div class="menu-bar" id="mobilemenutrigger">
                            <span></span><span></span><span></span><span></span>
                        </div>
                        <ul className="menu">          
                            <li><Link href="../../contact_us"><a>Contact Us</a></Link></li>
                            <li>Partners</li>
                            <li>Loyalty Program</li>
                            <li><Link href="/"><a>Home</a></Link></li>  
                        </ul>
                    </div>
                    <div class="header-logo"><a href="/" title="Home-Bonat"><img src="img/logo.svg" alt="" /></a></div>
                </div>
                <div class="header-menu-box"></div>
                <div class="header-demo-box">
                    <div class="header-demo"><a class="btn small orange" href="#" title="Request a Demo">Request a
                            Demo</a></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- HEADER SECTION ENDS--> */}
    {/* <!-- MOBILE MENU SECTION STARTS--> */}
    <section class="mobile-menu-section">
        <div class="mobilemenuclosetrigger overlap"></div>
        <div class="mobile-menu-holder">
            <div class="mobile-menu-close mobilemenuclosetrigger"></div>
            <div class="mobile-menu-item">
                <div class="mobile-menu-list">
                    <ul>
                        <li><a href="#" title="title">الرئيسية</a></li>
                        <li><a href="#" title="title">نظام الولاء</a></li>
                        <li><a href="#" title="title">شركاؤنا</a></li>
                        <li><a href="#" title="title">الأسئلة الشائعة</a></li>
                        <li><a href="#" title="title">تواصل معنا</a></li>
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