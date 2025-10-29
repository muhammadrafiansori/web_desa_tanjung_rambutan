import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OrganizationalStructure from './pages/OrganizationalStructure' // Import the new page
import PopulationData from './pages/PopulationData' // Import PopulationData page
import History from './pages/History'; // Import History page

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pemerintahan/struktur" element={<OrganizationalStructure />} /> {/* Ensure this route is present */}
            <Route path="/data-populasi" element={<PopulationData />} /> {/* Route for Population Data page */}
            <Route path="/profil/sejarah" element={<History />} /> {/* Route for History page */}
            {/* Tambahkan route lain di sini nanti */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
