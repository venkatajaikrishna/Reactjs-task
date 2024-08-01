import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <h3 style={{textAlign:"center",color:"red"}}>Image 1</h3>
          <img 
            src="https://www.livemint.com/lm-img/img/2023/07/11/600x338/Jawan_1689069088718_1689069098009.jpg" 
            alt="Slide 1"
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"3%"}}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"skyblue"}}>Image 2</h3>
          <img 
            src="https://www.koimoi.com/wp-content/new-galleries/2022/01/pushpa-to-cross-250-crore-mark-today-001.jpg" 
            alt="Slide 2" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"3%"}}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"orange"}}>Image 3</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3rQ-ydbgyAcPgE3474jp6PY5JT3S4dV_L0Ap8a2bYJ2OjnhiQ9tI3W7A5QWvOWURzro&usqp=CAU" 
            alt="Slide 3" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"3%"}}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"blue"}}>Image 4</h3>
          <img 
            src="https://static.toiimg.com/thumb/msid-83600047,width-1280,height-720,resizemode-4/83600047.jpg" 
            alt="Slide 4" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"3%"}}/>
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"violet"}}>Image 5</h3>
          <img 
            src="https://i.pinimg.com/originals/8c/59/8e/8c598e23041ab30f831e8ae8ecb3ac8a.jpg" 
            alt="Slide 5" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"3%"}}
          />
        </div>
      </Slider>
    </div>
  );
}

export default About;
