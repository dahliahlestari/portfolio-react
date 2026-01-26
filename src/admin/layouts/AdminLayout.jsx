import { Link, Outlet, useLocation } from "react-router-dom"

export default function AdminLayout() {
    const location = useLocation()
    console.log("AdminLayout rendering, current path:", location.pathname);

    const navItems = [
        { label: "Dashboard", path: "/admin" },
        { label: "Products", path: "/admin/products" },
        { label: "Orders", path: "/admin/orders" },
        { label: "Messages", path: "/admin/chat" },
    ]

    const mlClasses = (path) => {
        const isActive = location.pathname === path
        return `block px-4 py-3 text-sm tracking-widest uppercase transition-all duration-300 border-l-2 ${isActive ? "border-white text-white pl-6 bg-white/5" : "border-transparent text-white/40 hover:text-white hover:pl-6"
            }`
    }

    return (
        <div className="flex min-h-screen bg-[#08080a] text-white font-sans">

            {/* SIDEBAR - Fixed Width */}
            <aside className="w-64 border-r border-white/10 flex-shrink-0 flex flex-col bg-[#08080a]">

                {/* Header */}
                <div className="p-8 border-b border-white/10">
                    <h1 className="text-xl font-bold tracking-widest uppercase text-white">
                        Admin<span className="text-white/40">Panel</span>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={mlClasses(item.path)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Footer Links */}
                <div className="p-6 border-t border-white/10 space-y-4">
                    <a
                        href="http://localhost:5173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 text-xs uppercase tracking-widest transition-colors font-bold border border-green-500/20 rounded-sm text-center"
                    >
                        View Live Site
                    </a>
                </div>
            </aside>

            {/* MAIN CONTENT AREA - Grows to fill space */}
            <main className="flex-1 bg-[#08080a] overflow-x-hidden">
                <div className="p-10 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>

        </div>
    )
}
