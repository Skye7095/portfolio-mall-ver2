import React, { useEffect, useState } from 'react'
import styles from './Roulette.module.scss'

const Roulette = () => {

  const [currentWheelId, setCurrentWheelId] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)

  // 특정 사이에 랜덤 숫자 생성
  const getRandomTimer = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
  }

  useEffect(() => {

    // 배경색 변경하는 함수
    const changeColor = (id) => {
      const div = document.getElementById(id);
      if (div) {
        div.style.backgroundColor = '#10af29';
      } 
    }

    // 배경색을 흰색으로 유지하는 함수
    const stayColor = (id) => {
      const div = document.getElementById(id);
      if (div) {
        div.style.backgroundColor = 'white';
      } 
    }

    // 버튼 클릭하면 배경색 변경
    if (buttonClicked && currentWheelId <= getRandomTimer(10, 20)) {
      setTimeout(() => {
        changeColor((currentWheelId % 4 + 1));
        stayColor(((currentWheelId - 1) % 4 + 1));
        setCurrentWheelId(currentWheelId + 1);
      }, 100); // 0.1초마다 변경
    }
  }, [currentWheelId, buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className={styles.roulette_wrapper}>
      <div className={styles.wheel}>
        <div id='1' className={styles.wheel_contents}>1</div>
        <div id='2' className={styles.wheel_contents}>2</div>
        <div id='3' className={styles.wheel_contents}>3</div>
        <div id='4' className={styles.wheel_contents}>4</div>
      </div>

      <button onClick={handleButtonClick}>출석하기</button>
    </div>
  )
}

export default Roulette