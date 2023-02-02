import React from "react";
import Slider from "react-slick";
import "./male.css"
import Ergtei1 from "../assets/ergtei1.jpg"
import Ergtei2 from "../assets/ergtei2.jpg"
import Ergtei3 from "../assets/ergtei3.jpg"
import Ergtei4 from "../assets/egtei4.jpg"
import Ergtei5 from "../assets/ergtei5.jpg"

const Male = ()=>{
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
            title:"VTG FIT SHERPA TRUCKER NICO TOFU PLAID",
            img:Ergtei1,
        },
        {
            key:2,
            title:"VTG FIT SHERPA TRUCKER NICO TOFU PLAID",
            img:Ergtei2,
        },
        {
            key:3,
            title:"VTG FIT SHERPA TRUCKER NICO TOFU PLAID",
            img:Ergtei3,
        },
        {
            key:4,
            title:"VTG FIT SHERPA TRUCKER NICO TOFU PLAID",
            img:Ergtei4,
        },
        {
            key:5,
            title:"VTG FIT SHERPA TRUCKER NICO TOFU PLAID",
            img:Ergtei5,
        },
    ]
    return(
        <div className="male">
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="male-it">
                            <img src={row.img} alt="/"/>
                            <h3>Lace-up leather boots</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Male;