import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

import MainLayout from "./layouts/MainLayout"
import { AuthProvider } from "./context/AuthContext"

import Home from "./pages/SPECIAL"
import Work from "./pages/WORK"
import Social from "./pages/SOCIAL"
import Process from "./pages/PROCESS"
import WorkDetail from "./pages/WORKDETAIL"
import StudioProduct from "./pages/STUDIOPRODUCT"
import StudioProductDetail from "./pages/STUDIOPRODUCTDETAIL"
import Checkout from "./pages/CHECKOUT"
import Payment from "./pages/PAYMENT"
import Success from "./pages/SUCCESS"
import Editor from "./pages/EDITOR"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// Admin Imports
import AdminLayout from "./admin/layouts/AdminLayout"
import AdminDashboard from "./admin/pages/Dashboard"
import AdminProducts from "./admin/pages/Products"
import AdminOrders from "./admin/pages/Orders"

// Templates
import Wedding01 from "./templates/Wedding01"
import RedElegant from "./templates/RedElegant"
import ModernMinimal from "./templates/ModernMinimal"
import BirthdayBash from "./templates/BirthdayBash"
import VintageArch from "./templates/VintageArch"

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <AuthProvider>
      <Routes>
        {/* MAIN SITE LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/social" element={<Social />} />
          <Route path="/studio" element={<StudioProduct />} />
          <Route path="/studio/:slug" element={<StudioProductDetail />} />
          <Route path="/editor/:slug" element={<Editor />} />
          <Route path="/checkout/:slug" element={<Checkout />} />
          <Route path="/payment/:slug" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Route>

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="chat" element={<div className="p-10 text-center text-white">Feature Coming Soon</div>} />
        </Route>

        {/* STANDALONE PREVIEWS (NO LAYOUT) */}
        <Route path="/preview/wedding-01" element={<Wedding01 />} />
        <Route path="/preview/red-elegant" element={<RedElegant />} />
        <Route path="/preview/modern-minimal" element={<ModernMinimal />} />
        <Route path="/preview/birthday-bash" element={<BirthdayBash />} />
        <Route path="/preview/vintage-arch" element={<VintageArch />} />

        {/* Actual Client Routes (Mapped by Slug) */}
        <Route path="/SarahAndJames" element={<ModernMinimal />} />
        <Route path="/AntonAndIrina" element={<RedElegant />} />
        <Route path="/IsabellaBirthday" element={<BirthdayBash />} />
      </Routes>
    </AuthProvider>
  )
}
