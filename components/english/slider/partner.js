import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default (props) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: "free",
    spacing: 15,
    loop: true,
  })

  return (
    <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">    
            <a href="#" title=""><img src="img/googlelogo.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide2">    
            <a href="#" title=""><img src="img/microsoftlogo.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide3">    
            <a href="#" title=""><img src="img/facebooklogo.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide4">    
            <a href="#" title=""><img src="img/amazonlogo.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide5">    
            <a href="#" title=""><img src="img/slacklogo.png" alt="" /></a>
        </div>
      </div>
  )
}
