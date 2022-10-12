import React, {useEffect} from 'react'
import imgHeader from '../assets/form-img.png'
import img1 from '../assets/Artifical inteligence_Monochromatic.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faMessage, faPhone ,faPerson } from '@fortawesome/free-solid-svg-icons'

export default function Form() {
    useEffect(() => {
        AOS.init()
    });
        return (
    
    <div className='contact-container'>
        <div class="ilustration" data-aos="fade-left">
                <img src={imgHeader} width="400px" alt="" class="illustration-img" />
        </div>
        <div>
            
        <div className="form"> 
        <img src={img1} alt="" class="profile-contact-img" />
                <h1>Contact Me</h1>
                <p>Please feel free to contact me</p>
                <h4>Your Information</h4>
        </div>
        <form action="https://formsubmit.co/wendikardian@gmail.com" autocomplete="off" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" class="next" /> 
                    <div class="form-container">
                        <div class="input-container">
                            <div class="icon">
                            <FontAwesomeIcon icon={faPerson} />
                            </div>
                            <div class="form-input">
                                <input type="text" class="input-item" name="name" id="name" placeholder=" " />
                                <label for="name" class="form-label">Name</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <div class="icon">
                            <FontAwesomeIcon icon={faCity} />
                            </div>
                            <div class="form-input">
                                <input type="text" class="input-item" name="city" id="city" placeholder=" " />
                                <label for="city" class="form-label">City</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <div class="icon">
                            <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div class="form-input">
                                <input type="text" class="input-item" name="email" id="email" placeholder=" " />
                                <label for="email" class="form-label">Email</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <div class="icon">
                            <FontAwesomeIcon icon={faMessage} />
                            </div>
                            <div class="form-input">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="textarea" type="text" name="message" id="message" cols="20" rows="10"
                                    placeholder=" "></textarea>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="submit" class="submit" />
                </form>
                </div>
    </div>
  )
}
