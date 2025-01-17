import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ALargeSmall, Eye, EyeClosed, Mail, MapPin, Smartphone } from "lucide-react"
import { City, State } from "country-state-city"

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchStates = () => {
            const statesList = State.getStatesOfCountry("IN")
            setStates(statesList);
        };
        fetchStates()
    }, [])

    const handleStateChange = (event) => {
        const stateName = event.target.value;
        const stateData = states.find((state) => state.name === stateName);
        const stateCode = stateData.isoCode;
        fetchCities(stateCode);
    };

    const fetchCities = (stateCode) => {
        const citiesList = City.getCitiesOfState("IN", stateCode);
        setCities(citiesList);
    };

    return (
        <>
            <main>
                <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                        <img
                            alt="cover-img"
                            src="/images/signup-img.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg flex flex-col justify-center gap-2">
                            <img src="/images/favicon.svg" className="h-12" alt="" />
                            <h1 className="text-2xl font-bold sm:text-3xl text-center">Signup!</h1>
                        </div>
                        <form action="#" className="mx-auto mb-0 mt-8 max-w-lg space-y-4">
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Enter your First name"
                                            name="firstName"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <ALargeSmall className="h-5 w-5 text-gray-400" />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Enter your Last name"
                                            name="lastName"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <ALargeSmall className="h-5 w-5 text-gray-400" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
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
                                    <label htmlFor="mobile" className="sr-only">Mobile</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Enter mobile number"
                                            name="mobile"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <Smartphone className="h-4 w-4 text-gray-400" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="gender" className="sr-only">Gender</label>
                                    <div className="relative">
                                        <select name="gender" id="" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200">
                                            <option value="0" hidden>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="sr-only">Pincode</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Enter Pincode"
                                            name="pincode"
                                        />
                                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                            <MapPin className="h-4 w-4 text-gray-400" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="state" className="sr-only">State</label>
                                    <div className="relative">
                                        <select name="state" id="" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200" onChange={(e) => handleStateChange(e)}>
                                            <option hidden>Select State</option>
                                            {states.map((state, index) => (
                                                <option key={index} value={state.name}>{state.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="city" className="sr-only">City</label>
                                    <div className="relative">
                                        <select name="city" id="" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200" disabled={cities.length < 1}>
                                            <option hidden>Select City</option>
                                            {cities.length > 1 && cities.map((city, index) => (
                                                <option key={index} value={city.name}>{city.name}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Enter password"
                                            name="password"
                                        />
                                        <button type="button" tabIndex={-1} className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setShowPassword(!showPassword)}>
                                            {!showPassword ? <Eye className="h-4 w-4 text-gray-400" /> : <EyeClosed className="h-4 w-4 text-gray-400" />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password2" className="sr-only">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none focus:ring-1 ring-lightOrange duration-200"
                                            placeholder="Confirm password"
                                            name="confirmPassword"
                                        />
                                        <button type="button" tabIndex={-1} className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {!showConfirmPassword ? <Eye className="h-4 w-4 text-gray-400" /> : <EyeClosed className="h-4 w-4 text-gray-400" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Already have account?
                                    <Link to={"/login"} className="underline ml-1 text-lightOrange" href="#">Login</Link>
                                </p>

                                <button
                                    type="submit"
                                    className="inline-block rounded-lg bg-lightOrange hover:bg-orange px-5 py-3 text-sm font-semibold duration-200 text-white"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        {/* <div className="text-sm flex justify-center mt-5">
                            <Link><Home className="h-10 w-10 bg-gray-200 hover:bg-gray-300 duration-200 border rounded-box p-1" /></Link>
                        </div> */}
                    </div>

                </section>
            </main>
        </>
    )
}

export default Signup
