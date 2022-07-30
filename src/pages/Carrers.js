import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Carrers.css';
import Fade from 'react-reveal/Fade';
import carrers2 from "../assets/carrers2.png";

function Carrers(){
    return(
<div className='Carrers'>
    <div className='left-content'>
    <Fade top>
        <h1>CARRERS AT ADDIS SOFTWARE</h1>
        
        <p>We’re glad that you’ve found your way to us. If you are in search for working with open minded people<br/>
         who code for a better future helping people, businesses and society to grow, then we have something in <br/>
         common. We are always looking for passionate, talented software developers who want to join us on our <br/>
         journey.<br/>

A career at Addis Software is more than just a job, it is also an opportunity to grow professionally. Our<br/>
 company is built on core culture of equality, integrity, and trust. At Addis Software we use technologies <br/>
 that transform careers, companies, and the world. Join our team if you want to be one of us!<br/>

Explore vacancies and current job opportunities at Addis Software here. We love working with creative <br/>
and tech-savy lads. We are open to new ideas and always welcome applicants.</p>
</Fade> </div>
    <div className='right-content'>
        <Fade top>
    <img alt='carrers2' src={carrers2} style={{
              verticalAlign: "center",
              margin: '5%',
              height: '600px',
              width: '460px',
            }} />
            </Fade>
    </div>
</div>
    );
    }
    export default Carrers;