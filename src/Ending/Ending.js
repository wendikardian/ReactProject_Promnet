import React from 'react'
import img from '../assets/ending.png'

export default function Ending() {
  return (
    <section id="ending" className="ending">
    <div className="ending-img" data-aos="fade-right">
        <img src={img} alt="" />
    </div>
    <div className="ending-text" data-aos="fade-left">
        <h1>We don't just build <span className="blue-text"> websites </span>, we build websites that <span class="pink"> SELLS</span></h1>
        <hr />
        <p>Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites. Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door</p>
        <button>See Services</button>
    </div>
</section>
  )
}
