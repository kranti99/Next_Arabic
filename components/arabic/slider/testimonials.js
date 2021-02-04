import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      <div className="navigation-wrapper" style={{direction:"rtl"}}>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                            زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>محمد بن خالد الاميري</h6>
                            </div>
                            <div class="test-span"><span>Breath Coffee</span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide2">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                            زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>محمد بن خالد الاميري</h6>
                            </div>
                            <div class="test-span"><span>Breath Coffee</span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide3">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                            زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>محمد بن خالد الاميري</h6>
                            </div>
                            <div class="test-span"><span>Breath Coffee</span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide4">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                            زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>محمد بن خالد الاميري</h6>
                            </div>
                            <div class="test-span"><span>Breath Coffee</span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide5">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                            زيادة عدد الحروف التى يولدها التطبيق.غوية</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial-img.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>محمد بن خالد الاميري</h6>
                            </div>
                            <div class="test-span"><span>Breath Coffee</span></div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
     
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
