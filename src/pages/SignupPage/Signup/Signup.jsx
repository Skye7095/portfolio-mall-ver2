import React from 'react'
import styles from './Signup.module.scss'
import {PiLockSimpleThin, PiUserThin} from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={styles.signup}>

      <h1>회원가입</h1>

      <div className={styles.input_wrapper}>
        <PiUserThin size='30' />
        <input type="text" placeholder='이메일을 입력하세요'/>
      </div>
      
      <div className={styles.input_wrapper}>
        <PiLockSimpleThin size='30' />
        <input type="password" placeholder='비밀번호를 입력하세요' />
      </div>

      <div className={styles.input_wrapper}>
        <PiLockSimpleThin size='30' />
        <input type="password" placeholder='비밀번호를 재입력하세요' />
      </div>

      <button>회원가입</button>
    </div>
  )
}

export default Signup