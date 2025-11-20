import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artifacts from "./pages/Artifacts";
import ArtifactDetail from "./pages/ArtifactDetail";
import "./App.css";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artifacts" element={<Artifacts />} />
            <Route path="/artifacts/:id" element={<ArtifactDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
