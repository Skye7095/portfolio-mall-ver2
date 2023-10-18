import React from 'react'
import styles from './Login.module.scss'
import {PiLockSimpleThin, PiUserThin} from 'react-icons/pi'


const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.input_wrapper}>
        <PiUserThin size='30' />
        <input type="text" placeholder='이메일을 입력하세요'/>
      </div>
      
      <div className={styles.input_wrapper}>
        <PiLockSimpleThin size='30' />
        <input type="password" placeholder='비밀번호를 입력하세요' />
      </div>
    </div>
  )
}

export default Login