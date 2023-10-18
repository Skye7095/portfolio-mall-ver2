import React from 'react'
import styles from './AdsButtons.module.scss'

const Ads = () => {
  return (
    <div>
      <button className={styles.btn_green}>
          전자기기
        </button>
        <button className={styles.btn_green}>
          쥬얼리
        </button>
        <button className={styles.btn_green}>
          남성의류
        </button>
        <button className={styles.btn_green}>
          여성의류
        </button>
        <div className={styles.blank}></div>
    </div>
  )
}

export default Ads