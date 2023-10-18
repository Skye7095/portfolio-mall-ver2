import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules'
import styles from './NotificationSwiper.module.scss'
import 'swiper/scss'

const NotificationSwiper = () => {
  return (
    <div>
      <Swiper
          slidesPerView={1}
          direction={'vertical'}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1000
          }}
          className={styles.swiper}
          loop={true}
        >
          <SwiperSlide><p>{'['}발표{']'} 『해피콜 슈퍼딜 사은품』 이벤트 당첨자새글</p></SwiperSlide>
          <SwiperSlide><p>{'['}주의{']'}스케이트보드 등 안전기준에 부적합한 58개 제품 구매대행 중지 요청</p></SwiperSlide>
          <SwiperSlide><p>{'['}발표{']'} 『글라스락 슈퍼딜 사은품』 이벤트 당첨자</p></SwiperSlide>
          <SwiperSlide><p>{'['}안내{']'}신세계 유니버스 클럽 약관 변경 안내</p></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default NotificationSwiper