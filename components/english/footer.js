import Link from 'next/link'

function Footer() {
    return (
        <footer>
        {/* <!-- FOOTER SECTION STARTS--> */}
          <section class="footer-section">
              <div class="container">
                  <div class="footer-box">
                      <div class="footer-logo"><a href="#" title="title"><img src="img/logo.svg" alt="" /></a></div>
                      <div class="footer-lang">
                          <ul>
                              <li><a href="#" title="title"><span class="imgicon send"></span><span class="text">Saudi
                                          Arabia</span></a></li>
                              <li><a href="#" title="title"><span class="imgicon messagebox"></span><span
                                          class="text">العربيـــة</span></a></li>
                          </ul>
                      </div>
                      <div class="footer-menu">
                          <ul>
                              <li><Link href="/"><a>Home</a></Link></li>
                              <li><a href="#" title="title">Loyalty Program</a></li>
                              <li><a href="#" title="title">Partners</a></li>
                              <li><Link href="../../faq"><a>FAQ's</a></Link></li>
                              <li><Link href="../../contact_us"><a>Contact Us</a></Link></li>
                          </ul>
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
                      <div class="copyright-text"><span class="colorange">&copy Bonat</span> Copyright 2020</div>
                  </div>
              </div>
          </section>
          {/* <!-- FOOTER SECTION ENDS--> */}
      </footer>
    )
}
export default Footer