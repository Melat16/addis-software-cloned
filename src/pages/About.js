import React from 'react'
import { Link } from "react-router-dom";
import '../styles/About.css';
import logo from "../assets/logo.png";
import Fade from 'react-reveal/Fade';

function About(){
    return(
        <div className='about'>
<div className='lefcontent'>
<Fade left>
    <img alt='logo' src={logo} style={{
              verticalAlign: "center",
              position: 'absolute',
              margin: '13%',
            }} />
         </Fade>   
</div>

<div className='rightcontent'>

<p><h4>ABOUT US</h4>  
Addis Software PLC is a Software and information technology company in Addis Ababa, Ethiopia serving clients nationwide and<br/>
worldwide. We are extremely committed to delivering quality advice, sales and support to assist our clients to achieve <br/> 
the maximum from their investment.<br/> 
<br/> 
Addis Software PLC was started because we want to contribute our own share by providing opportunities to talented developers <br/> 
and work on projects that actually can bring a significant change in Ethiopia’s IT sector, digitalizing government services or private <br/> 
sector services and many more. We want to create an environment where everyone learns from each other and grow together by<br/> 
 creating an open and transparent culture in our office.<br/> 
 <br/> 

Started as a group of passionate software developers, and now we are booming with our mission to create a “digital well-being” <br/> 
that the public can enjoy, in a sense that talented programmers and tech enthusiasts have the ability to show their powers and talents<br/> 
 by working on big scaled and challenging projects, while also learning to grow together.<br/> 
 <br/> 

That’s why we are now forging the best communication between our offered services and clients while sharpening the essence of <br/> 
what the developer community can ultimately accomplish.<br/> 
<br/> 

The services range from providing IT Services, software solutions, websites and application solutions, consultancy, and digital <br/> 
marketing.<br/> 
<br/> 

We pride ourselves on having the elite staff in Ethiopia who have been providing their services and expertise for enterprise and<br/> 
 startup companies for a long period of time. We want to be your digital partner so you can gain business success, market <br/> 
 fearfulness, and undependability.<br/> </p>
</div>

</div>
    )
}
export default About;