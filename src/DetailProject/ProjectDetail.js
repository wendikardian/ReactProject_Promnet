import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import img1 from '../assets/project-1.png'
import img2 from '../assets/project-2.png'
import img3 from '../assets/project-3.png'
import AOS from "aos";
import "aos/dist/aos.css";



export default function ProjectDetail() {
    useEffect(() => {
        AOS.init();
      })
    const { data } = useParams();
    const dataProject = [
        {
            id: 1,
          img : img1,
          title : "Illustrations",
          highlight : "App Using React Native",
          desc :   "Using React Native, create a pinterest clone for store an image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit saepe, tempora suscipit delectus temporibus eligendi amet placeat consequuntur nesciunt ducimus, modi dolorem, dicta aliquam ullam possimus fuga. Laborum, reiciendis? React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the companys biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems."
        }, {
            id: 2,
          img : img2,
          title : "Social App Using",
          highlight : "Flutter",
          desc : "Using Flutter U can crate a wonderful APP, u can also create a social media clone like Instagram, Twitter, Facebook, Etc, Flutter is Google’s portable UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source. For developers, Flutter lowers the bar to entry for building apps. It speeds app development and reduces the cost and complexity of app production across platforms. For engineering managers and businesses, Flutter allows the unification of app developers into a single mobile, web, and desktop app team, building branded apps for multiple platforms out of a single codebase. Flutter speeds feature development and synchronizes release schedules across the entire customer "
        }, {
            id: 3,
          img : img3,
          title : "Create a Personal Portfolio",
          highlight : "Using Vue JS",
          desc : "Using React, Laravel, Express.JS, Next.JS, Vue.JS You can create amazing Website.Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business. Vue. js (or simply Vue) is a lightweight, JavaScript framework for building reactive web user interfaces. Vue extends standard HTML and CSS to create a suite of powerful tools for building the front end of interactive web applications, Vue. js combined the top-level features of React and Angular, but its main feature is the perfect user experience. Also, it leveraged the capacity of the virtual DOM and optimized the code structure"
        }
      ]
    const projectDetail =  dataProject.filter(project => project.id == data)
    console.log(projectDetail)
    
    
   
  return (
    <div>

        <h1 className="project-title"><span className="pink"> {projectDetail[0].title}</span><span className="blue-text"> {projectDetail[0].highlight}</span></h1>
        <br></br>
        <br></br>
        <div className="detail-page" data-aos="fade-left">
                          
                      <img src={projectDetail[0].img} data-aos="fade-right" className="project-img" alt="" />
                          <p>{projectDetail[0].desc}</p>
                         
                      </div>
        <br></br>
        <br></br>
    </div>
  )
}
