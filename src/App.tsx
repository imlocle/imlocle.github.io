import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
// import ContactPage from './pages/ContactPage';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
