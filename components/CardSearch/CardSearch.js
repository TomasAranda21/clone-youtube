import React from 'react'
import { apiBusquedas } from '../../pages/api/apiMovies'
import styles from './cardSearch.module.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const CardSearch = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
       <div className={styles.responsiveCarousel}>
          <Slider {...settings}>
    
              {apiBusquedas.map(search => (
                  <div className={styles.cards_search} key={search}>
                      <p>{search}</p>
                  </div>
              ))}

          </Slider>
        </div>

    
    </>
  )
}

export default CardSearch