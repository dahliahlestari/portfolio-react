import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"
import { useAuth } from "../context/AuthContext"

export default function Checkout() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { user, loading: authLoading } = useAuth()

    const [product, setProduct] = useState(location.state?.product || null)
    const [loading, setLoading] = useState(!product)

    // Protect Route
    useEffect(() => {
        if (!authLoading && !user) {
            navigate("/login", {
                state: {
                    from: location
                },
                replace: true
            })
        }
    }, [user, authLoading, navigate, location])

    useEffect(() => {
        if (!product) {
            const fetchProduct = async () => {
                try {
                    const q = query(collection(db, "products"), where("slug", "==", slug))
                    const querySnapshot = await getDocs(q)

                    if (!querySnapshot.empty) {
                        const docData = querySnapshot.docs[0].data()
                        setProduct({ id: querySnapshot.docs[0].id, ...docData })
                    }
                } catch (error) {
                    console.error("Error fetching product:", error)
                } finally {
                    setLoading(false)
                }
            }
            fetchProduct()
        }
    }, [slug, product])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
    })

    // Pre-fill user data when user is loaded
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.displayName || "",
                email: user.email || ""
            }))
        }
    }, [user])

    if (authLoading || loading) return <div className="pt-40 text-center text-white/40 animate-pulse">Loading checkout...</div>
    if (!product) return <div className="pt-40 text-center text-white">Product not found.</div>

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Navigate to payment with form data AND product data AND custom data
        navigate(`/payment/${slug}`, {
            state: {
                ...formData,
                product,
                customData: location.state?.customData
            }
        })
    }

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>

            {/* PRODUCT SUMMARY */}
            <div className="bg-white/5 p-6 rounded-sm mb-10 border border-white/10">
                <h2 className="text-xl font-medium mb-1">{product.title}</h2>
                <p className="text-sm text-white/60 mb-4">{product.category}</p>

                {/* Custom Data Preview - Only if coming from Editor */}
                {location.state?.customData && (
                    <div className="my-4 pt-4 border-t border-white/10 text-xs space-y-2 text-white/70">
                        <p><strong className="uppercase text-white/40">Groom:</strong> {location.state.customData.groom}</p>
                        <p><strong className="uppercase text-white/40">Bride:</strong> {location.state.customData.bride}</p>
                        <p><strong className="uppercase text-white/40">Date:</strong> {location.state.customData.date}</p>
                    </div>
                )}

                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-4">
                    <span>Total</span>
                    <span className="text-lg font-medium">{product.price}</span>
                </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                        placeholder="Your Full Name"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!!user?.email} // Disable if logged in with email
                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">WhatsApp Number</label>
                    <input
                        required
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                        placeholder="0812..."
                    />
                    <p className="text-[10px] text-white/40 mt-1">We will send the file to this number.</p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition mt-8"
                >
                    Proceed to Payment
                </button>
            </form>

        </section>
    )
}
