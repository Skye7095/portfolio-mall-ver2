import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
              <Link to={'/'} >
                <h2>Market</h2>
              </Link>

            <div className={styles.header_search}>
              <input type="text" />
              <div>
                <FaMagnifyingGlass/>
              </div>
            </div>
          </div>

          <div className={styles.header_icons}>
            <div>
              <AiOutlineShoppingCart size='30px'/>
            </div>
            <div>
              <AiOutlineUser size='30px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header