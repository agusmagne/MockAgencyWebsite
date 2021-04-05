import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
