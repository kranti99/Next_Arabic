import { addBasePath } from 'next/dist/next-server/lib/router/router'
import Header from '../components/english/header'
import Footer from '../components/english/footer'

function contact_us() {
    return <div>
            <Header />
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
                                <div class="map-holder"><span>Insert Iframe Here</span></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- CONTACT MAP SECTION ENDS--> */}
            <Footer />
        </div>
}
export default contact_us