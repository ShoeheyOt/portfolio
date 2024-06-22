import "./App.css";
import { Nav } from "./components/Nav";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="font-montserrat font-semibold text-primary text-opacity-90 overflow-x-hidden">
      <Hero />
      <Nav />
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
