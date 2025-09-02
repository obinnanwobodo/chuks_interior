  "use client";

  import React, { useState } from "react";
  import styles from "./Navbar.module.css";
  import logo from "./helpers/Navlogo";
  import Navlogo from "./helpers/Navlogo";
  import { RxHamburgerMenu } from "react-icons/rx";
  import navlogo from "../../../public/Images/upscalemedia-transformed (1).png";
  import Image from "next/image";

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // closes menu after clicking a link
  const handleClose = () => {
    setIsOpen(false);
  };

    return (
      <div className={`${styles.gennav}`}>
        <div className={styles.logoauthor}>
          <div className={styles.navlogodiv}>
            <Image
              src={navlogo}
              alt="chuks interior logo"
              className={styles.navlogo}
            />
          </div>
          <div className={styles.author}>
            <h1>CHUKS INTERIOR DECOR</h1>
            <p>ENTERPRISES</p>
          </div>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div>
            <RxHamburgerMenu />
          </div>
        </button>

        <div className={`${styles.navlinks} ${isOpen ? styles.open : ""}`}>
          <a href="/" onClick={handleClose}>Home</a>
          <a href="#about" onClick={handleClose}>About</a>
          <a href="#products" onClick={handleClose}>Products</a>
          <a href="#contact" onClick={handleClose}>Contact</a>
        </div>
      </div>
    );
  };

  export default Navbar;
