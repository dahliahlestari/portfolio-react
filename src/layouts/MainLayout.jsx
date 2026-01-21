import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout() {
    return (
        <div className="relative overflow-x-hidden bg-base">

            {/* BACKGROUND ART */}
            <div className="bg-art-gradient" />
            <div className="bg-art-stripes" />

            <Navbar />

            <main className="pt-32 relative z-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
