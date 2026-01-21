import { Link, Outlet, useLocation } from "react-router-dom"

export default function AdminLayout() {
    const location = useLocation()

    const navItems = [
        { label: "Overview", path: "/" },
        { label: "Orders", path: "/orders" },
        { label: "Products", path: "/products" },
        { label: "Messages", path: "/chat" },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <div className="min-h-screen bg-[#08080a] flex text-white font-sans selection:bg-white selection:text-black">

            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/10 flex flex-col fixed h-full bg-[#08080a]">
                <div className="p-8 border-b border-white/10">
                    <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-white">
                        Studio<span className="text-white/40">Admin</span>
                    </h1>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-3 text-sm tracking-widest uppercase transition-all duration-300 border-l-2 ${isActive(item.path)
                                    ? "border-white text-white pl-6"
                                    : "border-transparent text-white/40 hover:text-white hover:pl-6"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/10">
                    <button className="w-full text-left px-4 py-2 text-white/20 hover:text-white text-xs uppercase tracking-widest transition-colors">
                        Logout
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 ml-64 p-12">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
