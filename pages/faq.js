import Header from '../components/english/header'
import Footer from '../components/english/footer'
import Accordion from '../components/english/accordions/accordion'

function contact_us() {
    return ( 
        <div>
            <Header />
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
                                        <div class="faq-item">
                                            <div class="faq-title">
                                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </h6>
                                            </div>
                                            <div class="faq-description">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                    no sea takimata sanctus est Lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-div-holder in">
                                    <div class="faq-holder">
                                        <div class="faq-item">
                                            <div class="faq-title">
                                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </h6>
                                            </div>
                                            <div class="faq-description">
                                                <p>Please Fill The Text</p>
                                            </div>
                                        </div>
                                        <div class="faq-item">
                                            <div class="faq-title">
                                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </h6>
                                            </div>
                                            <div class="faq-description">
                                                <p>Please Fill The Text</p>
                                            </div>
                                        </div>
                                        <div class="faq-item">
                                            <div class="faq-title">
                                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </h6>
                                            </div>
                                            <div class="faq-description">
                                                <p>Please Fill The Text</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="quick-contact">
                                        <div class="quick-contact-holder">
                                            <div class="quick-contact-icon"><img src="img/quick-contact.svg" alt="" /></div>
                                            <div class="quick-contact-title">
                                                <h6>Call Us anytime</h6>
                                            </div>
                                            <div class="quick-contact-des">
                                                <p>نحن متاحين للإجابة على كل <br />استفساراتك و اسئلتك</p>
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
                                        <div class="faq-item">
                                            <div class="faq-title">
                                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </h6>
                                            </div>
                                            <div class="faq-description">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                    no sea takimata sanctus est Lorem</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-button-box"><a class="btn orange" href="#" title="title">Send Message</a></div>
                        </div>
                    </div>
            </section>
    {/* <!-- FAQ SECTION ENDS-->                          */}
    <Accordion />

            <Footer />
        </div>
        )
}
export default contact_us