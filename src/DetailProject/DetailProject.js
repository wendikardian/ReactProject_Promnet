import React, {useEffect} from 'react'
import img1 from '../assets/project-1.png'
import img2 from '../assets/project-2.png'
import img3 from '../assets/project-3.png'
import {Outlet, Link} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailProject() {

  useEffect(() => {
    AOS.init();
  })


  const dataProject = [
    {
      img : img1,
      title : "Illustrations",
      highlight : "App Using React Native",
      desc :   "Using React Native, create a pinterest clone for store an image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit saepe, tempora suscipit delectus temporibus eligendi amet placeat consequuntur nesciunt ducimus, modi dolorem, dicta aliquam ullam possimus fuga. Laborum, reiciendis?"
    }, {
      img : img2,
      title : "Social App Using",
      highlight : "Flutter",
      desc : "Using Flutter U can crate a wonderful APP, u can also create a social media clone like Instagram, Twitter, Facebook, Etc"
    }, {
      img : img3,
      title : "Create a Personal Portfolio",
      highlight : "Using Vue JS",
      desc : "Using React, Laravel, Express.JS, Next.JS, Vue.JS You can create amazing Website.Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business"
    }
  ]
  return (
    <div>
        <h1 className="project-title">See My <span className="pink"> Project</span> <span className="blue-text"> Here</span></h1>

        {
          dataProject.map((item, index) => {
            console.log(index)
              if(index % 2 != 0){
                return (
         
                  <div className="project-container">
                      <img src={item.img} data-aos="fade-right" className="project-img" alt="" />
                      <div className="project-detail" data-aos="fade-left">
                          <h2> <span className="blue-text"> {item.title} </span><span className="pink"> {item.highlight}</span></h2>
                          <p>{item.desc}</p>
                          <Link to={{
                            pathname: '/projectdetail/'+ (index+1) 
                          }} ><button>More Detail</button></Link>
                      </div>
                  </div>
                  
                )
              }else{
                return (
         
                  <div className="project-container">
                      <div className="project-detail" data-aos="fade-left">
                          <h2> <span className="blue-text"> {item.title} </span><span className="pink"> {item.highlight}</span></h2>
                          <p>{item.desc}</p>
                          <Link to={{
                            pathname: '/projectdetail/'+ (index+1) 
                          }} ><button>More Detail</button></Link>
                      </div>
                      <img src={item.img} data-aos="fade-right" className="project-img" alt="" />
                  </div>
                  
                )     

              }
                
        })
      }
    </div>

  )
}
