import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header/Header';
import Jumbotron from './jumbotron/Jumbotron.js';
import Project from './Project/Project.js'
import Rocket from './Rocket/Rocket';
import Footer from './Footer/Footer';
import Ending from './Ending/Ending';
import Carousel from './Carousel/Carousel'
import DetailProject from './DetailProject/DetailProject.js';
import Form from './Form/Form';
import About from './About/About';


const Home = () => {
  return(
    <>
    <Header />
      <Jumbotron />
      <Carousel />
      <Rocket />
      <Project />
      <Ending />
      <Footer />
    </>
  )
}

const ProjectPages = () => {
  return(
    <>
  <Header />
    <DetailProject />
  <Footer />
    </>

  )
}


const Contact = () => {
  return(
    <>
      <Header />
      <Form />
      <Footer/>
    </>
  )
}

const AboutPage = () => {
  return(
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='project' element={<ProjectPages/> }/> 
        <Route path='contact' element={<Contact/> }/> 
        <Route path='about' element={<AboutPage/> }/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
