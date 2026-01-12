import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">

        <Link to="/" className="text-sm font-medium">
          Dahliah Lestari
        </Link>

        <nav className="flex gap-8 text-sm text-white/60">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/graphic-design"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Graphic Design
          </NavLink>


          <NavLink
            to="/social-media"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Social & Ads
          </NavLink>

          <NavLink
            to="/content-editor"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Content
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
