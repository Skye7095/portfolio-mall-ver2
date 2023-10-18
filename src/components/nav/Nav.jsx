import React from 'react'
import styles from './Nav.module.scss'
import {BsList} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className='container'>
        <div className={styles.nav_wrapper}>
          <div className={styles.nav_btns}>
            <button className={styles.btn_green}>
              <BsList size='30'/><span>전체 카테고리</span>
            </button>
            <button className={styles.btn_tranparency}>
              출석 체크
            </button>
          </div>
          <div className={styles.nav_links}>
            <Link to='/login'>로그인</Link>
            <div></div>
            <Link to='/signup'>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Nav