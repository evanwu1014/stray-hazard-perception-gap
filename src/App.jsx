import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HazardIndex from "./pages/HazardIndex";
import ScenarioAnalysis from "./pages/ScenarioAnalysis";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HazardIndex />} />
        <Route path="/scenario" element={<ScenarioAnalysis />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
