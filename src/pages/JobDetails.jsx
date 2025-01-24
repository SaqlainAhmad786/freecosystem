import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function JobDetails() {
    return (
        <>
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <p className="text-lg font-semibold">Job Details</p>
                </div>
                <div className="customContainer bg-white px-3 mb-5 rounded-lg shadow-md grid md:grid-cols-2 gap-4">
                    <div className="grid place-content-center">
                        <img src="/images/job-cover-img.svg" className="h-[280px]" alt="" />
                    </div>
                    <div className="space-y-2 lg:p-5 md:p-5 p-2">
                        <p className="text-sm text-gray-500">Ad Id: <span className="font-semibold">123456</span></p>
                        <h1 className="text-xl font-semibold">Job Role</h1>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Description</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi incidunt voluptatibus maxime ad, magnam laboriosam sapiente a nam fugit, iste similique nobis. Earum, excepturi!</p>
                        </div>
                        <ul className="list-disc list-outside grid grid-cols-2 pl-4 place-content-center">
                            <li>
                                <p className="text-xs font-medium text-gray-500">Pincode</p>
                                <p>111111</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-gray-500">City</p>
                                <p>Varanasi</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-gray-500">State</p>
                                <p>Uttar Pradesh</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-gray-500">Country</p>
                                <p>India</p>
                            </li>
                        </ul>
                        <hr />
                        <ul className="list-disc list-outside grid grid-cols-2 pl-4">
                            <li>
                                <p className="text-sm text-gray-500">Category</p>
                                <p>Product</p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-500">Sub-Category</p>
                                <p>Accessories</p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-500">Services Offered</p>
                                <p>1</p>
                            </li>
                        </ul>
                        <div>
                            <button className="w-full py-2 bg-lightOrange text-white rounded-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Show Interest</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Are you sure?</h3>
                                    <p className="py-4">You want to show interest in this profile</p>
                                    <div className="modal-action">
                                        <button className="btn" onClick={() => document.getElementById('my_modal_3').close()}>Cancel</button>
                                        <button className="btn bg-lightOrange text-white hover:bg-orange">Show Interest</button>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default JobDetails
