import About from "./Components/About";
import Features from "./Components/Features";
import Frequently from "./Components/Frequently";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Investobull from "./Components/Investobull";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Header />
      <main className="bg-Background">
        <Hero />
        <Services />
        <Investobull />
        <Features />
        <Frequently />
        <About />
      </main>
    </>
  );
}

export default App;
