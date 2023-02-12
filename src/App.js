import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;