import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About"
import Work from "./pages/Work/Work"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="helloworld"> hello world </p>
            <h1>hannah lee</h1>
            
            <nav className="navMenu">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="work.html">Work</a>
                <a href="https://github.com/hxnnahlee">Code</a>
                <a href="resume.pdf">Resume</a>
                <div className="dot"></div>
            </nav>
        <img src={'./me.jpg'} className="me-pic" id="me" alt="pic not found"/>
        <h2>Helloo, I'm a software engineer based out of NYC </h2>

      </header>
    </div>
  );
}

export default App;
