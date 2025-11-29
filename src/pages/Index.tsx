import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recap from "@/components/Recap";
import Services from "@/components/Services";
import Upcoming from "@/components/Upcoming";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Recap />
      <Services />
      <Upcoming />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
