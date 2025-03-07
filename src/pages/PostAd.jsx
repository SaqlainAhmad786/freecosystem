import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import TermCond from "../components/TermCond/TermCond";
import axios from "axios";
import { City, State } from "country-state-city";

function PostAd() {
    const [activeTab, setActiveTab] = useState('tab1'); // Default active tab
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    useEffect(() => {
        const fetchStates = () => {
            const statesList = State.getStatesOfCountry("IN")
            setStates(statesList);
        };
        fetchStates()
    }, [])

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setCities([]);
    };

    async function handleSubmit(e, type) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        const images = selectedFiles.map(file => URL.createObjectURL(file))

        const finalData = { ...data, files: images }
        // console.log(finalData)

        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/listings/${type}`, finalData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

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
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <p className="text-lg font-semibold">Post Ad</p>
                </div>
                <div className="customContainer bg-white mb-5 rounded-lg shadow-md">
                    <div className="p-4">
                        <div className="flex w-[100%] border-b px-1 space-x-2 overflow-x-auto">
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
                            <button
                                id="tab4"
                                className={`px-4 py-2 rounded-t ${activeTab === 'tab4'
                                    ? 'text-white font-bold bg-lightOrange'
                                    : 'bg-gray-200 text-gray-600 font-semibold'
                                    }`}
                                onClick={() => handleTabClick('tab4')}
                            >
                                Matrimony
                            </button>
                        </div>

                        {activeTab === 'tab1' && <div id="tab1Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Product Details</h4>
                                </div>

                                <form onSubmit={(e) => handleSubmit(e, 'product')}>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Title</label>
                                            <input name="title" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Product title" />
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
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">State</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="state" onChange={(e) => handleStateChange(e)}>
                                                <option hidden>Select State</option>
                                                {states.map((state, index) => <option value={state.name} key={index}>{state.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">City</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="city" onChange={(e) => handleStateChange(e)} disabled={cities.length === 0}>
                                                <option hidden>Select City</option>
                                                {cities.length === 0
                                                    ? <option disabled>Select State first</option>
                                                    : cities.map((city, index) => <option value={city.name} key={index}>{city.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="lg:col-span-2 md:col-span-1">
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Description</label>
                                            <textarea rows="4" name="description" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id=""></textarea>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                            <input type="file"
                                                className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" multiple accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} max="4" />
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
                        {activeTab === 'tab2' && <div id="tab2Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Service Details</h4>
                                </div>

                                <form onSubmit={(e) => handleSubmit(e, 'service')}>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Title</label>
                                            <input name="title" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Service title" />
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
                                            <input name="numberOfServices" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Sevices quantity" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm font-medium mb-1 block">Pincode</label>
                                            <input name="pincode" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Pincode" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">State</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="state" onChange={(e) => handleStateChange(e)}>
                                                <option hidden>Select State</option>
                                                {states.map((state, index) => <option value={state.name} key={index}>{state.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">City</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="city" onChange={(e) => handleStateChange(e)} disabled={cities.length === 0}>
                                                <option hidden>Select City</option>
                                                {cities.length === 0
                                                    ? <option disabled>Select State first</option>
                                                    : cities.map((city, index) => <option value={city.name} key={index}>{city.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="lg:col-span-2 md:col-span-1">
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Description</label>
                                            <textarea rows="4" name="description" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id=""></textarea>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                            <input type="file"
                                                className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" multiple accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} max="4" />
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

                                <form onSubmit={(e) => handleSubmit(e, 'job')}>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Job Title</label>
                                            <input name="jobTitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Job title" />
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
                                            <input name="numberOfServices" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Sevices quantity" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm font-medium mb-1 block">Pincode</label>
                                            <input name="pincode" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Pincode" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">State</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="state" onChange={(e) => handleStateChange(e)}>
                                                <option hidden>Select State</option>
                                                {states.map((state, index) => <option value={state.name} key={index}>{state.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">City</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="city" onChange={(e) => handleStateChange(e)} disabled={cities.length === 0}>
                                                <option hidden>Select City</option>
                                                {cities.length === 0
                                                    ? <option disabled>Select State first</option>
                                                    : cities.map((city, index) => <option value={city.name} key={index}>{city.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="lg:col-span-2 md:col-span-1">
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Job Description</label>
                                            <textarea rows="4" name="description" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id=""></textarea>
                                        </div>
                                        {/* <div>
                                            <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                            <input type="file"
                                                className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                                            <p className="text-xs text-gray-400 mt-2">Maximum file size: 2MB & Max file count: 4</p>
                                        </div> */}
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
                        {activeTab === 'tab4' && <div id="tab4Content">
                            <div className="max-w-4xl max-sm:max-w-lg mx-auto p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-neutral-800 font-semibold text-xl">Add Matrimony Profile</h4>
                                </div>

                                <form onSubmit={(e) => handleSubmit(e, 'matrimony')}>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">First Name</label>
                                            <input name="firstName" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your first name" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Middle Name</label>
                                            <input name="middleName" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your middle name" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Last Name</label>
                                            <input name="lastName" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your last name" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Gender</label>
                                            <select name="gender" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id="">
                                                <option hidden>Select your gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Age</label>
                                            <input name="age" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your age" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Religion</label>
                                            <input name="religion" type="caste" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your religion" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Caste</label>
                                            <input name="caste" type="caste" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your caste" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Marital Status</label>
                                            <select name="maritalStatus" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id="">
                                                <option hidden>Select your marital status</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Height</label>
                                            <input name="height" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your height in cm" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Weight</label>
                                            <input name="weight" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter your weight" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">Occupation</label>
                                            <select name="occupation" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" id="">
                                                <option hidden>Select your occupation</option>
                                                <option value="Job">Job</option>
                                                <option value="Business">Business</option>
                                                <option value="Family business">Family Business</option>
                                                <option value="Unemployed">Unemployed</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm font-medium mb-1 block">Pincode</label>
                                            <input name="pincode" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-lightOrange transition-all" placeholder="Enter Pincode" />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">State</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="state" onChange={(e) => handleStateChange(e)}>
                                                <option hidden>Select State</option>
                                                {states.map((state, index) => <option value={state.name} key={index}>{state.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-gray-600 text-sm mb-1 font-medium block">City</label>
                                            <select className="rounded p-3 mb-4 text-black text-sm outline-lightOrange bg-gray-100 w-full" name="city" onChange={(e) => handleStateChange(e)} disabled={cities.length === 0}>
                                                <option hidden>Select City</option>
                                                {cities.length === 0
                                                    ? <option disabled>Select State first</option>
                                                    : cities.map((city, index) => <option value={city.name} key={index}>{city.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-600 font-medium mb-1 block">Upload file</label>
                                            <input type="file"
                                                className="w-full text-gray-400 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" multiple accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} max="4" />
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
