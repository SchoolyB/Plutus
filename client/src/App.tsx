import React from "react"
import PageNotFound from "./pages/PageNotFound"
import Header from "./components/Header"
import Home from "./pages/index"
import Signup from "./pages/Signup"
import Email from './pages/VerifyEmail'
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
        <Route path="*" element={<PageNotFound/>} />
        <Route path="Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App