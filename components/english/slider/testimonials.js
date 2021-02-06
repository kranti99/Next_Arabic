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
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>Bonat provided to us a company a valuable service to better understand our target market, 
                          enabling us to improve our customer outreach easily.</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial1.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>EiHĀ Coffee</h6>
                            </div>
                            <div class="test-span"><span></span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide2">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>After using Bonat we learned who is our loyal customer. 
                          I recommend coffee shops owners to get Bonat to better understand your customers and
                           their behaviour which will increase sales.</p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial2.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>Milk Park</h6>
                            </div>
                            <div class="test-span"><span></span></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className="keen-slider__slide number-slide3">
                <div class="testimonial-item">
                    <div class="testimonial-desription">
                        <p>Using Bonat we can understand our customer’s needs.
                           It also helped reaching our customers in a fast and easy way. Thanks Bonat! </p>
                    </div>
                    <div class="testimonial-person">
                        <div class="test-icon"><img src="img/testimonial3.png" alt="" /></div>
                        <div class="test-text-box">
                            <div class="test-title">
                                <h6>Yamm Coffee Roasters</h6>
                            </div>
                            <div class="test-span"><span></span></div>
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
