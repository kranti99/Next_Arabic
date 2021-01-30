import Header from '../components/english/header'
import Footer from '../components/english/footer'
import Accordion from '../components/english/accordion/Accordion'

function contact_us() {
    return <div>
            <Header />
            <section class="whychooseus-section">
                <div class="bg-waves-mobile">
                </div>
                <div class="container">
                    <div class="whychooseus-box">
                        <div class="whychooseus-title-box">
                            <div class="title">
                                <h3>FAQs</h3>
                            </div>
                            <div class="description">
                                <p class="colorange">Most of what was inquired about in Bonat</p>
                            </div>
                        </div>
                        <div class="whychooseus-item-box">
                         {/* <Accordion /> */}

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
}
export default contact_us