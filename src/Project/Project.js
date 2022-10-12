import React, {useEffect} from 'react'
import ProjectCard from './ProjectCard.js'
import img1 from '../assets/Mobile Testing_Monochromatic.png'
import img2 from '../assets/Web Developer_Monochromatic.png'
import img3 from '../assets/Artifical inteligence_Monochromatic.png'
import img4 from '../assets/Computer display_Two Color.png'
import img5 from '../assets/Data Arranging_Monochromatic.png'
import img6 from '../assets/Group Video Call_Monochromatic.png'
import img7 from '../assets/Teacher_Monochromatic.png'
import img8 from '../assets/Designer _Monochromatic.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project() {
  useEffect(() => {
    var itemVideo = document.querySelectorAll('.service-item');
    itemVideo.forEach((video, index) => {
        video.dataset.aos = 'fade-down';
        video.dataset.aosDuration = 1500;
        video.dataset.aosDelay = index*300;
    })
    AOS.init(); 
    }, [])
  const projectData = [
    {
      img : img1,
      title: "App Mobile",
      desc: "Using React Native you can create a wonderful Apps. Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe"
    }, {
      img : img2,
      title: "Web Developer",
      desc : "Using React, Laravel, Express.JS, Next.JS, Vue.JS You can create amazing Website.Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business"
    }, {
      img : img3,
      title : "AI Development",
      desc : "Using Python You can create a smart system. Python, like many good technologies, soon spreads virally throughout your development team and finds its way into all sorts of applications and tools" 
    }, {
      img : img4,
      title : "Cyber Security",
      desc : "Data is the pollution problem of the information age, and protecting privacy is the environmental challenge. As a matter of fact, yeah, they were foolproof. The problem is that you don't have to protect yourself against fools. You have to protect yourself against people like me."
    }, {
      img : img5,
      title: "Big Data",
      desc : "Hiding within those mounds of data is knowledge that could change the life of a patient, or change the world. Information is the oil of the 21st century, and analytics is the combustion engine ."
    }, {
      img : img6,
      title: "Video Editing",
      desc : "Video editing is a form of art where the editors assemble several video shots to create a whole new piece of work. Video editing is indeed one of the coolest occupations out there. But mind you, it's no piece of cake."
    }, {
      img : img7,
      title: "Curriculum Developer",
      desc : "Better than a thousand days of diligent study is one day with a great teacherYour heart is slightly larger than the average human heart, but that's because you're a teacher."
    }, {
      img : img8,
      title: "Design Graphic",
      desc : "The alternative to good design is always bad design. There is no such thing as no design. Good designs not about what medium youre working in. Its about thinking hard about what you want to do and what you have to work with before you start"
    }
  ]
  return (
    <>
        <div class="title-all">
            <h1 class="title-section" data-aos="fade-right">My <span class="pink"> Core</span> Services</h1>
        </div>
        <section class="services" id="services">
          {
            projectData.map((item) => {
              return(
                <>
                <ProjectCard  img={item.img} title={item.title} desc={item.desc} />
                </>
              )
            })

          }
                    
        </section>
        
    </>
  )
}
