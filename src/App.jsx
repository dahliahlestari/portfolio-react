import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/SPECIAL"
import Work from "./pages/WORK"
import Social from "./pages/SOCIAL"
import Process from "./pages/PROCESS"
import WorkDetail from "./pages/WORKDETAIL"


export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-base">

      {/* BACKGROUND ART */}
      <div className="bg-art-gradient" />
      <div className="bg-art-stripes" />

      <Navbar />

      <main className="pt-32 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/social" element={<Social />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
