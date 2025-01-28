import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { Bell, BriefcaseBusiness, ChevronDown, ChevronRight, CircleHelp, CirclePlus, Gem, House, LifeBuoy, LogIn, LogOut, Package, Search, User } from "lucide-react"
import { State } from "country-state-city";

function Navbar() {
    const [states, setStates] = useState([])

    useEffect(() => {
        const fetchStates = () => {
            const statesList = State.getStatesOfCountry("IN")
            setStates(statesList);
        };
        fetchStates()
    }, [])

    function handleSideBar() {
        document.getElementById("my-drawer-2").checked = false
    }

    return (
        <>
            <header className="bg-white fixed w-full z-50 shadow-md">
                <nav className="customContainer navbar px-0 bg-base-100">
                    <div className="navbar-start">
                        <Link to="/">
                            <img src="/images/logo.svg" className="h-16" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"><Search className="h-5 w-5" /></div>
                            <div tabIndex={0} className="border dropdown-content menu bg-base-100 rounded-lg z-[1] w-64 p-2 shadow-xl customSearchDropdownPosition">
                                <form action="">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <p className="label-text flex gap-1 font-semibold"><Search className="h-4 w-4 text-orange" /><span>Search!</span></p>
                                        </div>
                                        <select className="select select-bordered select-sm w-full max-w-xs focus:outline-none focus:ring-1 ring-lightOrange">
                                            <option hidden>Select State</option>
                                            {states.map((state, index) => (
                                                <option key={index} value={state.name}>{state.name}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Search by Category"
                                            className="input input-bordered input-sm w-full max-w-xs duration-200 focus:outline-none focus:ring-1 ring-lightOrange" />
                                    </div>
                                    <button type="submit" className="btn-block bg-lightOrange text-white rounded-lg font-semibold py-2 mt-2">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="drawer drawer-end w-auto">
                            <input id="notification-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="notification-drawer" className="btn btn-ghost btn-circle drawer-button">
                                    <div className="indicator">
                                        <Bell className="h-5 w-5" />
                                        <span className="bg-lightOrange border-lightOrange badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="notification-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <div className="flex justify-between items-center border-b border-gray-400 pb-2 mb-1">
                                        <p className="font-semibold text-lg">Notifications</p>
                                        <div className="bg-lightOrange text-white rounded-full px-3 py-1">
                                            <span>5</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link className="flex items-center gap-2 py-2 border-b border-gray-200 hover:bg-gray-200 hover:scale-105 hover:shadow-md duration-200">
                                            <div className="border-r border-gray-300 px-2">
                                                <Package className="text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">Interest Matched</p>
                                                <p className=" text-xs text-gray-500">Now you can contact the seller</p>
                                            </div>
                                        </Link>
                                        <Link className="flex items-center gap-2 py-2 border-b border-gray-200 hover:bg-gray-200 hover:scale-105 hover:shadow-md duration-200">
                                            <div className="border-r border-gray-300 px-2">
                                                <LifeBuoy className="text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">Service request accepted</p>
                                                <p className=" text-xs text-gray-500">Provider will contact you soon</p>
                                            </div>
                                        </Link>
                                        <Link className="flex items-center gap-2 py-2 border-b border-gray-200 hover:bg-gray-200 hover:scale-105 hover:shadow-md duration-200">
                                            <div className="border-r border-gray-300 px-2">
                                                <Gem className="text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">Profile Matched</p>
                                                <p className=" text-xs text-gray-500">Now you can contact him/her</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/postAd" className="lg:hidden md:hidden sm:hidden px-2"><CirclePlus className="h-5 inline-block" /></Link>
                        </div>
                        <span className="lg:inline-flex md:inline-flex sm:inline-flex hidden rounded-md border bg-white shadow-md ml-1">
                            <Link
                                to={"/postAd"}
                                className="flex items-center gap-1 border-e text-sm font-medium px-3 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
                                title="Post Job"
                            >
                                <CirclePlus className="h-4 w-4" />
                                Post Ad
                            </Link>
                            {/* <Link to="/login"
                                className="flex items-center gap-1 text-sm font-medium px-3 py-2 text-gray-700 hover:bg-gray-50 focus:relative"
                                title="Login/Signup"
                            >
                                <LogIn className="h-4 w-4" />
                                Login
                            </Link> */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="flex items-center gap-1 text-sm font-medium px-3 py-2 text-gray-700 hover:bg-gray-50 focus:relative"><User className="h-4 w-4" /> John <ChevronDown className="h-4 w-4" /></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow-md">
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/interests">Your Interests</Link></li>
                                    <li><Link to="/ads">Your Ads</Link></li>
                                    <li><Link>Logout</Link></li>
                                </ul>
                            </div>
                        </span>
                        <div className="drawer w-auto lg:hidden md:hidden sm:hidden block">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle w-[2.5rem] drawer-button"><img src="/images/bars.svg" className="h-6 w-6" alt="" /></label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <li>
                                        <div className="h-[80px] border border-gray-300 mb-2 flex items-center">
                                            <div className="w-12 h-12 p-[2px] rounded-full overflow-hidden border-2 border-lightOrange">
                                                <img src="/images/default-avatar.jpg" className="rounded-full" alt="" />
                                            </div>
                                            <div>
                                                {/* <p className="font-semibold text-lg">Hello, John</p>
                                                <p className="text-xs text-gray-500">View Profile<ChevronRight className="h-4 w-4 inline-block" /></p> */}
                                                <Link to={'/login'} className="font-semibold text-lg">Login/Signup</Link>
                                                <p className="text-xs text-gray-500">Get Started<ChevronRight className="h-4 w-4 inline-block" /></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200 "><NavLink to={'/'} onClick={handleSideBar} className="text-md">
                                        <House className="w-5 h-5 text-lightOrange" />Home</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200 "><NavLink to={'/products'} onClick={handleSideBar} className="text-md">
                                        <Package className="w-5 h-5 text-lightOrange" />
                                        Products</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200 "><NavLink to={'/services'} onClick={handleSideBar} className="text-md">
                                        <LifeBuoy className="w-5 h-5 text-lightOrange" />Services</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200 "><NavLink to={'/jobs'} onClick={handleSideBar} className="text-md">
                                        <BriefcaseBusiness className="w-5 h-5 text-lightOrange" />Jobs</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200 "><NavLink to={'/matrimony'} onClick={handleSideBar} className="text-md">
                                        <Gem className="w-5 h-5 text-lightOrange" />Matrimony</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200"><NavLink to={'/profile'} onClick={handleSideBar} className="text-md">
                                        <User className="w-5 h-5 text-lightOrange" />Profile</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200"><NavLink to={'/help'} onClick={handleSideBar} className="text-md">
                                        <CircleHelp className="w-5 h-5 text-lightOrange" />Help</NavLink>
                                    </li>
                                    <li className="hover:translate-x-2 duration-200"><button className="text-md">
                                        <LogOut className="w-5 h-5 text-lightOrange" />Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="bg-lightOrange lg:block md:block hidden">
                    <div className="customContainer flex justify-end text-white font-medium uppercase">
                        <NavLink to={'/products'} className='py-1 px-2 hover:bg-white hover:text-lightOrange duration-200 navLinks'>Products</NavLink>
                        <NavLink to={'/services'} className='py-1 px-2 hover:bg-white hover:text-lightOrange duration-200 navLinks'>Services</NavLink>
                        <NavLink to={'/jobs'} className='py-1 px-2 hover:bg-white hover:text-lightOrange duration-200 navLinks'>Jobs</NavLink>
                        <NavLink to={'/matrimony'} className='py-1 px-2 hover:bg-white hover:text-lightOrange duration-200 navLinks'>Matrimony</NavLink>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar
