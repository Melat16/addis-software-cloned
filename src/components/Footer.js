import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Location from "@material-ui/icons/LocationCity";
import Phone from "@material-ui/icons/Phone";
import Message from "@material-ui/icons/Message";
import "../styles/Footer.css";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";


const styling={
    color:"white",
    border: "none",
    cursor: "pointer",
    height: "40px",
    width: "150px",
    color:"grey",
};

function Footer() {
  return (
    <div className="footer">
      <div className="leftContent">
      <Fade left>
        <h2>LETS DISCUSS YOUR <br/>
        PROJECT RIGHT AWAY</h2>
        <Link to='/contactus'>
        <button style={styling}>Contact us
        </button>
        </Link>
        </Fade>
      </div>
       
     <div className="rightContent">
       <Fade right>
       <p><Location />kelela Bldg(Bole atlas on the way to rowanda</p>
       <p><Phone />+251-923-897654</p>
       <p><Message />info@addissoftware.com</p>
       </Fade>
     </div>
     <div className="socialMedia">
      <FacebookIcon /> <LinkedInIcon /> <TwitterIcon /> <InstagramIcon />
       </div>
     <div className="copyRight">
      <p> &copy; 2022 Addis Software PLC All rights reserved</p> </div>
    </div>
  );
}

export default Footer;