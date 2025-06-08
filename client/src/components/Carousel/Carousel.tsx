import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carousel.css';
import image1 from '../../assets/sliderImages/carouselimage1.jpg'
import image2 from '../../assets/sliderImages/carouselimage2.jpg';
import image3 from '../../assets/sliderImages/carouselimage3.jpg';
import image4 from '../../assets/sliderImages/carouselimage4.jpg';
import image5 from '../../assets/sliderImages/carouselimage5.jpg';
import image6 from '../../assets/sliderImages/carouselimage6.jpg';
import { Autoplay } from 'swiper/modules';




export default function Carousel() {
    
  return (
    <div className='carousel-container'>
    <Swiper style={{ width: '100%' }} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: true }} modules={[Autoplay]} loop={true}>

      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image1} alt="blue-ribbon-dive-center-anilao-philippines" />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image4} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image5} alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img className='slideImage' src={image6} alt="Slide 6" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}