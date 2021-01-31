import Header from '../components/english/header'
import Footer from '../components/english/footer'
import Accordion from '../components/english/accordions/accordion'
import Link from 'next/link'


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
                            <Accordion />
                            <div class="faq-button-box"><Link href="../../contact_us"><a class="btn orange" title="title">Send Message</a></Link></div>
                        </div>
                    </div>
            </section>
    {/* <!-- FAQ SECTION ENDS-->                          */}
            <Footer />
        </div>
        )
}
export default contact_us