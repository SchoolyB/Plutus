import Header from "./components/Header.tsx"
import Home from "./components/index.tsx"
import Signup from "./components/Signup.tsx"
import Login from "./components/Login.tsx"
import Account from "./components/Account.tsx"
import Contact from "./components/Contact.tsx"
import About from "./components/About.tsx"
import Footer from "./components/Footer.tsx"
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