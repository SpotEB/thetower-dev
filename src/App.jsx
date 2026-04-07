import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <div className="footer-content">
          <Link to="/contact" className="footer-contact-btn">Contact</Link>
          <p className="footer-copy">&copy; {new Date().getFullYear()} The Tower - thetower.dev</p>
        </div>
      </footer>
    </div>
  )
}

export default App
