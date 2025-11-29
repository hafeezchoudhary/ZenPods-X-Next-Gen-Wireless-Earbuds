"use client"
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Footer from "./components/footer";


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
