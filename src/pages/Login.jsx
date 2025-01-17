import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeClosed, Home, Mail } from "lucide-react"

function Login() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <main>
                <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg flex flex-col justify-center gap-2">
                            <img src="/images/favicon.svg" className="h-12" alt="" />
                            <h1 className="text-2xl font-bold sm:text-3xl text-center">Login!</h1>
                        </div>
                        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>

                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Enter email"
                                        name="email"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Enter password"
                                    />

                                    <button type="button" className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setShowPassword(!showPassword)}>
                                        {!showPassword ? <Eye className="h-4 w-4 text-gray-400" /> : <EyeClosed className="h-4 w-4 text-gray-400" />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    No account?
                                    <Link to={"/signup"} className="underline ml-1 text-lightOrange" href="#">Sign up</Link>
                                </p>

                                <button
                                    type="submit"
                                    className="inline-block rounded-lg bg-lightOrange hover:bg-orange px-5 py-3 text-sm font-semibold duration-200 text-white"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="text-sm flex justify-center mt-5">
                            <Link to="/"><Home className="h-10 w-10 bg-gray-200 hover:bg-gray-300 duration-200 border rounded-box p-1" /></Link>
                        </div>
                    </div>
                    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                        <img
                            alt="cover-img"
                            src="/images/login-img.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login
