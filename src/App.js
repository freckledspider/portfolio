import { Outlet } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;