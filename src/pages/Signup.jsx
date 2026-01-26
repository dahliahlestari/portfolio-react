import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate, useLocation } from "react-router-dom"

export default function Signup() {
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    // Where to redirect after signup? Default to home if no state
    const from = location.state?.from?.pathname || "/"
    const state = location.state?.from?.state || {}

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(formData.email, formData.password, formData.name)
            // Navigate back to where they came from
            navigate(from, { state: state, replace: true })
        } catch (err) {
            console.error(err)
            setError("Failed to create an account: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center p-6 text-white">
            <div className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-sm border border-white/10">
                <div>
                    <h2 className="text-3xl font-light text-center">Create Account</h2>
                    <p className="mt-2 text-center text-sm text-white/40">
                        Sign up to purchase your template.
                    </p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 text-center">{error}</div>}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 p-3 text-white focus:outline-none focus:border-white/40 transition"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none transition uppercase tracking-widest disabled:opacity-50"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-xs text-white/40">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                state={{ from: { pathname: from, state: state } }}
                                className="text-white hover:underline transition"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
