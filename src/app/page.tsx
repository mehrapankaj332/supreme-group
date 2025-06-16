import Header from "../components/header/Header";
import HeroSection from "../components/firstsection/HeroSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";
import Section360 from "../components/mainsection/Section360";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Section360 />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
