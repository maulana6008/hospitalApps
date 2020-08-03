import React, {Component,Fragment} from 'react';
import '../../style/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Carousel extends Component {
  render() {
    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:3000
        };
    return (
      <Fragment>
      <Slider {...settings}>
        <div>
          <img src='/img/img_1.jpg' alt="slider" style={{width:'100%'}} />
        </div>
        <div>
          <img src='/img/img_2.jpg' alt="slider3" style={{width:'100%'}} />
        </div>
        <div>
          <img src='/img/img_3.jpg' alt="slider2" style={{width:'100%'}} />
        </div>
      </Slider>
      </Fragment>
    );
  }
}
export default Carousel;
