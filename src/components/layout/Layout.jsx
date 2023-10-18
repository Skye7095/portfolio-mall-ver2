import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout