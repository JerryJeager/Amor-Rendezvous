import "./index.css"
import Features from "./components/ui/LandingPage/Features";
import Hero from "./components/ui/LandingPage/Hero";
import Reviews from "./components/ui/LandingPage/Reviews";

function App() {
  return (
    <div className="bg-lightPink wine-scroll">
      <Hero />
      <Features />
      <Reviews />
    </div>
  );
}

export default App;
