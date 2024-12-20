import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/header";
import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Header/>
      <About/>
      <Contact/>
    </div>
  );
}
