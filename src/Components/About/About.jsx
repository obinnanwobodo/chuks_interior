import React from "react";
import styles from "./About.module.css";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <div className={styles.aboutgen}>
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
          <div className={styles.svg1}>
            {" "}
            <MdOutlineWorkspacePremium />{" "}
          </div>
          <h1>Premium Quality</h1>
          <p>
            We deal exclusively in high- <br />
            quality furniture and <br />
            merchandise that stands the test <br />
            of time.
          </p>
        </div>

        <div className={styles.box2}>
          <FiUsers />
          <h1>Expert Service</h1>
          <p>
            Our experienced team helps you <br />
            find the perfect furniture <br />
            solutions for your space.
          </p>
        </div>

        <div className={styles.box3}>
          <CiDeliveryTruck />
          <h1>Reliable Delivery</h1>
          <p>
            Fast and secure delivery across <br />
            Lagos and surrounding areas.
          </p>
        </div>

        <div className={styles.box4}>
          <IoMdCheckmarkCircleOutline />
          <h1>Customer Satisfaction</h1>
          <p>
            Your satisfaction is our priority. <br />
            We ensure every piece meets <br />
            your expectations.
          </p>
        </div>
      </div>

      <div className={styles.missiongen}>

<div className={styles.grp1}>

        <h1  className={styles.ourmission}>Our Mission</h1>

        <p  className={styles.p1}>
          At Chuks Interior Decor Enterprises, we specialize in providing top-{" "}
          <br />
          tier furniture solutions for both residential and commercial spaces.{" "}
          <br />
          Unlike traditional interior decorating services, we focus on
          delivering <br />
          quality furniture pieces and home merchandise that transform your{" "}
          <br />
          environment.{" "}
        </p>

        <p className={styles.p2}>
          Our extensive inventory includes quality office tables, home <br />
          furniture, and various merchandise designed to meet the diverse <br />{" "}
          of our clients throughout Lagos and beyond.
        </p>
        </div>

        <div className={styles.wcugen}>
          <h1 className={styles.wcu}>Why Choose Us?</h1>

          <div className={styles.genlist}>

            <ul>

            <li className={styles.li1}>
              <IoMdCheckmarkCircleOutline />
              <p>Exclusively high-quality furniture and merchandise</p>
            </li>

            <li className={styles.li2}>
              <IoMdCheckmarkCircleOutline />
              <p>Competitive pricing without compromising quality</p>
            </li>

            <li className={styles.li3}>
              <IoMdCheckmarkCircleOutline />
              <p>Wide selection for home and office spaces</p>
            </li>

            <li className={styles.li4}>
              <IoMdCheckmarkCircleOutline />
              <p>Convenient location in Lagos</p>
            </li>

            <li className={styles.li5}>
              <IoMdCheckmarkCircleOutline />
              <p>Personalized customer service</p>
            </li>

            <li className={styles.li6}>
              <IoMdCheckmarkCircleOutline />
              <p>Trusted by satisfied customers</p>
            </li>

            </ul>

          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default About;
