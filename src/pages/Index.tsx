import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { TrustedBrands } from "@/components/site/TrustedBrands";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Journal } from "@/components/site/Journal";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TrustedBrands />
      <Portfolio />
      {/* <Testimonials /> */}
      <Journal />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
