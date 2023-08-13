import "./FooterStyles.css"
import React from 'react'
import {FaHome , FaMailBulk, FaPhone,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className ="footer">
        <div className = "footer-container">
            <div className = "left">
                <div className = "location">
                    <FaHome size ={20} style={{color:"#fff",marginRight:" 2rem"}}/>
                    <div>
                        <p>Sant vihar Meerut.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4>
                    <FaPhone size ={20} style={{color:"#fff",marginRight:" 2rem"}}/>
                    7409811439

                    </h4>
                </div>
                <div className = "Email">
                    <h4><FaMailBulk size = {20} style={{color:"#fff",marginRight:" 2rem"}}/>
                  jainniyati17@gmail.com</h4>
                    </div>   
            </div>
            <div className = "right">
                <h4>About Me</h4>
                <p>Hi,
                I am Niyati,
                Front End Developer
                </p>
                <div className = "social">
                <FaFacebook size = {30} style={{color:"#fff",marginRight:" 1rem"}}/>
                <FaTwitter size = {30} style={{color:"#fff",marginRight:" 1rem"}}/>
                <FaLinkedin size = {30} style={{color:"#fff",marginRight:" 1rem"}}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer