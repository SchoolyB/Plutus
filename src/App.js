import Header from "./components/Header"
import Home from "./components/index"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Account from "./components/Account"
import Contact from "./components/Contact"
import About from "./components/About"
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