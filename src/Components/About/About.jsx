import React from "react";
import styles from "./About.module.css";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";





const About = () => {
  return (
    <div className={styles.aboutgen} >
      <h1 className={styles.abt}>About Chuks Interior Decor Enterprises</h1>
      <p className={styles.leading}>
        We are a leading dealer in high-quality home and office furniture and
        merchandise, <br />
        serving customers across Lagos, Nigeria. Our commitment to excellence
        and quality <br />
        has made us a trusted name in the furniture industry.
      </p>

      

      <div className={styles.boxgen}>



        <div className={styles.box1}>
          <div className={styles.svg1}>   <MdOutlineWorkspacePremium /> </div>
          <h1>Premium Quality</h1>
          <p>We deal exclusively in high- <br />quality furniture and <br />merchandise that stands the test <br />of time.</p>

        </div>


        <div className={styles.box2}>
            <FiUsers />
          <h1>Expert Service</h1>
          <p>Our experienced team helps you <br />find the perfect furniture <br />solutions for your space.</p>


        </div>


        <div className={styles.box3}>
        <CiDeliveryTruck />
      <h1>Reliable Delivery</h1>
      <p>Fast and secure delivery across <br />Lagos and surrounding areas.</p>

        </div>


        <div className={styles.box4}>
            <IoMdCheckmarkCircleOutline />
          <h1>Customer Satisfaction</h1>
          <p>Your satisfaction is our priority. <br />We ensure every piece meets <br />your expectations.

</p>
        </div>


      </div>
















    </div>
  );
};

export default About;
