import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const Footer = () => {
  return (
    <div className={styles.genfooter}>
      <div className={styles.first3}>
        <div className={styles.grp1}>
          <h2 className={styles.cide}>Chuks Interior Decor Enterprises</h2>
          <p className={styles.trusted}>
            Your trusted partner for high-quality home and office furniture in
            Lagos, Nigeria. <br />
            We specialize in premium furniture pieces and merchandise that
            transform spaces <br />
            with elegance and functionality.
          </p>

          <div className={styles.socialgen}>
            <div className={styles.instagen}>
             <div className={styles.iconcircle}>
               <FaInstagram />
             </div>
              <a href="https://www.instagram.com/chuks_interior_decor_enterpris?igsh=MTN1cHF0OGhtemthcA==">
                @chuks_interior_decor_enterpris
              </a>
            </div>

            <div className={styles.tiktokgen}>
             <div className={styles.iconcircle}>
               <PiTiktokLogoLight />
             </div>
              <a href="https://vm.tiktok.com/ZSAHNerqK/">@chuksinteriordecor</a>
            </div>

            <div className={styles.facebookgen}>
             <div className={styles.iconcircle} >
               <SlSocialFacebook />
             </div>
              <a href="https://www.facebook.com/profile.php?id=100078142526748">
                Chuks Interior Decor Enterprises
              </a>
            </div>
          </div>
        </div>
        <div className={styles.grp2}>
          <p>Quick Links</p>
          <a href="/">Home</a>
          <a href="#about">About Us</a>
         <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.grp3}>
          <p>Contact Information</p>
          <div className={styles.addresses}>
            <CiLocationOn />
            <div>
<h3>145, Olojo Drive, Opp, FCMB</h3>
            <h3>Ojo, Alaba RD</h3>
            <h3>Lagos, Nigeria</h3>
            </div>
            
          </div>

          <div className={styles.numbergen}>
            <IoCallOutline />
            <div>
<a href="tel:07035368835">07035368835</a> <br />
            <a href="tel:08089579080">08089579080</a>
            </div>
            
          </div>


          <div className={styles.emailgen}>
<MdOutlineEmail />
<a href="mailto:chukssamuel18@yahoo.com">chukssamuel18@yahoo.com</a>
          </div>


        </div>
      </div>


      <div className={styles.centre}>
<h2>Our Product Categories</h2>

<div className={styles.items}>
<a href="/product">Home Furnitures</a>
<a href="/product">Executive Desks</a>
<a href="/product">Office Chairs</a>
<a href="/product">Quality Tables</a>
<a href="/product">Dining Tables</a>
<a href="/product">Home Merchandise</a>
</div>

      </div>




<div className={styles.lastset}>
  <div className={styles.yearndserving}>
<p>© 2025 Chuks Interior Decor Enterprises. All rights reserved.</p>
<h3>Serving quality furniture across Lagos, Nigeria</h3>
  </div>

<h2>Designed  By&nbsp;  <a href="">Obinna Nwobodo</a> &nbsp; (Upscale Web Designs)</h2>
<div className={styles.iconndwa}>
<div>
  <FaWhatsapp />
</div>

<a href="tel:09024982829">09024982829</a>
</div>

</div>


    </div>
  );
};

export default Footer;
