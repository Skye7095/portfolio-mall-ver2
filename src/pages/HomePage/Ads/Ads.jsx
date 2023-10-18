import React from 'react'
import AdsButtons from './Ads-Buttons/AdsButtons'
import AdsSwiper from './Ads-Swiper/AdsSwiper'
import styles from './Ads.module.scss'

const Ads = () => {
  return (
    <div className={styles.ads}>
      <AdsButtons />
      <AdsSwiper />
    </div>
  )
}

export default Ads