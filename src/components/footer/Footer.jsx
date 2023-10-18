import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className='container'>
        <div className={styles.footer_links}>
          <Link to='#'>마켓 소개</Link>
          <div></div>
          <Link to='#'>이용 약관</Link>
        </div>

        <div className={styles.footer_contents}>
          <p className={styles.p_bold}>주식회사 xx마켓</p>
          <p>서울특별시 강남구 테헤란로 1</p>
          <p>사업자등록번호: 220-81-83676</p>
          <p>대표이사: xxx</p>
        </div>
      </div>
    </div>
  )
}

export default Footer