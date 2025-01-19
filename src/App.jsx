import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import { Services } from "./Components/Services";

function App() {
  return (
    <>
      <Header />
      <main className="bg-Background">
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default App;
