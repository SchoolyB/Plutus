import Header from "./components/Header"
import Home from "./components/index"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Transactions from "./components/Transactions"
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
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App