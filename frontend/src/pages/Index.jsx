import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/website-hit", { method: "POST" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <CompetitiveAdvantage />
      <Testimonials />
      <Team />
      <JoinWaitlist />
      <Footer />
    </div>
  );
};

export default Index; 