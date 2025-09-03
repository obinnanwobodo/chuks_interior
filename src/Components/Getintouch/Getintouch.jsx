'use client'

import React, {useState} from "react";
import styles from "./Getintouch.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";




const Getintouch = () => {

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div className={`${styles.getgen}`}>
      <h2 className={styles.git}>Get In Touch</h2>
      <h3 className={styles.ready}>
        Ready to transform your space? Contact us today to explore our premium
        furniture <br />
        collection and find the perfect pieces for your home or office.
      </h3>

      <div className={styles.boxes}>
        <div className={styles.box1}>
          <CiLocationOn />
          <h2 className={styles.vos}>Visit Our Store</h2>

          <p>145, Olojo Drive, Opp, FCMB</p>
          <p>Ojo, Alaba RD</p>
          <p>Lagos, Nigeria</p>
        </div>

        <div className={styles.box2}>
      
      <div className={styles.box2icon}>
            <IoCallOutline />
         <div className={styles.box2icon2}> <FaWhatsapp /></div>
      </div>

          <h2 className={styles.cu1}>Call & Whatsapp Us</h2>

          <a href="tel:07035368835" className={styles.num1}>
            {" "}
            07035368835
          </a>
          <a href="tel:08089579080" className={styles.num2}>
            {" "}
            08089579080
          </a>
          <a href="tel:07031875184" className={styles.num2}>
            {" "}
            07031875184
          </a>
        </div>

        <div className={styles.box3}>
          <MdOutlineMailOutline />

          <h2 className={styles.eu}>Email Us</h2>

          <a href="mailto:chukssamuel18@yahoo.com" className={styles.email}>
            {" "}
            chukssamuel18@yahoo.com
          </a>
        </div>

        <div className={styles.box4}>
          <SlSocialInstagram />

          <h2 className={styles.fu}>Follow Us</h2>

          <a
            className={styles.instalink}
            href="https://www.instagram.com/chuks_interior_decor_enterpris?igsh=MTN1cHF0OGhtemthcA=="
          >
            @chuks_interior_decor_enterpris
          </a>
        </div>
      </div>

<div className={styles.formndbusi}>
      <form className={styles.formgen} onSubmit={handleSubmit}>
        <div className={styles.formtexts}>
        <h2 className={styles.suam}>Send Us a Message</h2>

        <div className={styles.fndlastname}>
          <div className={styles.firstnamegen}>
            <h3>First Name</h3>
            <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your First name"
                  required
                />

          </div>

          <div className={styles.lastnamegen}>
            <h3>Last Name</h3>
            <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your Last name"
                  required
                />
          </div>
        </div>
        <div className={styles.ea}>
          <h3>Email Address</h3>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />  
        </div>
        <div className={styles.phonenumgen}>
            <h3>Phone Number</h3>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
        </div>

        <div className={styles.messagegen}>
          <h3 className={styles.message}>Message</h3>

           <textarea className={styles.placeholder}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your furniture or merchandise needs..."
                required
              />  
        </div>

        <button className={styles.submit} type="submit">
          Send Message
        </button>

   {status && <p className={styles.status}>{status}</p>}

        </div>
      </form>

      <div className={styles.busndvisit}>
        <div className={styles.businessgen}>
          <div className={styles.bh}>
            <IoMdTime />
            <h4>Business Hours</h4>
          </div>

          <div className={styles.dtandtime}>
            <div className={styles.dt1}>
              <h2>Monday - Friday</h2>
              <h3>8:00 AM - 6:00 PM</h3>
            </div>

            <div className={styles.dt2}>
              <h2>Saturday</h2>
              <h3>9:00 AM - 5:00 PM</h3>
            </div>

            <div className={styles.dt3}>
              <h2>Sunday</h2>
              <h3>Closed</h3>
            </div>

            <div className={styles.deliverygen}>
              <h2>Delivery</h2>
              <h3>24/7 Anyday, Across any state</h3>
            </div>
          </div>
        </div>

        <div className={styles.visitgen}>
          <div className={styles.icnndvisit}>
            <RiSendPlaneLine />
            <h2 className={styles.vos}>Visit Our Showroom</h2>
          </div>

          <p className={styles.exp}>
            Experience our furniture collection firsthand at our Lagos showroom.
            Our <br />
            knowledgeable team is ready to help you find the perfect pieces for
            your <br />
            space.
          </p>

          <div className={styles.cc}>
            <div className={styles.icnndconvenient}>
              <CiLocationOn />
              <h2>Conveniently located opposite FCMB on Olojo Drive</h2>
            </div>

            <div className={styles.icnndcall}>
              <IoCallOutline />

              <h2>Call ahead to ensure availability</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Getintouch;
