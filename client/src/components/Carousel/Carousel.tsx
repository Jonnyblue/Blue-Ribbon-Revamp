import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './Carousel.css';
import image1 from '../../assets/sliderImages/blue-ribbon-dive-center-anilao-philippines.jpg'
import image2 from '../../assets/sliderImages/blue-ribbon-dive-resort-anilao-photo-gallery.jpg';
import image3 from '../../assets/sliderImages/blue-ribbon-dive-resort-restaurant-anilao-philippines-1.jpg';
import image4 from '../../assets/sliderImages/blue-ribbon-divers-resort-anilao.jpg';
import image5 from '../../assets/sliderImages/TDI-banner.jpg';
import image6 from '../../assets/sliderImages/SDI-Banner-2.jpg';
import { Autoplay } from 'swiper/modules';
import { Container } from '@mui/material';




export default function Carousel() {
    
  return (
    <div className='swiper-slide'>
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} loop={true}>
      <SwiperSlide>
        <img className='slideImage' src={image1} alt="blue-ribbon-dive-center-anilao-philippines" style={{ height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slideImage' src={image2} alt="Slide 2" style={{ height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slideImage' src={image3} alt="Slide 3" style={{ height: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slideImage' src={image4} alt="Slide 4" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slideImage' src={image5} alt="Slide 5" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='slideImage' src={image6} alt="Slide 6" style={{ width: '100%' }} />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}