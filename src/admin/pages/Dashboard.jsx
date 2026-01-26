export default function Dashboard() {
    return (
        <div className="animate-fade-in">
            <header className="mb-12">
                <h2 className="text-4xl font-light mb-2 text-white">Dashboard Overview</h2>
                <p className="text-white/40 text-sm tracking-wide">Welcome back, Admin.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Stats Card 1 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Total Products</h3>
                    <p className="text-3xl font-medium text-white">Check 'Products'</p>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Pending Orders</h3>
                    <p className="text-3xl font-medium text-white">Check 'Orders'</p>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">System Status</h3>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-sm font-medium text-green-400">Online</p>
                    </div>
                </div>

            </div>

            <div className="mt-12 p-8 border border-white/10 rounded-sm bg-white/5">
                <h3 className="text-xl font-light mb-4">Quick Actions</h3>
                <div className="flex gap-4">
                    <a href="/admin/products" className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition">
                        Manage Products
                    </a>
                    <a href="/admin/orders" className="border border-white/20 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition">
                        View Orders
                    </a>
                </div>
            </div>
        </div>
    )
}
