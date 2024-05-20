import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Second from "./components/Second.tsx";
import ThirdSection from "./components/Third.tsx";
import Fourth from "./components/Fourth.tsx";
import HowItWorks from "./components/HowItWorks";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Second Section */}
      <Second />
      {/* Third Section */}
      <ThirdSection />
      {/* How it works section */}
      <Fourth />
      <HowItWorks />
      {/* Partners */}
      <Partners />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
