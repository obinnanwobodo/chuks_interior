import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Herosection/Hero";
import About from "@/Components/About/About";
import Products from "@/Components/Products/Products";
import Getintouch from "@/Components/Getintouch/Getintouch";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head" 
import Link from "next/link";




export default function Home() {
  return (
    
    <div>

      <Head>
  <title>Chuks Interior Decor Enterprise | Modern Interior & Premium Home Solutions in Lagos</title>
  <meta
    name="description"
    content="Transform your space with Chuks Interior Decor. We provide elegant interiors, premium furniture, and stylish home solutions and merchandise across Lagos."
  />

<link rel="canonical" href="https://www.chuksinteriorenterprise.com.ng/"/>

 

</Head>

      <div id="navbar">
        <Navbar/>
      </div>

     <div id="hero">
       <Hero/>
     </div>

     <div id="about">
       <About/>
     </div>

      <div id="products">
        <Products/>
      </div>


     <div id="contact">
       <Getintouch/>
     </div>

     <div id="footer">
       <Footer/>
     </div>
      
    </div>
  );
}
