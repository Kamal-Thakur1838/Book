import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import list from "../../public/list.json";

const FreeBook = () => {
    const filterData = list.filter((data)=>data.category==="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'> Free Offered Courses </h1>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam, odio laborum explicabo accusantium nam, quia molestias qui aliquam enim ullam magnam quidem eaque repudiandae, cumque perferendis labore nobis beatae! </p>
        </div>
      <div>
      <Slider {...settings}>
         {filterData.map((item)=>(
            <Cards item={item} key={item.id} />
         ))}
      </Slider>
      </div>
      </div>

    </>
  )
}

export default FreeBook