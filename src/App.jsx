import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HazardIndex from "./pages/HazardIndex";
import ScenarioAnalysis from "./pages/ScenarioAnalysis";
import { I18nProvider } from "./context/I18nContext";

function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HazardIndex />} />
          <Route path="/scenario" element={<ScenarioAnalysis />} />
        </Routes>
        <Footer />
      </HashRouter>
    </I18nProvider>
  );
}

export default App;
