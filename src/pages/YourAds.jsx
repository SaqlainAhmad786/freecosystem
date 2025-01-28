import { Link } from "react-router-dom"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { X } from "lucide-react"

function YourAds() {

    const options2 = {
        type: 'slide',
        perPage: 4,
        gap: '0.75rem',
        pagination: true,
        arrows: false,
        perMove: 1,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            900: {
                perPage: 2,
                autoplay: true,
                arrows: true,
            },
            600: {
                perPage: 1,
                autoplay: true,
                pagination: false,
                arrows: true,
            },
        },
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <h1 className="text-lg font-semibold">Your Ads</h1>
                </div>
                <div className="customContainer bg-white mb-5 rounded-lg shadow-md p-6">
                    <h2 className="font-semibold mb-2 text-center text-orange">Your Product Ads</h2>
                    <div>
                        <Splide aria-label="services slides" options={options2} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <div className="bg-white border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 my-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 px-2 my-3">
                                        <button className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2" onClick={() => document.getElementById('interestReceivedModal1').showModal()}>Interests received</button>
                                        <dialog id="interestReceivedModal1" className="modal">
                                            <div className="modal-box">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="font-bold text-lg">Interests Received:</h3>
                                                    <button><X className="h-6 w-6" onClick={() => document.getElementById('interestReceivedModal1').close()} /></button>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dialog>
                                        <Link to="/editProduct" className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Edit</Link>
                                        <button onClick={() => document.getElementById('deactivateModal1').showModal()} className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Deactivate</button>
                                        <dialog id="deactivateModal1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure?</h3>
                                                <p className="py-4 text-sm">If you deactivate your ad, it will be no longer visible to users.</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn mr-2" onClick={() => document.getElementById('deactivateModal1').close()}>Cancel</button>
                                                        <button className="btn bg-lightOrange text-white hover:bg-orange" onClick={() => document.getElementById('deactivateModal1').close()}>Confirm</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <h2 className="font-semibold mb-2 text-center text-orange">Your Service Ads</h2>
                    <div>
                        <Splide aria-label="services slides" options={options2} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <div className="bg-white border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 my-3">
                                        <h4 className="text-lg font-semibold mb-1">Service Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 px-2 my-3">
                                        <button className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2" onClick={() => document.getElementById('interestReceivedModal1').showModal()}>Interests received</button>
                                        <dialog id="interestReceivedModal1" className="modal">
                                            <div className="modal-box">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="font-bold text-lg">Interests Received:</h3>
                                                    <button><X className="h-6 w-6" onClick={() => document.getElementById('interestReceivedModal1').close()} /></button>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dialog>
                                        <Link to="/editService" className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Edit</Link>
                                        <button onClick={() => document.getElementById('deactivateModal1').showModal()} className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Deactivate</button>
                                        <dialog id="deactivateModal1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure?</h3>
                                                <p className="py-4 text-sm">If you deactivate your ad, it will be no longer visible to users.</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn mr-2" onClick={() => document.getElementById('deactivateModal1').close()}>Cancel</button>
                                                        <button className="btn bg-lightOrange text-white hover:bg-orange" onClick={() => document.getElementById('deactivateModal1').close()}>Confirm</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <h2 className="font-semibold mb-2 text-center text-orange">Your Jobs Ads</h2>
                    <div>
                        <Splide aria-label="jobs slides" options={options2} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <div className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    {/* <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button> */}
                                    <div className="grid grid-cols-2 gap-2 px-2 my-3">
                                        <button className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2 col-span-2" onClick={() => document.getElementById('interestReceivedModal1').showModal()}>Interests received</button>
                                        <dialog id="interestReceivedModal1" className="modal">
                                            <div className="modal-box">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="font-bold text-lg">Interests Received:</h3>
                                                    <button><X className="h-6 w-6" onClick={() => document.getElementById('interestReceivedModal1').close()} /></button>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                                <div className="border border-lightOrange rounded-lg p-2 mb-2">
                                                    <p>Name: <span className="font-semibold">John Doe</span></p>
                                                    <p>Phone: <span className="font-semibold">1234567890</span></p>
                                                    <p>Address: <span className="font-semibold">Varanasi, UP, India</span></p>
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button className="btn-ghost duration-200 py-1 px-2 rounded-lg">Decline</button>
                                                        <button className="bg-lightOrange text-white hover:bg-orange duration-200 py-1 px-2 rounded-lg">Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dialog>
                                        <Link to="/editJob" className="btn-block text-center rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Edit</Link>
                                        <button onClick={() => document.getElementById('deactivateModal1').showModal()} className="btn-block rounded-lg bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Deactivate</button>
                                        <dialog id="deactivateModal1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure?</h3>
                                                <p className="py-4 text-sm">If you deactivate your ad, it will be no longer visible to users.</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn mr-2" onClick={() => document.getElementById('deactivateModal1').close()}>Cancel</button>
                                                        <button className="btn bg-lightOrange text-white hover:bg-orange" onClick={() => document.getElementById('deactivateModal1').close()}>Confirm</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default YourAds
