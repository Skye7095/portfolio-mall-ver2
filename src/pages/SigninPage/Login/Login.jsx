import React from 'react'
import styles from './Login.module.scss'
import {PiLockSimpleThin, PiUserThin} from 'react-icons/pi'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className={styles.login}>

      <h1>로그인</h1>

      <div className={styles.input_wrapper}>
        <PiUserThin size='30' />
        <input type="text" placeholder='이메일을 입력하세요'/>
      </div>
      
      <div className={styles.input_wrapper}>
        <PiLockSimpleThin size='30' />
        <input type="password" placeholder='비밀번호를 입력하세요' />
      </div>

      <ul className={styles.links}>
          <li><Link to='#'>비밀번호 재설정</Link></li>
          <li><div></div></li>
          <li><Link to='#'>회원가입</Link></li>
      </ul>

      <button>로그인</button>
    </div>
  )
}

export default Login