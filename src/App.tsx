import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import About from "@pages/About";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Work from "@pages/Work";
import Writing from "@pages/Writing";
import Consulting from "@pages/Consulting";
import AlfredCaseStudy from "@pages/work/caseStudies/AlfredCaseStudy";
import CodeIntelligenceCaseStudy from "@pages/work/caseStudies/CodeIntelligenceCaseStudy";
import NeptuneCaseStudy from "@pages/work/caseStudies/NeptuneCaseStudy";
import PiSyncCaseStudy from "@pages/work/caseStudies/PiSyncCaseStudy";
import AlfredChat from "@components/feature/AlfredChat";
import Navbar from "@components/bar/Navbar";
import Footer from "@components/page/Footer";
import { ChatProvider } from "@context/ChatContext";
import { ALFRED_CASE_STUDY_PATH } from "@data/alfred";
import { PISYNC_CASE_STUDY_PATH } from "@data/pisync";
import { CODE_INTELLIGENCE_CASE_STUDY_PATH } from "@data/codeIntelligence";
import { NEPTUNE_CASE_STUDY_PATH } from "@data/neptune";
import "@/App.css";

/**
 * HashRouter uses window.location.hash for routing (e.g. "#/services").
 * For in-page anchors, we support a SECOND hash:
 *   "#/services#pricing"  -> scroll to element with id="pricing"
 *   "#/work/client#neptune" -> scroll to id="neptune"
 */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const raw = window.location.hash; // ex: "#/services#pricing"
    const parts = raw.split("#"); // ["", "/services", "pricing"]

    const anchor = parts.length >= 3 ? parts[2] : "";

    // If we have an anchor, scroll to it after paint.
    if (anchor) {
      requestAnimationFrame(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    // Otherwise, normal route change => scroll to top.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <ChatProvider>
      <Router>
        <ScrollManager />
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Case study routes */}
              <Route
                path={NEPTUNE_CASE_STUDY_PATH}
                element={<NeptuneCaseStudy />}
              />
              <Route
                path={ALFRED_CASE_STUDY_PATH}
                element={<AlfredCaseStudy />}
              />
              <Route
                path={CODE_INTELLIGENCE_CASE_STUDY_PATH}
                element={<CodeIntelligenceCaseStudy />}
              />
              <Route
                path={PISYNC_CASE_STUDY_PATH}
                element={<PiSyncCaseStudy />}
              />
            </Routes>
          </main>
          <Footer />
          <AlfredChat />
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;
