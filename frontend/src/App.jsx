import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import OrganizationalStructure from './pages/OrganizationalStructure' // Import the new page
import PopulationData from './pages/PopulationData' // Import PopulationData page
import History from './pages/History'; // Import History page
import Geography from './pages/Geography'; // Import Geography page
import Berita from './pages/Berita'; // Import Berita page
import BeritaDetail from './pages/BeritaDetail'; // Import BeritaDetail page
import ProfilDesa from './pages/ProfilDesa'; // Import ProfilDesa page
import Gallery from './pages/Gallery'; // Import Gallery page

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pemerintahan/struktur" element={<OrganizationalStructure />} /> {/* Ensure this route is present */}
            <Route path="/data-populasi" element={<PopulationData />} /> {/* Route for Population Data page */}
            <Route path="/profil/sejarah" element={<History />} /> {/* Route for History page */}
            <Route path="/profil/geografis" element={<Geography />} /> {/* Route for Geography page */}
            <Route path="/berita" element={<Berita />} /> {/* Route for Berita listing page */}
            <Route path="/berita/:slug" element={<BeritaDetail />} /> {/* Route for Berita detail page */}
            <Route path="/profil-desa" element={<ProfilDesa />} /> {/* Route for Profil Desa page */}
            <Route path="/galeri" element={<Gallery />} /> {/* Route for Gallery page */}
            {/* Tambahkan route lain di sini nanti */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
