import React from "react";
import styles from "./Products.module.css";
import officechair from "../../../public/Images/gemini chair.png";
import parlor from "../../../public/Images/home furniture chuks.jpg";
import merchandise from "../../../public/Images/chuks home merchandise pic.jpg";
import Image from "next/image";

const array = [
  {
    imgsrc: officechair,
    bgcolor: "#fbf6e4",
    title: "Premium Office Furniture",
    alt: "office funiture image",
    description:
      "Executive desks, ergonomic chairs, filing \ncabinets, and professional office solutions \ndesigned for productivity and comfort.",
    head2: "What We Offer:",
    offers: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Filing cabinets and storage",
      "Conference tables",
    ],
    learnmore: "#contact",
  },

  {
    imgsrc: parlor,
    bgcolor: "#fbf6e4",
    title: "Quality Home Furniture",
    alt: "parlor funiture image",
    description:
      "Beautiful home furniture including dining sets, \nsofas, bedroom furniture, and living room \nessentials for every home.",
    head2: "What We Offer:",
    offers: [
      "Dining tables and chairs",
      "Comfortable sofas and seating",
      "Bedroom furniture sets",
      "Coffee tables and side tables",
      "Entertainment centers",
    ],
    learnmore: "#contact",
  },

  {
    imgsrc: merchandise,
    bgcolor: "#fbf6e4",
    title: "Home Merchandise & Accessories",
    alt: "home merchandise image",
    description:
      "Complete your space with our selection of \nhome accessories, storage solutions, and \ndecorative merchandise.",
    head2: "What We Offer:",
    offers: [
      "Storage and organization",
      "Decorative accessories",
      "Lighting solutions",
      "Shelving and display units",
      "Home improvement items",
    ],
    learnmore: "#contact",
  },
];

const Products = () => {
  return (
    <div className={styles.productsgen}>
      <h2 className={styles.ourprod}>Our Product Range</h2>
      <p className={styles.discover}>
        Discover our comprehensive collection of high-quality furniture and
        merchandise, <br />
        carefully selected to meet all your home and office needs.
      </p>

      <div className={styles.mappinggen}>
        {array.map((each, index) => (
          <div key={index} className={styles.eachofthem}>
            <div className={styles.imagediv}>
              <Image src={each.imgsrc} alt={each.alt} />
            </div>

            <div className={styles.gentexts}   style={{ backgroundColor: each.bgcolor }}>
              <h2 className={styles.title}>{each.title}</h2>
              <p className={styles.desc} style={{ whiteSpace: "pre-line" }}>{each.description}</p>
              <h2 className={styles.wcu}>{each.head2}</h2>

              {each.offers.map((offer, i) => (
                <li  className={styles.listgen} key={i}>{offer}</li>
              ))}

               <a href={each.learnmore} className={styles.learnmorebtn}>Learn More</a>

               
            </div>


          </div>
        ))}
      </div>

      <div className={styles.vmp}>
<a href="product">View More Products</a>
      </div>


    </div>
  );
};

export default Products;
