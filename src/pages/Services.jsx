import { Link } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import SignupBanner from "../components/SignupBanner/SignupBanner"
import Footer from "../components/Footer/Footer"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

function Services() {
    return (
        <>
            <Navbar />
            <main>
                <div className=" relative lg:h-[360px] md:h-[280px] sm:h-[240px] h-[200px]">
                    <div className="bg-[url(/images/services-cover.jpg)] bg-cover bg-center h-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
                    <div className="absolute top-1/2 left-[10%] -translate-y-1/2">
                        <h1 className="text-4xl text-white">Services</h1>
                        <nav aria-label="Breadcrumb">
                            <ol className="flex justify-start items-center gap-1 mt-1 text-sm text-gray-300">
                                <li>
                                    <Link to={"/"} className="block transition hover:text-lightOrange">
                                        <span className="sr-only"> Home </span>
                                        <Home className="h-4 w-4" />
                                    </Link>
                                </li>
                                <li className="rtl:rotate-180">
                                    <ChevronRight className="h-4 w-4" />
                                </li>
                                <li>
                                    <p className="block transition hover:text-lightOrange"> Services </p>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="customContainer my-10">
                    <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center items-start mb-4">
                        <h2 className="text-xl font-semibold">Services near you</h2>
                        <p className="text-xs text-gray-500">Showing 1-12 of 100 results</p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4 mb-8">
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                        <Link to={"/serviceDetail"} className="bg-white max-w-[320px] inline-block border border-lightOrange rounded-lg overflow-hidden">
                            <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                            <div className="px-5 py-3">
                                <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                <p className="text-sm text-gray-500">Qty: 10</p>
                                <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                            </div>
                            <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex justify-center gap-1">
                            <button
                                className="inline-flex size-8 items-center justify-center rounded border bg-white hover:bg-lightOrange hover:text-white text-gray-900 rtl:rotate-180 duration-200"
                            >
                                <span className="sr-only">Prev Page</span>
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <div>
                                <label htmlFor="PaginationPage" className="sr-only">Page</label>

                                <input
                                    type="number"
                                    className="h-8 w-12 rounded border bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    min="1"
                                    value="2"
                                    id="PaginationPage"
                                />
                            </div>

                            <button
                                className="inline-flex size-8 items-center justify-center rounded border bg-white hover:bg-lightOrange hover:text-white text-gray-900 rtl:rotate-180 duration-200"
                            >
                                <span className="sr-only">Next Page</span>
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
                <SignupBanner />
            </main>
            <Footer />
        </>
    )
}

export default Services
