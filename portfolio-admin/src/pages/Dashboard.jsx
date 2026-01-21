export default function Dashboard() {
    return (
        <div>
            <header className="mb-12">
                <h2 className="text-3xl font-light mb-2">Dashboard</h2>
                <p className="text-white/40 text-sm tracking-wide">Welcome back to your studio control center.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* CARD 1 */}
                <div className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition duration-500 group">
                    <h3 className="text-[10px] items-center gap-2 flex font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                        Total Revenue
                        <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                    </h3>
                    <p className="text-4xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
                        IDR 4.5M
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-white/20">Updated just now</span>
                        <span className="text-green-400">+12% vs last month</span>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition duration-500 group">
                    <h3 className="text-[10px] items-center gap-2 flex font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                        Active Orders
                        <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                    </h3>
                    <p className="text-4xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
                        8
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-white/20">Pending Processing</span>
                        <span className="text-white">2 New</span>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition duration-500 group">
                    <h3 className="text-[10px] items-center gap-2 flex font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                        Messages
                    </h3>
                    <p className="text-4xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
                        3
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-white/20">Unread Inquiries</span>
                        <span className="text-white/60 hover:text-white cursor-pointer transition">View Chat -&gt;</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
