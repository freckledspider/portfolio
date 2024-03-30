import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Main from "./pages/main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics/>
    </div>
  );
}

export default App;