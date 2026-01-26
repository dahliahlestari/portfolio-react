import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function STUDIOPRODUCTDETAIL() {
    const { slug } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const q = query(collection(db, "products"), where("slug", "==", slug))
                const querySnapshot = await getDocs(q)
                if (!querySnapshot.empty) {
                    setProduct({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() })
                }
            } catch (error) {
                console.error("Error fetching product:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [slug])

    if (loading) return <div className="text-white text-center pt-20">Loading...</div>
    if (!product) return <div className="text-white text-center pt-20">Product Not Found</div>

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-20 animate-fade-in relative z-10">
            {/* BACK BUTTON */}
            <Link to="/studio" className="absolute top-28 left-6 md:left-20 text-xs text-white/40 hover:text-white uppercase tracking-widest transition z-20">
                ← Back
            </Link>

            <div className="flex flex-col md:flex-row gap-12 mt-16 max-w-6xl mx-auto">
                {/* LEFT: IMAGE PREVIEW */}
                <div className="w-full md:w-1/2 aspect-[3/4] bg-white/5 relative overflow-hidden group">
                    {product.previewImage ? (
                        <img
                            src={product.previewImage}
                            alt={product.title}
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/20 absolute inset-0">
                            {product.title} Preview
                        </div>
                    )}
                </div>

                {/* RIGHT: DETAILS */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-mono text-white/40 uppercase mb-4 block">
                        {product.category || "Template Series"} / 00{product.id ? product.id.slice(0, 2) : "1"}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                        {product.title}
                    </h1>

                    <p className="text-2xl font-light text-white/80 mb-8 border-l-2 border-white/20 pl-4 py-2">
                        {product.price}
                    </p>

                    <div className="mb-10 text-white/60 leading-relaxed max-w-md">
                        <p>{product.description}</p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-md">
                        <Link
                            to={`/editor/${slug}`}
                            className="block w-full bg-white text-black py-4 text-center uppercase tracking-widest font-bold hover:bg-gray-200 transition"
                        >
                            Customize & Buy
                        </Link>

                        {product.previewLink && (
                            <Link
                                to={product.previewLink}
                                target="_blank"
                                className="block w-full border border-white/20 py-4 text-center text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
                            >
                                Live Preview
                            </Link>
                        )}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 text-xs text-white/30 space-y-2 font-mono">
                        <p>• INSTANT DELIVERY</p>
                        <p>• FULLY EDITABLE</p>
                        <p>• LIFETIME ACCESS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
