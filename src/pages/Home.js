import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css';
import '../styles/Items.css';
import Fade from 'react-reveal/Fade';
import image1 from "../assets/bgright1.png";
import image2 from "../assets/stores.png";
import html5 from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import images from "../components/images";
import ImageSlider from "../components/imageSlider";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedText from 'react-animated-text-content'; 
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import img1 from "../assets/m1.jpeg";
import Marquee from "react-easy-marquee";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';




const percentage = 66;
const percentage1 = 80;
const percentage2 = 40;
function Home(){
    return(
      
        <div className='home'>
            <div className='headerContainer' >
            <Fade left>
                <h1>INNOVATIVE<br/> 
                IT SOLUTIONS</h1>
              
                <h4>CURATED TO TRANSFORM YOUR<br/> BUSINESS</h4>
                <br/>
                
                <p>Addis Software is a software development company <br/>
                that works closely with Ethiopian & Swedish <br/>
                 developers from Sweetopia to fulfill high customer<br/>
                  satisfaction</p>
                  </Fade>
                  <br/> <br/>
                  <Link to="/contactUs">
                  <Fade right>
                    <Link to='/contactus'>
                  <button>Work with us</button>
                  </Link>
                 </Fade>
                  </Link>
                  </div>

                  <div className='rightcontent'>
                    <Fade right>
                  <img alt='background' src={image1} style={{
              margin: '0%',
              height: '680px',
              width: '680px',
            }} />
              </Fade>
                  </div>
                 
                  <div className='maincontent'>
                      <div className='leftmaincontent'>
                      <Fade bottom>
                        <img alt='background' src={image2} style={{
              margin: '0%',
              height: '360px',
              width: '560px',
            }} />
            </Fade>
                      </div>
                  <div className='ourservices'>
                    <Fade bottom>
                      <h1> OUR SERVICES </h1>
                      <p>
                We help our clients to build state of the art software products and empower <br/>
                the tech sector with innovative solutions and approaches. The services we give <br/>
                re in parallel with the best practices set by the global community, including <br/>
                tech giants. </p>
                <p>We make sure our team is up-to date with the technologies used, and<br/>
                therefore delivering the best possible solution to the problem on hand.</p>
                </Fade>
                  </div>
                  </div>
             

     
<div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <h2 style={
          {
            color:'orange',
          }
        }>Yegna Home</h2>
        <h3 >React, React Native</h3>
         <p>In this day and age, Docker is the status quo of
            building applications, allowing us to build and 
            deploy applications using containers. 
           
         </p>
         <Link to='/contactus'>
                  <button>Read more</button>
                  </Link>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="box">
      <div className="content">
        <h2 style={
          {
            color:'orange',
          }
        }>Banks in Ethiopia</h2>
        <h3>Wordpress</h3>
         <p>Banksethiopia.com is a website to make your bank related decisions easier by comparing currency exchange rates, diaspora related benefits, loan interest, saving interest, in technical depth
         </p>
         <Link to='/contactus'>
                  <button>Read more</button>
                  </Link>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="box">
      <div className="content">
        <h2 style={
          {
            color:'orange',
          }
        }>Affcollect</h2>
        <h3>mern, node-cron, Puppeteer</h3>
         <p>Aff-Collect is a web-based application that is used for managing and monitoring the progress of your online affiliate-based businesses. The platform is aimed to collect reports
         </p>
         <Link to='/contactus'>
                  <button>Read more</button>
                  </Link>
      </div>
    </div>
  </div>
</div>


        <div className='sections'>
       
        <ImageSlider/>
                              
                            <CircularProgressbar
                           
                value={percentage}
                text={`HTML`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgb(255, 98, 0, ${percentage / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: ' linear-gradient(315deg, #f5d020 0%, #f53803 74%)',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: 'rgb(105,105,105)',
                    // Text size
                    fontSize: '16px',
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#3e98c7',
                  },
                }}
              />
              <CircularProgressbar
                           
                value={percentage1}
                text={`CSS`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgb(253, 127, 44, ${percentage1 / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: ' linear-gradient(315deg, #f5d020 0%, #f53803 74%)',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: 'rgb(105,105,105)',
                    // Text size
                    fontSize: '16px',
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#3e98c7',
                  },
                }}
              />
              
              <CircularProgressbar
                           
                value={percentage2}
                text={`JS`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgb(253, 147, 70, ${percentage2 / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: ' linear-gradient(315deg, #f5d020 0%, #f53803 74%)',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: 'rgb(105,105,105)',
                    // Text size
                    fontSize: '16px',
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: '#3e98c7',
                  },
                }}
              />


<Marquee duration={10000} pauseOnHover={true} reverse={true} background="white" height="100px" className="marque_container"axis="X" width="1100px">

<img src={react} className="img-fluid"/>
<img src={css} className="img-fluid"/>
<img src={html5} className="img-fluid"/>
<img src={node} className="img-fluid"/>
<img src={react} className="img-fluid"/>
<img src={css} className="img-fluid"/>
<img src={html5} className="img-fluid"/>
<img src={node} className="img-fluid"/>


</Marquee>
              </div>
                 </div>
    );
}
export default Home;