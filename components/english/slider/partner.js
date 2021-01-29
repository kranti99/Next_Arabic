import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default (props) => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    slidesPerView: 3,
    spacing: 15,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

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
