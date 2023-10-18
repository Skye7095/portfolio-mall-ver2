import React, { useEffect, useState } from 'react'
import styles from './AdsSwiper.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { Autoplay, Navigation } from 'swiper/modules'

const AdsSwiper = () => {

  const [swiperIndex, setSwiperIndex] = useState(1)
  const [swiper, setSwiper] = useState()

  useEffect(() => {
    if(swiper) {
      swiper.slideTo(1)
    }
  }, [])
  

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        className={styles.swiper}
        onActiveIndexChange={(swiperCore) => {setSwiperIndex(swiperCore.activeIndex)}}
        onSwiper={(swiper) => {setSwiper(swiper)}}
        autoplay={{
          delay: 2500
        }}
        loop={true}
      >
        <SwiperSlide className={styles.SwiperSlide}><img src="https://ad-img.gmarket.com/ADS/Contents_/2023_10_12_09_50_59/f4f3c86e48754c24.JPG" alt="silde1" /></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><img src="https://ad-img.gmarket.com/ADS/Contents_/2023_10_12_09_42_33/36edf27b9a0b4560.JPG" alt="silde2" /></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><img src="https://ad-img.gmarket.com/ADS/Contents_/2023_10_17_01_54_03/e214034f60e7445a.JPG" alt="silde3" /></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><img src="https://ad-img.gmarket.com/ADS/Contents_/2023_10_12_10_04_49/a3c08e84a72c4f17.JPG" alt="silde4" /></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}><img src="https://ad-img.gmarket.com/ADS/Contents_/2023_10_12_09_49_46/3c157ec00ced46e0.JPG" alt="silde5" /></SwiperSlide>
      </Swiper>

    </>
  )
}

export default AdsSwiper