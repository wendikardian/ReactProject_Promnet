import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm, faPhone, faPerson } from '@fortawesome/free-solid-svg-icons'



export default function Footer() {
  return (
    <>
    <footer>
        <div class="contact">
            <div class="contact-item">
                <h3 class="pink">Company</h3>
                <hr />
                <p>Home</p>
                <p>Services</p>
                <p>Portfolio</p>
            </div>
            <div class="contact-item">
                <h3 class="pink">About</h3>
                <hr />
                <p>About Us</p>
                <p>Blog</p>
                <p>My Contack</p>
            </div>
            <div class="contact-item">
                <h3 class="pink">Social Media</h3>
                <hr />
                <p> <FontAwesomeIcon icon={faPhotoFilm} /> Taylucifer</p>
                <p> <FontAwesomeIcon icon={faPhone} /> 089542251289</p>
                <p> <FontAwesomeIcon icon={faPerson} /> Wendi Kardian</p>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright &copy; 2022 Wendi Kardian, all rights reserved.</p>
        </div>
    </footer>
    </>
  )
}
