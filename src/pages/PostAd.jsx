import { useState } from "react";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import TermCond from "../components/TermCond/TermCond";

function PostAd() {
    const [activeTab, setActiveTab] = useState('tab1'); // Default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <p className="text-lg font-semibold">Post Ad</p>
                </div>
                <div className="customContainer bg-white mb-5 rounded-lg shadow-md">
                    <div className="p-4">
                        <div className="flex w-max border-b px-2 space-x-4 overflow-hidden">
                            <button
                                id="tab1"
                                className={`px-4 py-2 rounded-t ${activeTab === 'tab1'
                                    ? 'text-white font-bold bg-lightOrange'
                                    : 'bg-gray-200 text-gray-600 font-semibold'
                                    }`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Product
                            </button>
                            <button
                                id="tab2"
                                className={`px-4 py-2 rounded-t ${activeTab === 'tab2'
                                    ? 'text-white font-bold bg-lightOrange'
                                    : 'bg-gray-200 text-gray-600 font-semibold'
                                    }`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Service
                            </button>
                            <button
                                id="tab3"
                                className={`px-4 py-2 rounded-t ${activeTab === 'tab3'
                                    ? 'text-white font-bold bg-lightOrange'
                                    : 'bg-gray-200 text-gray-600 font-semibold'
                                    }`}
                                onClick={() => handleTabClick('tab3')}
                            >
                                Job
                            </button>
                        </div>

                        {activeTab === 'tab1' && <div id="tab1Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Product Details</h4>
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
                                    <div className="flex items-center mt-5">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-xs">
                                            <span>I accept the</span>
                                            <TermCond />
                                        </label>
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="mx-auto block py-3 px-6 font-medium text-sm tracking-wider rounded text-white bg-lightOrange duration-200 hover:bg-orange focus:outline-none">
                                            Post Ad
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        }
                        {activeTab === 'tab2' && <div id="tab2Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Service Details</h4>
                                </div>

                                <form>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Title</label>
                                            <input name="productTitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Service title" />
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
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Number of Services </label>
                                            <input name="quantity" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Sevices quantity" />
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
                                    <div className="flex items-center mt-5">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-xs">
                                            <span>I accept the</span>
                                            <TermCond />
                                        </label>
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="mx-auto block py-3 px-6 font-medium text-sm tracking-wider rounded text-white bg-lightOrange duration-200 hover:bg-orange focus:outline-none">
                                            Post Ad
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                        {activeTab === 'tab3' && <div id="tab3Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Job Details</h4>
                                </div>

                                <form>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Job Title</label>
                                            <input name="productTitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Job title" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Category of Ad</label>
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
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Number of Positions</label>
                                            <input name="quantity" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Sevices quantity" />
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
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Job Description</label>
                                            <textarea rows="4" name="description" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id=""></textarea>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                            <input type="file"
                                                className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                                            <p className="text-xs text-gray-400 mt-2">Maximum file size: 2MB & Max file count: 4</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-xs">
                                            <span>I accept the</span>
                                            <TermCond />
                                        </label>
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="mx-auto block py-3 px-6 font-medium text-sm tracking-wider rounded text-white bg-lightOrange duration-200 hover:bg-orange focus:outline-none">
                                            Post Ad
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PostAd
