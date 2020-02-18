import React from "react";
import "../src/sass/css/App.css";
import Landing from "../src/Components/Landing";
import Projects from "../src/Components/Projects";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <div className="App">
     <Landing />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
