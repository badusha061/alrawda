import AboutHomeSection from "@/components/sections/AboutHomeSection";
import ContactHome from "@/components/sections/ContactHome";
import CustomerSection from "@/components/sections/CustomerSection";
import HeroSection from "@/components/sections/heroSection";  // Correct import
import TopServiceSection from "@/components/sections/TopServiceSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Al Rawda",
  icons: {
    icon: "/favicon.ico"
  }
};



export default function Home() {
  return (
    <div>
      <HeroSection /> 
      <AboutHomeSection /> 
      <TopServiceSection /> 
      <CustomerSection  /> 
      <ContactHome />
    </div>
  );
}
