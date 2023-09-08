import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="marquee">
          <div className="marquee-text">
            "Until you make the unconscious conscious, it will direct your life
            and you will call it fate."
          </div>
        </div>
        <p className="helloworld"> hello world </p>
        <h1>hannah lee</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
