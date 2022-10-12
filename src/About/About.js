import React, {useEffect} from 'react'
import img1 from '../assets/24hour.png'
import img2 from '../assets/costumer.png'
import img3 from '../assets/img-about.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 1000,
            debug: true,
            showProgressBar: true,
            useTransition: true,
            useTransitionDuration: true,

        })
    })
  return (
    <div>
        <section className="about-container">
            <h1>Hello There my name is <span className="pink"> Wendi Kardian </span></h1>
            <img src={img3} className="about-img" alt="" />
        </section>
         <div className="project-container">
            <img src={img1} data-aos="fade-right" className="project-img" alt="" />
            <div className="project-detail" data-aos="fade-left">
                <h2>Open for <span className="pink"> 24 Hours </span></h2>
                <p>Open for 24 Hours Whenever you need it, my contact is always on ... Our Costumer Happiness is number one </p>
                <h5 className="mark-up">I'm doing the best I can</h5>
                <h5 className="mark-up blue-side">Keep Going On</h5>
                <h5 className="mark-up green-side">Costumer in No.1</h5>
            </div>
        </div>
        <div className="costumer-about" data-aos="fade-up">

            <img src={img2} alt="" />
            <h1> <span className="blue-text"> Costumer </span> is  <span className="pink"> No.1  </span></h1>
            <p>We don't want to push our ideas on to customers, we simply want to make what they want. I believe in the power of recognition and empowerment leading to great employee engagement</p>
        </div>
        <div className="costumer-about" data-aos="fade-up" >

            <h1> <span className="blue-text"> Visit </span> our <span className="pink"> Place  </span></h1>


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
    </div>
  )
}
