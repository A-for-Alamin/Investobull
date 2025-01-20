import Features from "./Components/Features";
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
      </main>
    </>
  );
}

export default App;
