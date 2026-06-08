import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HazardIndex from "./pages/HazardIndex";
import ScenarioAnalysis from "./pages/ScenarioAnalysis";
import BehaviorDetail from "./pages/BehaviorDetail";
import ScrollToTop from "./components/ScrollToTop";
import { I18nProvider } from "./context/I18nContext";
import { ViewModeProvider } from "./context/ViewModeContext";
import SEOManager from "./components/SEOManager";

function App() {
  return (
    <I18nProvider>
      <ViewModeProvider>
        <HashRouter>
          <SEOManager />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HazardIndex />} />
            <Route path="/scenario" element={<ScenarioAnalysis />} />
            <Route path="/behavior/:id" element={<BehaviorDetail />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ViewModeProvider>
    </I18nProvider>
  );
}

export default App;
