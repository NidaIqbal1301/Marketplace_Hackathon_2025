import Image from "next/image";
import Brand from "./components/brand";
import Header from "./components/header";
import DownHeader from "./components/downHeader";
import HeroSection from "./components/heroSection";
import NewCeramics from "./components/newCeramics";
import PopularProduct from "./components/pouplarProduct";
import Benefits from "./components/benefits";
import Touch from "./components/touch";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="">
      
      <Header/>
      <DownHeader/>
      <HeroSection/>
      <Brand/>
      <NewCeramics/>
      <PopularProduct/>
      <Benefits/>
      <Touch/>
      <Footer/>

    </div>
  );
}
