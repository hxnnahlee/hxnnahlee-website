import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
            "✿  ♡  ✧  ☁️  ☆ ✿  ♡  ✧  ☁️  ☆ ✿  ♡  ✧  ☁️  ☆"
          </div>
        </div>
        <p className="helloworld">
  backend engineer in nyc ✿
</p>        <h1>hannah lee</h1>
<div className="divider" />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
