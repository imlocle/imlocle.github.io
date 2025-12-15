import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ClientProjects from "./pages/work/ClientProjects";
import TechnicalProjects from "./pages/work/TechnicalProjects";
import AlfredChat from "./components/AlfredChat";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/client" element={<ClientProjects />} />
            <Route path="/work/technical" element={<TechnicalProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AlfredChat />
      </div>
    </Router>
  );
}

export default App;
