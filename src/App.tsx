import "./App.css";
import { Nav } from "./components/Nav";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="font-mono font-semibold text-primary text-opacity-90 mx-24">
      <Nav />
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
