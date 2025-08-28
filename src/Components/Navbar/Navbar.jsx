import React from 'react'
import styles from "./Navbar.module.css"
import logo from './helpers/Navlogo'
import Navlogo from './helpers/Navlogo'

const Navbar = () => {
  return (
    <div className={`${styles.gennav}`}>

  <div className={styles.logoauthor}>
    
    {/* <div className={styles.logo}>
    <Navlogo/>  
</div> */}

<div className={styles.author}>
    <h1>CHUKS INTERIOR DECOR</h1>
    <p>ENTERPRISES</p>
</div>

    </div>      


<div className={styles.navlinks}>
    <a href="/">Home</a>
    <a href="#about">About</a>
    <a href="#products">Products</a>
    <a href="#contact">Contact</a>
</div>


    </div>
  )
}

export default Navbar