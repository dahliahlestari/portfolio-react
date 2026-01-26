import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import QRCode from "react-qr-code"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function Payment() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("qris")
    const [isSubmitting, setIsSubmitting] = useState(false)

    if (!state || !state.product) return <div className="pt-40 text-center text-white">Invalid Order.</div>
<<<<<<< HEAD
    const { product, name, email, whatsapp, customData } = state
=======
    const { product, name, email, whatsapp } = state
>>>>>>> 768275e1fd62d5fa2db7b565128d338df075690a

    const handleFinish = async () => {
        setIsSubmitting(true)
        try {
            await addDoc(collection(db, "orders"), {
                productId: product.id,
                productTitle: product.title,
                amount: product.price,
                customerName: name,
                customerEmail: email,
                customerWhatsapp: whatsapp,
<<<<<<< HEAD
                customData: customData || null, // SAVE CUSTOM DATA
=======
>>>>>>> 768275e1fd62d5fa2db7b565128d338df075690a
                status: "pending",
                paymentMethod: activeTab,
                createdAt: new Date()
            })
            // Navigate to Success
            navigate("/success")
        } catch (error) {
            console.error("Error creating order:", error)
            alert("Failed to record order. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-2">Payment</h1>
            <p className="text-white/60 mb-10">Complete your payment for {product.title}</p>


            <div className="bg-white/5 p-8 rounded-sm border border-white/10">

                {/* TABS */}
                <div className="flex justify-center gap-6 mb-8 border-b border-white/10 pb-4">
                    <button
                        onClick={() => setActiveTab("qris")}
                        className={`text-sm tracking-widest uppercase transition ${activeTab === "qris" ? "text-white" : "text-white/40 hover:text-white"}`}
                    >
                        QRIS
                    </button>
                    <button
                        onClick={() => setActiveTab("bank")}
                        className={`text-sm tracking-widest uppercase transition ${activeTab === "bank" ? "text-white" : "text-white/40 hover:text-white"}`}
                    >
                        Bank Transfer
                    </button>
                </div>

                {/* CONTENT - QRIS */}
                {activeTab === "qris" && (
                    <div className="animate-fade-in flex flex-col items-center">
                        <div className="bg-white p-4 mb-4 rounded-lg">
                            <QRCode
                                value={product.qrisData || "ERROR: NO QR DATA"}
                                size={200}
                                level="M"
                            />
                        </div>
                        <p className="text-sm text-white/60">Scan with Gopay, OVO, Dana, or BCA Mobile</p>
                        <p className="text-xs text-white/40 mt-2">Amount: {product.price}</p>
                    </div>
                )}

                {/* CONTENT - BANK */}
                {activeTab === "bank" && (
                    <div className="animate-fade-in py-8 space-y-6">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-white/40">BCA</p>
                            <p className="text-xl font-medium mt-1">123 456 7890</p>
                            <p className="text-sm text-white/60">a.n Dahlia Lestari</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-white/40">Mandiri</p>
                            <p className="text-xl font-medium mt-1">098 765 4321</p>
                            <p className="text-sm text-white/60">a.n Dahlia Lestari</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10">
                <p className="text-sm text-white/60 mb-6 max-w-sm mx-auto">
                    After delivering payment, please click the button below.
                </p>
                <button
                    onClick={handleFinish}
                    className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition"
                >
                    I Have Paid
                </button>
            </div>

        </section>
    )
}
