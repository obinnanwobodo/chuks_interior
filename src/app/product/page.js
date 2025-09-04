
'use client'

import React, { useState } from "react";
import styles from './productt.module.css';
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import Head from "next/head";
import Link from "next/link";


const categories = [
  "All Products",
  "Home Furnitures",
  "Executive Desks",
  "Office Funiture & Chairs",
  "Quality Tables",
  "Dining Tables",
  "Home Merchandise",
];



const productCategoryMap = {
  1: "Office Funiture & Chairss",  // product1.jpg
  2: "Quality Tables",  // product2.jpg
  3: "Office Funiture & Chairs",  // product3.jpg
  4: "Office Funiture & Chairs",  // product4.jpg
  5: "Office Funiture & Chairs",  // product5.jpg
  6: "Home Furnitures",  // product6.jpg
  7: "Dining Tables",  // product7.jpg
  8: "Office Funiture & Chairs",  // product8.jpg
  9: "Quality Tables",  // product9.jpg
  10: "Home Furnitures", // product10.jpg
  11: "Dining Tables", // product11.jpg
  12: "Home Furnitures", // product12.jpg
  13: "Home Furnitures", // product13.jpg
  14: "Home Furnitures", // product14.jpg
  15: "Home Furnitures", // product15.jpg
  16: "Executive Desks", // product16.jpg
  17: "Home Furnitures", // product17.jpg
  18: "Home Furnitures", // product18.jpg
  19: "Dining Tables", // product19.jpg
  20: "Office Funiture & Chairs", // product20.jpg
  21: "Dining Tables", // product21.jpg
  22: "Executive Desks", // product22.jpg
  23: "Executive Desks", // product23.jpg
  24: "Office Funiture & Chairs", // product24.jpg
  25: "Office Funiture & Chairs", // product25.jpg
  26: "Executive Desks", // product26.jpg
  27: "Executive Desks", // product27.jpg
  28: "Executive Desks", // product28.jpg
  29: "Home Merchandise", // product29.jpg
  30: "Home Furnitures", // product30.jpg
  31: "Dining Tables", // product31.jpg
  32: "Home Merchandise", // product32.jpg
  33: "Dining Tables", // product33.jpg
  34: "Home Furnitures", // product34.jpg
  35: "Dining Tables", // product35.jpg
  36: "Dining Tables", // product36.jpg
  37: "Quality Tables", // product37.jpg
  38: "Quality Tables", // product38.jpg
  39: "Dining Tables", // product39.jpg
  40: "Home Merchandise", // product40.jpg
  41: "Home Merchandise", // product41.jpg
  42: "Home Merchandise", // product42.jpg
  43: "Home Furnitures", // product43.jpg
  44: "Office Funiture & Chairs", // product44.jpg
  45: "Office Funiture & Chairs", // product45.jpg
  46: "Office Funiture & Chairs", // product46.jpg
  47: "Office Funiture & Chairs", // product47.jpg
};





// Generate 47 product images automatically
const productImages = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  category: productCategoryMap[i + 1] || "All Products", // default, you can later assign real categories
  img: `/Products/Product${i + 1}.jpg`
}));

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? productImages
      : productImages.filter((item) => item.category === selectedCategory);

  return (
    <div className={styles.productPage}>

      <Head>
        <title>Products | Chuks Interior Decor Enterprise – Interiors & Home Solutions in Lagos</title>
        <meta
          name="description"
          content="Explore premium interiors and furniture from Chuks Interior Decor Enterprise in Lagos — executive desks, office chairs, dining tables, stylish décor, and quality merchandise."
        />

        <link
          rel="canonical"
          href="https://www.chuksinteriorenterprise.com.ng/"
        />

      </Head>

      <div className={styles.icnndhome}>
        <div>
          <a href="/"><IoIosArrowRoundBack /></a>
        </div>
        <a href="/">Home</a>
      </div>

      {/* Hero Section div */}
      <div className={styles.hero}>
        <h1>Our Products</h1>
        <p>Explore premium quality furniture designed for your home & office.</p>
      </div>

      {/* Category Filter */}
      <div className={styles.categoryMenu}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.img} alt={`${product.category} - Chuks Interior Decor Lagos`} />
            <button className={styles.detailsBtn}><a href="/#contact">Make Enquiry</a></button>
          </div>
        ))}
      </div>

      <div className={styles.lookinggen}>

        <h2>Can't Find What You're Looking For?</h2>
        <h3>We have an extensive inventory that's constantly updated. Contact us <br />directly to discuss your specific furniture and merchandise needs.</h3>

        <div className={styles.btngenn}>

          <button className={styles.btn1}> <a href="/#contact">Call Us Now</a></button>
          <button className={styles.btn2}> <a href="/#contact">Visit Our Store</a></button>


        </div>

      </div>



      <div className={styles.wrapperfoot}>

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
                  <div className={styles.iconcircle1}>
                    <FaInstagram />
                  </div>


                  <div className={styles.insta1}>
                    <a href="https://www.instagram.com/chuks_interior_decor_enterpris?igsh=MTN1cHF0OGhtemthcA==">
                      For Office Funitures & Merchandises - @chuks_interior_decor_enterprises
                    </a>
                  </div>

                  <div>

                    <div className={styles.insta2svg}>
                      <FaInstagram />
                    </div>
                  </div>
                
                <div className={styles.insta2}>
<a  href="https://www.instagram.com/chuks_interior_decor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    For Home Funitures & Merchandises - @chuks_interior_decor
                  </a>
                </div>
                  
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
              <a href="/#about">About Us</a>
              <a href="/#products">Products</a>
              <a href="/#contact">Contact</a>
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
                  <a href="tel:08089579080">08089579080</a> <br />
                  <a href="tel:07031875184">07031875184</a>
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
              <a href="">Office Furnitures</a>
              <a href="">Home Furnitures</a>
              <a href="">Executive Desks</a>
              <a href="">Office Chairs</a>
              <a href="">Quality Tables</a>
              <a href="">Dining Tables</a>
              <a href="">Home Merchandise</a>
            </div>

          </div>




          <div className={styles.lastset}>
            <div className={styles.yearndserving}>
              <p>© 2025 Chuks Interior Decor Enterprises. All rights reserved.</p>
              <h3>Serving quality furniture across Lagos, Nigeria</h3>
            </div>

            <h2>Designed  By&nbsp;  <a href="">Obinna Nwobodo</a> &nbsp;(Upscale Web Designs)</h2>
            <div className={styles.iconndwa}>
              <div>
                <FaWhatsapp />
              </div>

              <a href="tel:09024982829">09024982829</a>
            </div>

          </div>


        </div>

      </div>

    </div>


  );
};

export default Products;
