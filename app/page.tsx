import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import AboutUs from "./components/AboutUs";
import OurPartners from "./components/OurPartners";
import Services from "./components/Services";
import CallNow from "./components/CallNow";

export default function Home() {
  return (
    <div>
      <CallNow />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Testimonials />
      <OurPartners />
      <Faq />
      <ContactInfo />
      <Footer />
    </div>
  );
}
