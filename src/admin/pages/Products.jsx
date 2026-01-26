import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { seedDatabase } from "../utils/seedProducts"

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        price: "",
        category: "Wedding Series 01",
        description: "",
        qrisData: "",
        previewImage: "",
        previewLink: ""
    })

    // Fetch Products
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "products"))
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setProducts(items)
            setError(null)
        } catch (error) {
            console.error("Error fetching products:", error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle Create
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "products"), {
                ...formData,
                createdAt: new Date()
            })
            setShowModal(false)
            fetchProducts()
            setFormData({ title: "", slug: "", price: "", category: "Wedding Series 01", description: "", qrisData: "", previewImage: "", previewLink: "" })
            alert("Product added!")
        } catch (error) {
            console.error("Error adding document: ", error)
            alert("Error adding product: " + error.message)
        }
    }

    // Handle Delete
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return
        try {
            await deleteDoc(doc(db, "products", id))
            fetchProducts()
        } catch (error) {
            console.error("Error deleting product:", error)
        }
    }

    // Handle Seed
    const handleSeed = async () => {
        if (!window.confirm("This will add default templates to your database. Continue?")) return;
        setLoading(true);
        try {
            const count = await seedDatabase();
            alert(`Successfully added ${count} products!`);
            fetchProducts();
        } catch (error) {
            alert("Error seeding database: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-light mb-1 text-white">Products</h2>
                    <p className="text-white/40 text-sm tracking-wide">Manage your invitation templates.</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleSeed}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white border border-white/10 hover:border-white transition"
                    >
                        Seed Database
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition"
                    >
                        + Add New
                    </button>
                </div>
            </div>

            {loading ? (
                <p className="text-white/40 animate-pulse">Loading products...</p>
            ) : (
                <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Title</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Price</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Category</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-12 text-center text-white/20 text-sm">
                                        {error ? (
                                            <div className="space-y-4">
                                                <p className="text-red-400 font-mono">ERROR: {error}</p>
                                                <p className="text-xs">Check console for more details.</p>
                                            </div>
                                        ) : (
                                            "No products found. Add one or click 'Seed Database'."
                                        )}
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-white/5 transition">
                                        <td className="px-6 py-4 text-sm font-medium text-white">{product.title}</td>
                                        <td className="px-6 py-4 text-sm text-white/60">{product.price}</td>
                                        <td className="px-6 py-4 text-xs font-mono text-white/40 uppercase">{product.category}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="text-red-400 hover:text-white text-xs uppercase tracking-wider transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* MODAL (Dark Theme) */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className="bg-[#0f0f11] border border-white/10 rounded-sm p-8 w-full max-w-lg h-[85vh] overflow-y-auto shadow-2xl">
                        <h3 className="text-xl font-light mb-6 border-b border-white/10 pb-4 text-white">Add New Product</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Title</label>
                                <input name="title" required value={formData.title} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Slug</label>
                                    <input name="slug" required value={formData.slug} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition"
                                        placeholder="e.g. elegant-floral" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Price</label>
                                    <input name="price" required value={formData.price} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition"
                                        placeholder="e.g. IDR 150.000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Category</label>
                                <select name="category" value={formData.category} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition outline-none">
                                    <option className="bg-black">Wedding Series 01</option>
                                    <option className="bg-black">Event Series 02</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Description</label>
                                <textarea name="description" required value={formData.description} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition h-24" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">QRIS String Data</label>
                                <textarea name="qrisData" value={formData.qrisData} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 text-xs font-mono text-white/60 focus:outline-none focus:border-white/40 transition h-20"
                                    placeholder="Paste the raw QR string code here..." />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Preview Image URL</label>
                                    <input name="previewImage" value={formData.previewImage} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition"
                                        placeholder="https://..." />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Live Preview Link</label>
                                    <input name="previewLink" value={formData.previewLink} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-white/40 transition"
                                        placeholder="https://..." />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-end pt-6 border-t border-white/10 mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 text-xs uppercase tracking-widest text-white/40 hover:text-white transition">Cancel</button>
                                <button type="submit" className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
