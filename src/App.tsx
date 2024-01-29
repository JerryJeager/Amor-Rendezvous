import "./index.css";
import Features from "./components/ui/LandingPage/Features";
import Hero from "./components/ui/LandingPage/Hero";
import Reviews from "./components/ui/LandingPage/Reviews";
import Contact from "./components/ui/LandingPage/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <main className="bg-lightPink wine-scroll">
        <Hero />
        <Features />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
