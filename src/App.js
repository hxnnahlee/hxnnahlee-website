import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About"
import NavBar from "./components/NavBar/NavBar"
import Work from "./pages/Work/Work"
import Home from "./pages/Home/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="helloworld"> hello world </p>
            <h1>hannah lee</h1>
            <BrowserRouter>
            <NavBar/>
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
