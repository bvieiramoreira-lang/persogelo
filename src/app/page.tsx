"use client";

import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoCTA from "@/components/landing/VideoCTA";
import Products from "@/components/landing/Products";
import WhyChoose from "@/components/landing/WhyChoose";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import LeadFormSection from "@/components/landing/LeadFormSection";
import Footer from "@/components/landing/Footer";
import Modal from "@/components/ui/Modal";
import VideoModal from "@/components/ui/VideoModal";

export default function Home() {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenBudget={() => setBudgetModalOpen(true)} />
      <Hero onOpenBudget={() => setBudgetModalOpen(true)} />
      
      <VideoCTA onOpenVideo={() => setVideoModalOpen(true)} />
      
      <Products />
      <WhyChoose onOpenBudget={() => setBudgetModalOpen(true)} />
      <About />
      <FAQ />
      <LeadFormSection />
      <Footer />
      
      <Modal 
        isOpen={budgetModalOpen} 
        onClose={() => setBudgetModalOpen(false)} 
      />

      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
        videoId="73frhE5i6ms"
      />
    </main>
  );
}
