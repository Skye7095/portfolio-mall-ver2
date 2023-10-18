import React from 'react'
import Ads from './Ads/Ads'
import Notifications from './Notifications/Notifications'
import BestProducts from './BestProducts/BestProducts'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <Ads />
        <Notifications />
        <BestProducts />
      </div>
    </div>
  )
}

export default HomePage