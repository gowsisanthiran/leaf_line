import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from '../../images/pic04.jpeg'

const Carouselbutton=()=>{
  return (
    <div>
        <Carousel>
            <img src={img1} alt='' />
        </Carousel>
    </div>
  )
}

export default Carouselbutton