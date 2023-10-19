import React, { useState } from 'react'
import Roulette from './Roulette/Roulette'
import Calendar from 'react-calendar'
import styles from './Checkin.module.scss'
import moment from 'moment'
import './Calendar.css';

const Checkin = () => {

  const [value, onChange] = useState(new Date());

  // 출석한 날짜를 marks에 저장하고, 하단 titleClassName에서 .hightlight 사용하기
  const marks = [
    "01-10-2023",
    "05-10-2023"
  ];

  return (
    <div className={styles.checkin}>
      <Roulette />

      <div>
        <Calendar 
          onChange={onChange} 
          value={value} 
          locale='en-EN'
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            }
          }}
        />
      </div>
      
    </div>
  )
}

export default Checkin