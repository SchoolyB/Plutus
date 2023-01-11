import React from "react"
import Header from "./components/Header"
import Home from "./pages/index"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Account from "./pages/Account"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./components/styles.css"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App