import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

import MainLayout from "./layouts/MainLayout"

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
import Wedding01 from "./templates/Wedding01"


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
    <>
      <Routes>
        {/* MAIN SITE LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/social" element={<Social />} />
          <Route path="/studio" element={<StudioProduct />} />
          <Route path="/studio/:slug" element={<StudioProductDetail />} />
          <Route path="/checkout/:slug" element={<Checkout />} />
          <Route path="/payment/:slug" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Route>

        {/* STANDALONE PREVIEWS (NO LAYOUT) */}
        <Route path="/preview/wedding-01" element={<Wedding01 />} />
        <Route path="/SarahAndJames" element={<Wedding01 />} />
      </Routes>
    </>
  )
}
