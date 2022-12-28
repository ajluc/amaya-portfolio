import { useEffect } from "react"

const Images = ({images}) => {
  useEffect(() =>{
    const slides = document.querySelectorAll(".slide")
    let max = slides.length - 1
    let current = 0

  // Order the images to start
  slides?.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
  })
  
  // Next/prev slide button functionalities
  const nextSlide = document.querySelector(".next")
  const prevSlide = document.querySelector(".prev");
  nextSlide?.addEventListener("click", function () {
    if (current === max) {
      current = 0
    } else {
      current++
    }
    slides?.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - current)}%)`
    })
  })
  prevSlide?.addEventListener("click", function () {
    if (current === 0) {
      current = max
    } else {
      current--
    }
    slides?.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - current)}%)`
    })
  })
}, [])

return (
  <div>
    {images ? (
    <div className="slider">
        {images.map((image) => (
      <div className="slide">
        <img src={image} alt="" />
      </div>
        ))}
      <button className="btn next"> &#62; </button>
      <button className="btn prev">
      &#60; </button>
    </div>
    ): (<></>)}
  </div>
)
}

export default Images