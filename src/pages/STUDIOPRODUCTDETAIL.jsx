import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function StudioProductDetail() {
    const { slug } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const q = query(collection(db, "products"), where("slug", "==", slug))
                const querySnapshot = await getDocs(q)

                if (!querySnapshot.empty) {
                    const docData = querySnapshot.docs[0].data()
                    setProduct({ id: querySnapshot.docs[0].id, ...docData })
                } else {
                    setProduct(null)
                }
            } catch (error) {
                console.error("Error fetching product:", error)
            } finally {
                setLoading(false)
            }
        }

        if (slug) fetchProduct()
    }, [slug])

    if (loading) return <div className="pt-40 text-center text-white/40 animate-pulse">Loading details...</div>
    if (!product) return <div className="pt-40 text-center text-white/60">Product not found.</div>

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

                {/* LEFT - IMAGE */}
                <div className="w-full" data-aos="fade-up">
                    <div className="aspect-[3/4] bg-white/5 w-full rounded-sm overflow-hidden relative">
                        {/* Replace with actual image when available */}
                        {product.previewImage ? (
                            <img src={product.previewImage} alt={product.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/20 absolute inset-0">
                                {product.title} Preview
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT - DETAILS */}
                <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">

                    <div className="mb-8">
                        <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">{product.category}</span>
                        <h1 className="text-3xl md:text-5xl font-semibold mb-4">{product.title}</h1>
                        <p className="text-xl text-white/80">{product.price}</p>
                    </div>

                    <div className="mb-10 text-white/60 leading-relaxed max-w-md">
                        <p>{product.description}</p>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Pass Product State to Checkout to avoid re-fetching if possible, though Checkout should verify */}
                            <Link
                                to={`/checkout/${product.slug}`}
                                state={{ product }}
                                className="inline-block border border-white/20 px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 text-center"
                            >
                                Buy Now
                            </Link>

                            {product.previewLink && (
                                <Link
                                    to={product.previewLink}
                                    target="_blank"
                                    className="inline-block border border-white/20 px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 text-center"
                                >
                                    Live Preview
                                </Link>
                            )}
                        </div>

                        <div className="mt-6 flex flex-col gap-1">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">
                                Secure Digital Payment
                            </p>
                            <p className="text-[10px] text-white/30">
                                Accepting BCA, Mandiri, and QRIS (Gopay/OVO/Dana)
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
