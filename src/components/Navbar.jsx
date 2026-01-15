import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* BRAND */}
        <Link to="/" className="text-sm font-medium">
          SPECIAL
        </Link>

        {/* NAV */}
        <nav className="flex gap-8 text-sm text-white/60">

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/process"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Process
          </NavLink>

          <NavLink
            to="/social"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Social
          </NavLink>

        </nav>
      </div>
    </header>
  )
}
