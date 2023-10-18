import React from 'react'
import styles from './Notifications.module.scss'
import NotificationSwiper from './NotificationSwiper/NotificationSwiper';

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <h3>공지</h3>
      <NotificationSwiper />
    </div>
  )
}

export default Notifications