import Hero from "../components/Hero";
import CategorySection from "../components/Categories";
import InstagramGallery from "../components/InstagramGallery";
import Reviews from "../components/CustomerReviews";
import OurPromise from "../components/OurPromise";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <InstagramGallery />
      <Reviews />
      <OurPromise />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}