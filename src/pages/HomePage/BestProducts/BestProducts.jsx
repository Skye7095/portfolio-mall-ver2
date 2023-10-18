import React from 'react'
import styles from './BestProducts.module.scss'
import { Link } from 'react-router-dom'

const BestProducts = () => {
  return (
    <div className={styles.bestproducts_wrapper}>
      <h3>지금 제일 잘 나간 상품</h3>

      <div className={styles.bestproduct_wrapper}>
        <div className={styles.bestproduct}>
          <Link to='/'>
            <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="square img" />
            <span className={styles.productName}>{'['}오뚜기{']'}치즈케익 28oz 794g 플레인/오레오 맛선택</span>
            <div>
              <span className={styles.productPrice}>22,000</span>
              <span className={styles.productPriceUnit}>원</span>
            </div>
          </Link>
        </div>

        <div className={styles.bestproduct}>
          <Link to='/'>
            <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="square img" />
            <span className={styles.productName}>{'['}오뚜기{']'}치즈케익 28oz 794g 플레인/오레오 맛선택</span>
            <div>
              <span className={styles.productPrice}>22,000</span>
              <span className={styles.productPriceUnit}>원</span>
            </div>
          </Link>
        </div>

        <div className={styles.bestproduct}>
          <Link to='/'>
            <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="square img" />
            <span className={styles.productName}>{'['}오뚜기{']'}치즈케익 28oz 794g 플레인/오레오 맛선택</span>
            <div>
              <span className={styles.productPrice}>22,000</span>
              <span className={styles.productPriceUnit}>원</span>
            </div>
          </Link>
        </div>

        <div className={styles.bestproduct}>
          <Link to='/'>
            <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="square img" />
            <span className={styles.productName}>{'['}오뚜기{']'}치즈케익 28oz 794g 플레인/오레오 맛선택</span>
            <div>
              <span className={styles.productPrice}>22,000</span>
              <span className={styles.productPriceUnit}>원</span>
            </div>
          </Link>
        </div>

        <div className={styles.bestproduct}>
          <Link to='/'>
            <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="square img" />
            <span className={styles.productName}>{'['}오뚜기{']'}치즈케익 28oz 794g 플레인/오레오 맛선택</span>
            <div>
              <span className={styles.productPrice}>22,000</span>
              <span className={styles.productPriceUnit}>원</span>
            </div>
          </Link>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default BestProducts