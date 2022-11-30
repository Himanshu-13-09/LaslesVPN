import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import img from '../Images/Ellipse 175 (1).png';
import img1 from '../Images/Ellipse 175 (2).png';
import img2 from '../Images/Ellipse 175.png';


import star from '../Images/star-icon.svg'

function Carousel() {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 10000,
    initialSlide: 0,

    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id='caro'>

      <Slider {...settings}>


        <div id="users">
          <div id="user1" >
            <a><img id="profile" src={img1} /></a>
            <h5 id="name">Viezh Robert</h5>
            <p id="loc1">Warsaw, Poland</p>
            <p id="rate">4.5<img id="star" src={star} /></p>
          </div>
          <div id="myself">
            <p>
              "Wow... I am very happy to use this VPN. it turned out to be more thab my expectations and so far there have  been non problems. LaslesVPN always the best. "
            </p>
          </div>
        </div>
        <div id="users" >
          <div id="user2">
            <a><img id="profile" src={img} /></a>
            <h5 id="name">Yessica Christy</h5>
            <p id="loc1">Shanxi, China</p>
            <p id="rate">4.5<img id="star" src={star} /></p>
          </div>
          <div id="myself">
            <p >
              "I like it because I like to travel far and still can connect with high speed".
            </p>
          </div>
        </div>
        <div id="users">
          <div id="user1">
            <a><img id="profile" src={img2} /></a>
            <h5 id="name">Kim Yong Jou</h5>
            <p id="loc1">Seoul, South Korea</p>
            <p id="rate">4.5<img id="star" src={star} /></p>
          </div>
          <div id="myself">
            <p>
              "This very unusual for my business that currently requires a virtual private network that has high security".
            </p>
          </div>
        </div>
        <div id="users">
          <div id="user1">
            <a><img id="profile" src={img} /></a>
            <h5 id="name">Yessica Christy</h5>
            <p id="loc1">Shanxi, China</p>
            <p id="rate">4.5<img id="star" src={star} /></p>
          </div>
          <div id="myself">
            <p >
              "I like it because I like to travel far and still can connect with high speed".
            </p>
          </div>
        </div>


      </Slider>
    </div>
  );

}
export default Carousel;