import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Herosection/Hero";
import About from "@/Components/About/About";
import Products from "@/Components/Products/Products";
import Getintouch from "@/Components/Getintouch/Getintouch";
import Footer from "@/Components/Footer/Footer";





export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <div id="about">
       <About/>
     </div>
      <Products/>
      <Getintouch/>
      <Footer/>
      
    </div>
  );
}
