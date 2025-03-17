import { Link } from "react-router-dom"
import { ChevronDown, ChevronLeft, ChevronRight, CircleX, Home } from "lucide-react"
import Navbar from "../components/Navbar/Navbar"
import SignupBanner from "../components/SignupBanner/SignupBanner"
import Footer from "../components/Footer/Footer"
import AgeFilterSlider from "../components/AgeFilterSlider/AgeFilterSlider"

function Matrimony() {
    return (
        <>
            <Navbar />
            <main className="pt-[80px]">
                <div className="relative lg:h-[280px] md:h-[240px] sm:h-[220px] h-[180px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
                    <div className="bg-[url(/images/matrimony-cover.jpg)] bg-cover bg-center h-full"></div>
                    <div className="absolute top-1/2 left-[10%] -translate-y-1/2">
                        <h1 className="text-4xl text-white">Matrimony</h1>
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
                                    <p className="block transition hover:text-lightOrange"> Matrimony </p>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="customContainer my-10">
                    {/* <div className="h-[400px] bg-white grid place-content-center rounded-lg border border-lightOrange shadow-sm">
                        <div className="w-[70%] mx-auto flex flex-col justify-center text-center gap-4">
                            <img src="/images/account.png" className="h-20 object-contain" alt="" />
                            <p className="text-2xl font-semibold">Login to view profiles</p>
                            <p className="text-xl font-semibold">Please make sure you have made your matrimony profile</p>
                            <div className="mt-2">
                                <Link to={"/login"} rel="noreferrer noopener" className="px-5 py-3 text-nowrap rounded-md font-semibold bg-lightOrange text-white">Get Started</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center items-start mb-4">
                        <h2 className="text-xl font-semibold">Profiles near you</h2>
                        <p className="text-xs text-gray-500">Showing 1-12 of 100 results</p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="bg-white rounded-lg border border-lightOrange p-3 shadow-sm lg:block md:block sm:hidden hidden">
                            <div className="flex justify-between items-center mb-3 pb-1 border-b">
                                <h3 className="text-neutral-800 font-medium">FILTERS</h3>
                                <button className="text-sm flex items-center gap-1 p-1">
                                    <CircleX className="h-4 w-4" />
                                    <span className="leading-none">Clear</span>
                                </button>
                            </div>
                            <div className="space-y-2">
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Age </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            <AgeFilterSlider />
                                        </div>
                                    </div>
                                </details>
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Religion </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterInStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Hindu </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterPreOrder" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Muslim </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Buddhism </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Christian </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Height </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            <AgeFilterSlider />
                                        </div>
                                    </div>
                                </details>
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Weight </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>

                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            <AgeFilterSlider />
                                        </div>
                                    </div>
                                </details>
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Caste </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterInStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> ABC </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterPreOrder" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> ABC </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> ABC </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> ABC </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Marital Status </span>
                                        <span className="transition group-open:-rotate-180">
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterInStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Single </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterPreOrder" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Married </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Widowed </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="FilterOutOfStock" className="size-4 rounded border-gray-300" />

                                                    <span className="text-sm font-medium text-gray-700"> Divorced </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-2 sm:col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 place-items-center gap-2 mb-8">
                            <Link to={"/matrimonyProfile"} className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                            <Link className=" bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                <img src="/images/female-avatar.jpg" className="w-full h-48 object-cover" alt="" />
                                <div className="p-3">
                                    <h4 className="text-lg font-semibold mb-1">Pooja Mishra</h4>
                                    <p className="text-sm text-gray-500">27, Christian,</p>
                                    <p className="text-sm text-gray-500">Widowed</p>
                                    <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                </div>
                                <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">View Profile</button>
                            </Link>
                        </div>
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

export default Matrimony
