import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artifacts from './pages/Artifacts';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artifacts" element={<Artifacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
