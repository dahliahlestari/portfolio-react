import { useState, useEffect } from "react"
import { collection, getDocs, updateDoc, doc, orderBy, query } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        setLoading(true)
        try {
            // Note: "orders" collection doesn't exist yet, we will create it when connecting the User App.
            // For now, this just tries to fetch. If empty, it shows empty state.
            const q = query(collection(db, "orders"), orderBy("createdAt", "desc"))
            const querySnapshot = await getDocs(q)
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setOrders(items)
        } catch (error) {
            console.log("No orders collection yet or permission denied (expected if new).")
        } finally {
            setLoading(false)
        }
    }

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await updateDoc(doc(db, "orders", id), {
                status: newStatus
            })
            fetchOrders()
        } catch (error) {
            console.error("Error updating status:", error)
        }
    }

    return (
        <div>
            <header className="mb-10">
                <h2 className="text-3xl font-light mb-1">Orders</h2>
                <p className="text-white/40 text-sm tracking-wide">Track incoming payments and customer orders.</p>
            </header>

            {loading ? (
                <p className="text-white/40 animate-pulse">Loading orders...</p>
            ) : (
                <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Order ID</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Customer</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Product</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Amount</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center">
                                        <p className="text-white/40 text-sm mb-2">No orders found.</p>
                                        <p className="text-white/20 text-xs">Orders from the main website will appear here.</p>
                                    </td>
                                </tr>
                            ) : (
                                orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-white/5 transition">
                                        <td className="px-6 py-4 text-xs font-mono text-white/40">#{order.id.slice(-6)}</td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-white">{order.customerName}</p>
                                            <p className="text-xs text-white/40">{order.customerEmail}</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-white/80">{order.productTitle}</td>
                                        <td className="px-6 py-4 text-sm text-white/80">{order.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm ${order.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                                                    order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-white/10 text-white/40'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {order.status === 'pending' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(order.id, 'paid')}
                                                    className="text-green-400 hover:text-green-300 text-xs uppercase tracking-wider underline decoration-transparent hover:decoration-green-400 transition underline-offset-4"
                                                >
                                                    Mark Paid
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
