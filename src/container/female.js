import React from "react";
import Slider from "react-slick";
import "./female.css";
import Emgt1 from "../assets/emgt1.jpg";
import Emgt2 from "../assets/emgt2.jpg";
import Emgt3 from "../assets/emgt3.jpg";
import Emgt4 from "../assets/emgt4.jpg";
import Emgt5 from "../assets/emgt5.jpg";

const Emgtei = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        pauseOnHover: true
    };
    const data = [
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1
        },
        {
            key:2,
            title:"TRENCH COAT POLANA",
            img:Emgt2
        },
        {
            key:3,
            title:"TRENCH COAT POLANA",
            img:Emgt3
        },
        {
            key:4,
            title:"TRENCH COAT POLANA",
            img:Emgt4
        },
        {
            key:5,
            title:"TRENCH COAT POLANA",
            img:Emgt5
        },
    ]
    return(
        <div className="female">
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="f-card">
                            <img src={row.img}/>
                            <h4>{row.title}</h4>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Emgtei