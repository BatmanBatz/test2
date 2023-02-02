import React from "react";
import "./home.css";
import Slider from "react-slick";

import Zurag from "../assets/ulirliin_ontslokh_angilal-owliin_sport.webp"
import Zurag2 from "../assets/huuhdiin_dulaan_tsamts.webp"
import Zurag3 from "../assets/owoldoo_beldey_angilal-agaar_tsewershuulegch.webp"
import Zurag4 from "../assets/owoldoo_beldey_angilal-malgai_oroolt.webp"
import Zurag5 from "../assets/owoldoo_beldey_angilal-owliin_gutal.webp"
import Zurag6 from "../assets/ulirliin_ontslokh_angilal-vitamin.webp"
import Zurag7 from  "../assets/ulirliin_ontslokh_angilal-gaduur_huwtsas.webp"

// import Zurag from

const Home = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        pauseOnHover: true
      };
    const data = [
        {
            key:1,
            title:"Өвлийн спорт",
            img: Zurag,
        },
        {
            key:2,
            title:"Өвлийн гутал",
            img: Zurag2,
        },
        {
            key:3,
            title:"Өвлийн гутал",
            img: Zurag3,
        },
        {
            key:4,
            title:"Өвлийн гутал",
            img: Zurag4,
        },
        {
            key:5,
            title:"Өвлийн гутал",
            img: Zurag5,
        },
        {
            key:6,
            title:"Өвлийн гутал",
            img: Zurag6,
        },
        {
            key:7,
            title:"Гадуур хувцас",
            img: Zurag7,
        }
    ]
    return(
        <div className="Uliral">
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="ontsloh">
                            <img src={row.img} alt="/"/>
                            <h3>{row.title}</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Home;