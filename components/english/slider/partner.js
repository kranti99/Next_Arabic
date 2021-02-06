import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Partner = (props) => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    slidesPerView: 5,
    spacing: 60,
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
            <a title=""><img src="img/goodics.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide2">    
            <a title=""><img src="img/square.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide3">    
            <a title=""><img src="img/marn.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide4">    
            <a title=""><img src="img/ratmpos.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide5">    
            <a title=""><img src="img/revel.png" alt="" /></a>
        </div>
        <div className="keen-slider__slide number-slide3">    
            <a title=""><img src="img/ignite.png" alt="" /></a>
        </div>
        
      </div>
  )
}
export default Partner