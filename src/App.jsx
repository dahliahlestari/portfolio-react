import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import GraphicDesign from "./pages/GraphicDesign"
import SocialMedia from "./pages/SocialMedia"
import ContentEditor from "./pages/ContentEditor"

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* BACKGROUND ART */}
      <div className="bg-art-gradient" />
      <div className="bg-art-stripes" />

      <Navbar />

      <main className="pt-32 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/content-editor" element={<ContentEditor />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
