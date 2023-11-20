import React, { useEffect } from "react";
import gsap from "gsap";

import "./App.css";

function App() {
  useEffect(() => {
    const delays = ["+=1", "+=2", "+=2", "+=1"];

    const sliders = gsap.utils
      .toArray(".gallery-image")
      .map((el, i) => createSlider(el, delays[i]));

    const sliderWrap = gsap.utils.wrap(sliders);

    sliders.forEach((slider, i) => {
      slider.next = sliderWrap(i + 1);
    });

    sliders[0].play();

    

    function createSlider(element, delay) {
      const slides = [element];
      const slideWrap = gsap.utils.wrap(slides);
      let currentIndex = 0;
      let currentSlide = slides[0];

      return {
        next: null,
        play() {
          const prev = currentSlide;
          currentSlide = slideWrap(++currentIndex);

          gsap
            .timeline({
              onComplete: () => this.next.play(),
            })
            .to(prev, { opacity: 0 })
            .to(currentSlide, { opacity: 1 }, delay);
        },
      };
    }
  }, []);

  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item item1 ">
          <div className="gallery-item">
            <img
              className="gallery-image"
              src="https://www.w3schools.com/html/pic_trulli.jpg"
              alt=""
            />

            {/* <img
              className="gallery-image"
              src="https://www.w3schools.com/html/img_chania.jpg"
              alt=""
            /> */}
          </div>
        </div>
        <div className="grid-item item2">
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://www.w3schools.com/html/img_chania.jpg"
            alt=""
          />
          {/* <img
            className="gallery-image"
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            alt=""
          /> */}
          </div>
        </div>
        <div className="grid-item item3">
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://www.w3schools.com/html/img_girl.jpg"
            alt=""
          />
          {/* <img
            className="gallery-image"
            src="https://www.w3schools.com/html/img_chania.jpg"
            alt=""
          /> */}
          </div>
        </div>
        <div className="grid-item item4">
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            alt=""
          />
          {/* <img
            className="gallery-image"
            src="https://www.w3schools.com/html/img_chania.jpg"
            alt=""
          /> */}
          </div>
        </div>
        <div className="grid-item item5">
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            alt=""
          />

          {/* <img
            className="gallery-image"
            src="https://www.w3schools.com/html/img_chania.jpg"
            alt=""
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
