import { Link } from "react-router-dom"

export default function Success() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

            <div className="mb-8 p-4 rounded-full border border-green-500/50 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Payment Successful</h1>

            <p className="text-white/60 max-w-md leading-relaxed mb-12">
                Thank you for your order. We have received your payment.
                The template files will be sent to your email and WhatsApp number shortly.
            </p>

            <div className="flex gap-4">
                <Link
                    to="/studio"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 text-sm uppercase tracking-widest transition"
                >
                    Back to Studio
                </Link>
                <Link
                    to="/"
                    className="border border-white/20 hover:bg-white hover:text-black text-white px-8 py-3 text-sm uppercase tracking-widest transition"
                >
                    Home
                </Link>
            </div>
        </section>
    )
}
