import "./index.css"
import Features from "./components/ui/LandingPage/Features";
import Hero from "./components/ui/LandingPage/Hero";
import Reviews from "./components/ui/LandingPage/Reviews";
import Contact from "./components/ui/LandingPage/Contact";

function App() {
  return (
    <div className="bg-lightPink wine-scroll">
      <Hero />
      <Features />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
