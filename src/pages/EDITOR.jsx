import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

// Import Templates
import RedElegant from "../templates/RedElegant"
import ModernMinimal from "../templates/ModernMinimal"
import BirthdayBash from "../templates/BirthdayBash"
import VintageArch from "../templates/VintageArch" // NEW
// Fallback
import Wedding01 from "../templates/Wedding01"

export default function Editor() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    // Customization State
    const [customData, setCustomData] = useState({
        groom: "Groom Name",
        bride: "Bride Name",
        date: "01.01.2026",
        time: "10:00",
        venue: "Grand Hall",
        description: "Join us for our special day!"
    })

    // Fetch Product
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const q = query(collection(db, "products"), where("slug", "==", slug))
                const querySnapshot = await getDocs(q)
                if (!querySnapshot.empty) {
                    setProduct({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() })
                }
            } catch (error) {
                console.error("Error:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [slug])

    const handleChange = (e) => {
        setCustomData({ ...customData, [e.target.name]: e.target.value })
    }

    const handleCheckout = () => {
        if (!product) return
        // Navigate to checkout with customizations
        navigate(`/checkout/${slug}`, {
            state: {
                product: product,
                customData: customData
            }
        })
    }

    // Render Template based on Slug (Simple Mapping)
    const renderTemplate = () => {
        if (!product) return null

        // This mapping logic should ideally be more robust or stored in DB
        if (product.slug.includes('red')) return <RedElegant data={customData} />
        if (product.slug.includes('minimal')) return <ModernMinimal data={customData} />
        if (product.slug.includes('birthday')) return <BirthdayBash data={customData} />
        if (product.slug.includes('vintage') || product.slug.includes('arch')) return <VintageArch data={customData} /> // NEW

        return <RedElegant data={customData} /> // Default fallback
    }

    if (loading) return <div className="text-white text-center pt-20">Loading Editor...</div>
    if (!product) return <div className="text-white text-center pt-20">Product Not Found</div>

    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row">

            {/* LEFT PANEL - CONTROLS */}
            <div className="w-full md:w-1/3 bg-[#111] border-r border-white/10 p-6 overflow-y-auto h-screen z-50 shadow-2xl">
                <div className="mb-8">
                    <button onClick={() => navigate(-1)} className="text-white/40 hover:text-white text-xs uppercase tracking-widest mb-4">
                        ← Back
                    </button>
                    <h2 className="text-2xl font-light text-white mb-1">Customize</h2>
                    <p className="text-white/40 text-sm">{product.title}</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Groom's Name</label>
                        <input name="groom" value={customData.groom} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Bride's Name</label>
                        <input name="bride" value={customData.bride} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Date</label>
                            <input name="date" value={customData.date} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Time</label>
                            <input name="time" value={customData.time} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Venue / Location</label>
                        <input name="venue" value={customData.venue} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Invitation Message</label>
                        <textarea name="description" value={customData.description} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-white/40 outline-none h-24" />
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full bg-white text-black py-4 uppercase tracking-widest font-bold hover:bg-gray-200 transition mt-4"
                    >
                        Save & Continue
                    </button>
                    <p className="text-[10px] text-white/30 text-center mt-2">
                        You can review your details at checkout.
                    </p>
                </div>
            </div>

            {/* RIGHT PANEL - LIVE PREVIEW */}
            <div className="w-full md:w-2/3 h-screen overflow-y-auto relative bg-gray-900">
                <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full text-xs text-white z-50 pointer-events-none backdrop-blur-md border border-white/10">
                    Live Preview Mode
                </div>
                {/* Scale the preview mostly to fit if needed, or just scroll */}
                <div className="transform scale-[0.9] origin-top md:origin-top-center h-full">
                    {renderTemplate()}
                </div>
            </div>

        </div>
    )
}
