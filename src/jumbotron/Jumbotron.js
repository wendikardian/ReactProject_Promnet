import React from 'react'
import logoJum from '../assets/jumbotron1.png'

const Jumbotron = () => {
  return (
    <>
        <div className="just-blue" id="jumbotron"></div>
        <section className="jumbotron" >
            <div className="text-jumbotron">
                <h1>Discover <u className="blue-text">Wendi</u></h1>
                <p data-aos="fade-up">Hello There Wanna See Who I am, u can scroll it below. I'm a Collage Student from Universitas Pendidikan Indonesia Majoring in <span className="pink"> Computer Science Education</span> and also im a teacher and curriculum developer</p> 
                <button>Click Here!</button>
            </div>
            <div className="banner">
                <img src={logoJum} alt="" />
            </div>
        </section>
        {/* <div className="title-all">
            <h1 className="title-section" data-aos="fade-right">Discover <span className="pink"> Here </span></h1>
        </div> */}

    </>
  )
}


export default Jumbotron
