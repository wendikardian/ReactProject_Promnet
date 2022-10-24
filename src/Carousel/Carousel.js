import React, { useEffect, useState } from "react";
import img1 from "../assets/game-development.jpg"
import img2 from "../assets/web-development.jpg"
import img3 from "../assets/web-design.jpg"
import img4 from "../assets/kids-programming.jpg"
import img5 from "../assets/apps.jpg"


const Carousel = () => {
  const [imageState, setImageState] = useState(1);
  useEffect(() => {
    var slides = document.querySelectorAll(".slide");
    slides[0].classList.add('active')
    var buttons = document.querySelectorAll(".slider-btn");
    let currentSlide = 1;

    var manualNav = function (manual) {
      slides.forEach(function (slide) {
        slide.classList.remove("active");
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
      });
      slides[manual].classList.add("active");
      buttons[manual].classList.add("active");
    };

    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        manualNav(i);
        currentSlide = i;
      });
    });

    var repeat = function (activeClass) {
      let active = document.getElementsByClassName("active");
      var repeater = function () {
        setTimeout(function () {
          [...active].forEach(function (activeSlide) {
            activeSlide.classList.remove("active");
          });

          slides[imageState].classList.add("active");
          buttons[imageState].classList.add("active");
          setImageState(imageState+= 1)
          if (slides.length == imageState) {
            imageState = 0;
          }
          if (imageState >= slides.length) {
            return;
          }
          repeater();
        }, 5000);
      };
      repeater();
    };
    repeat()
  }, []);


  const carouselData = [
    {
        img  : img1,
        title: "Game Development",
        desc : " Instead of Playing game all day long, why not create your own ?"
    }, 
    {
        img  : img2,
        title: "Web Development",
        desc : "Every Company need website. Take advantage of that opportunity!"
    }, {
        img  : img3,
        title: "Web Design",
        desc : "Web Design is a tool for developers to create websites that can be used in"
    }, {
        img  : img4,
        title: "Kids Programming",
        desc : "Better know earlier with a fun way of arranging blocks"
    }, {
        img  : img5,
        title: "Apps",
        desc : "Mobile apps are very popular and most needed in this world"
    }
  ]
  return (
    <div>
     
      <section id="slider" className="section-slider">
        <div className="image-slider">
            {
                carouselData.map(data => {
                    return(
                        <div className="slide">
                            <img src={data.img} alt="" />
                            <div className="slide-text">
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )
                }
                )
            }

          <div className="navigation">
            <div className="slider-btn active"></div>
            <div className="slider-btn"></div>
            <div className="slider-btn"></div>
            <div className="slider-btn"></div>
            <div className="slider-btn"></div>
          </div>
        </div>

      </section>
    </div>
    
  );
};

export default Carousel;
