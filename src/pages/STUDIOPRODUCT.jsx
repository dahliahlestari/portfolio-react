import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function StudioProduct() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"))
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setProducts(items)
            } catch (error) {
                console.error("Error fetching products:", error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const weddingTemplates = products.filter(p => p.category === "Wedding Series 01")
    const eventTemplates = products.filter(p => p.category === "Event Series 02")

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="mb-20" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-semibold mb-6">Studio Product</h1>
                <p className="text-white/60 max-w-xl leading-relaxed">
                    Premium digital invitation templates for your special moments.
                    Ready to use, easy to customize.
                </p>
            </div>

            {loading ? (
                <div className="text-white/40 animate-pulse text-center py-20">
                    <p className="text-xl mb-2">Loading collection...</p>
                    <p className="text-xs">Connecting to Studio Database</p>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-20 border border-white/10 rounded-lg bg-white/5">
                    <h3 className="text-2xl font-light mb-4">No Products Found</h3>
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-mono max-w-md mx-auto whitespace-pre-wrap">
                            ERROR DETAIL: {error}
                        </div>
                    )}
                    <p className="text-white/60 max-w-md mx-auto mb-6">
                        The product catalog is currently empty. This might be because the database hasn't been populated yet.
                    </p>
                    <div className="text-xs text-white/40 bg-black/20 p-4 rounded inline-block text-left">
                        <p className="font-bold mb-2">Troubleshooting for Admin:</p>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Check Firebase Firestore Permissions (Rules).</li>
                            <li>Run the product seed script.</li>
                            <li>Ensure you are connected to the internet.</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <>
                    {/* WEDDING SECTION */}
                    {weddingTemplates.length > 0 && (
                        <div className="mb-24" data-aos="fade-up">
                            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                                <h2 className="text-2xl font-medium">Wedding Templates</h2>
                                <span className="text-xs uppercase tracking-widest text-white/40">Series 01</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {weddingTemplates.map((item) => (
                                    <Link key={item.id} to={`/studio/${item.slug}`} className="group cursor-pointer">
                                        <div className="aspect-[3/4] bg-white/5 mb-4 group-hover:bg-white/10 transition-colors duration-500 rounded-sm" />
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <p className="text-xs text-white/40 mt-1">{item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* EVENT SECTION */}
                    {eventTemplates.length > 0 && (
                        <div className="mb-24" data-aos="fade-up">
                            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                                <h2 className="text-2xl font-medium">Event Templates</h2>
                                <span className="text-xs uppercase tracking-widest text-white/40">Series 02</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {eventTemplates.map((item) => (
                                    <Link key={item.id} to={`/studio/${item.slug}`} className="group cursor-pointer">
                                        <div className="aspect-[3/4] bg-white/5 mb-4 group-hover:bg-white/10 transition-colors duration-500 rounded-sm" />
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <p className="text-xs text-white/40 mt-1">{item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* CUSTOM SECTION */}
            <div className="py-20 border-t border-white/10" data-aos="fade-up">
                <div className="max-w-2xl">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">
                        Custom Request
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Need something unique?
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-10">
                        I offer custom design consultation for weddings and special events.
                        If you have a specific vision in mind, let's chat and make it happen.
                    </p>

                    <a
                        href="https://wa.me/6281299723970?text=Hello,%20I%20would%20like%20to%20consult%20for%20a%20custom%20design."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
                    >
                        Chat for Consultation
                    </a>
                </div>
            </div>

        </section>
    )
}
