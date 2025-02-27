import About from "./Components/About";
import Choose from "./Components/Choose";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Frequently from "./Components/Frequently";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Investobull from "./Components/Investobull";
import Payment from "./Components/Payment";
import Services from "./Components/Services";
import Trial from "./Components/Trial";

function App() {
  return (
    <>
      <Header />
      <main className="bg-Background text-white font-Poppins">
        <Hero />
        <Services />
        <Investobull />
        <Features />
        <Choose />
        <Frequently />
        <About />
        <Trial />
        <Payment />
        <Footer />
      </main>
    </>
  );
}

export default App;
