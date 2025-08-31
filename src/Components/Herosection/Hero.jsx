import React from "react";
import styles from "./Hero.module.css";
import Bgimg from "./helpers/bgimg";
import Image from "next/image";
import heroimg from "../../../public/Images/hero-furniture-uixT0qoA.jpg";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.genhero}>


      <div className={styles.imgdiv}>
    <Image src={heroimg} alt='background image' className={styles.herobgimg} fill />
     <div className={styles.overlay}></div>
      </div>

  



<div className={styles.heroContent}>

  <div className={styles.texts1set}>

    <h1 className={styles.premium}>Premium Quality</h1>
    <h1 className={styles.funiture}>Furniture &<br /><span className={styles.mer}>Merchandise</span> </h1>
    <p className={styles.discover}>Discover our extensive collection of high-quality home and <br />office furniture. Transform your space with elegance and <br />sophistication.</p>

  </div>


<div className={styles.buttongen}>

<a className={styles.anchor1} href="/products"> <button className={styles.btn1}>Explore Our Products</button> </a>
<a className={styles.anchor2} href="/contact"> <button className={styles.btn2}>Contact Us Today</button></a>


</div>


<div className={styles.located}>
  <p>📍 Located in Lagos, Nigeria - Serving Quality Since Years</p>
</div>





</div>









    </div>
    </div>
  );
};

export default Hero;
