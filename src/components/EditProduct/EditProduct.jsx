import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function EditProduct() {
    return (
        <>
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <h1 className="text-lg font-semibold">Edit your Product details</h1>
                </div>
                <div className="customContainer bg-white px-3 mb-5 rounded-lg shadow-md">
                    <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                        <div className="text-center mb-4">
                            <h4 className="text-neutral-800 font-semibold text-xl">Edit</h4>
                        </div>

                        <form>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">Title</label>
                                    <input name="productTitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Product title" />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">Sub-Category of Ad</label>
                                    <select name="subCategory" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id="">
                                        <option value="">Select Sub-Category</option>
                                        <option value="laptop">Laptop</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="camera">Camera</option>
                                        <option value="watch">Watch</option>
                                        <option value="tv">TV</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">Quantity</label>
                                    <input name="quantity" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Product quantity" />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm font-medium mb-1 block">Pincode</label>
                                    <input name="pincode" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Pincode" />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">City</label>
                                    <input name="city" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all input-disabled" disabled />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">State</label>
                                    <input name="state" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all input-disabled" disabled />
                                </div>
                                <div className="lg:col-span-2 md:col-span-1">
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">Description</label>
                                    <textarea rows="4" name="description" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id=""></textarea>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                    <input type="file"
                                        className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                                    <p className="text-xs text-gray-400 mt-2">Maximum file size: 2MB & Max file count: 4</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="mx-auto block py-3 px-6 font-medium text-sm tracking-wider rounded text-white bg-lightOrange duration-200 hover:bg-orange focus:outline-none">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default EditProduct
