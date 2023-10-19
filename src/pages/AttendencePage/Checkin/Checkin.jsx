import React from 'react'
import Roulette from './Roulette/Roulette'
import Calendar from './Calendar/Calendar'
import styles from './Checkin.module.scss'

const Checkin = () => {
  return (
    <div className={styles.checkin}>
      <Roulette />
      <Calendar />
    </div>
  )
}

export default Checkin