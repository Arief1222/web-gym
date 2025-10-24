/* eslint-disable prettier/prettier */

import FacilitesSection from "@/components/beranda/FacilitiesSection";
import HeroSection from "@/components/beranda/HeroSection";
import Statistic from "@/components/beranda/Statistic";
import ClassSection from '@/components/beranda/ClassSection'
import AboutSection from "@/components/beranda/AboutSection";
import MembershipSection from "@/components/beranda/MembershipSection";
export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Statistik */}
       <Statistic />

      {/* Fasilitas */}
      <FacilitesSection />

      {/* Class */}
      <ClassSection />

       {/* About */}
      <AboutSection />

       {/* Membership */}
      <MembershipSection />
    </main>
  );
}
