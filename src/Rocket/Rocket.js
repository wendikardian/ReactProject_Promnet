import React from 'react'
import rocket from '../assets/rocket.png'

const Rocket = () => {
  return (
    <>
        <section className="more">
            <img src={rocket} alt="" />
            <div className="more-detail">
                <h1> <span className="blue-text"> Let's see </span> how it's <span className="pink"> Going </span></h1>
                <p data-aos="fade-left">“Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.”</p>
                <button>Say Hi !!!</button>
            </div>
        </section>
    </>
  )
}


export default Rocket