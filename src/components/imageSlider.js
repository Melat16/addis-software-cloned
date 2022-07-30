import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/image.css"
import React from 'react'
import f1 from "../assets/office1.jpg"
import f2 from "../assets/office2.jpg"
import f3 from "../assets/office3.jpg"

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};
return (
	<>
    
	<div className="tag">
		<h1>OUR OFFICE</h1>
	</div>
	<div className="imgslider">
		<Slider {...settings}>
            <div class="image1">
                <div className="left">
		<img src={f1}  alt='image1' style={{
              margin: '0%',
              height: '480px',
              width: '600px',
            }}/>
          </div>
          <div className="right">
          <p>
                We help our clients to build state of the art software products and empower <br/>
                the tech sector with innovative solutions and approaches. The services we give <br/>
                re in parallel with the best practices set by the global community, including <br/>
                tech giants. </p>
                <p>We make sure our team is up-to date with the technologies used, and<br/>
                therefore delivering the best possible solution to the problem on hand.</p>
          </div>
            </div>
            <div class="image1">
                <div className="left">
		<img src={f2}  alt='image1' style={{
              margin: '0%',
              height: '480px',
              width: '600px',
            }}/>
          </div>
          <div className="right">
          <p>
                We help our clients to build state of the art software products and empower <br/>
                the tech sector with innovative solutions and approaches. The services we give <br/>
                re in parallel with the best practices set by the global community, including <br/>
                tech giants. </p>
                <p>We make sure our team is up-to date with the technologies used, and<br/>
                therefore delivering the best possible solution to the problem on hand.</p>
             
          </div>
            </div>
            <div class="image1">
                <div className="left">
		<img src={f3}  alt='image1' style={{
              margin: '0%',
              height: '480px',
              width: '600px',
            }}/>
          </div>
          <div className="right">
          <p>
                We help our clients to build state of the art software products and empower <br/>
                the tech sector with innovative solutions and approaches. The services we give <br/>
                re in parallel with the best practices set by the global community, including <br/>
                tech giants. </p>
                <p>We make sure our team is up-to date with the technologies used, and<br/>
                therefore delivering the best possible solution to the problem on hand.</p>
          </div>
            </div>
		</Slider>
	</div>
		</>
)
}
export default ImageSlider;
