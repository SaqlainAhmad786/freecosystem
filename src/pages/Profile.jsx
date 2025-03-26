import { useAuth } from "../contexts/authContext"
import { Lock, Save } from "lucide-react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"

const host_url = import.meta.env.VITE_BASE_URL;

function Profile() {
    const { userData } = useAuth()
    console.log(userData)
    const [formData, setFormData] = useState(userData);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [file, setFile] = useState(null);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdatedForm = async (e) => {
        e.preventDefault();

        let image;
        if (file) {
            image = URL.createObjectURL(file);
        }

        const finalFormData = { ...formData, files: image };

        const response = await axios.put(`${host_url}/auth/profile`, finalFormData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        console.log(response);
    };

    return (
        <>
            <Navbar />
            <main>
                <div className="customContainer my-2">
                    <p className="text-lg font-semibold">Edit Profile</p>
                </div>
                <div className="customContainer bg-white mb-5 rounded-lg shadow-md">
                    <div className="p-6 lg:col-span-3 lg:p-8">
                        <form action="#" className="space-y-4 mb-3">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="firstName">First Name</label>
                                    <input
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Enter your first name"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="lastName">Last Name</label>
                                    <input
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Enter your last name"
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Mobile Number"
                                        type="number"
                                        id="phone"
                                        name="mobile"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <select name="gender" id="" className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200">
                                        <option hidden>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-600 text-sm font-medium mb-1 block">
                                        Pincode
                                    </label>
                                    <input
                                        name="pincode"
                                        type="number"
                                        // value={formData.pincode}
                                        onChange={handleFormData}
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200"
                                        placeholder="Enter Pincode"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">
                                        City
                                    </label>
                                    <input
                                        name="city"
                                        type="text"
                                        value={city}
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200 input-disabled"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm mb-1 font-medium block">
                                        State
                                    </label>
                                    <input
                                        name="state"
                                        type="text"
                                        value={state}
                                        className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200 input-disabled"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1">
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-lightOrange hover:bg-orange duration-200 px-5 py-2 font-medium text-white"
                                >
                                    <Save className="inline-block h-4 w-4" /> SAVE CHANGES
                                </button>
                            </div>
                        </form>
                        <div>
                            <button type="button" className="w-full text-sm rounded-lg bg-white ring-1 ring-lightOrange hover:bg-lightOrange hover:text-white duration-200 px-5 py-2 font-medium text-lightOrange" onClick={() => document.getElementById('updatePasswordModal').showModal()}><Lock className="inline-block h-4 w-4" /> UPDATE PASSWORD</button>
                            <dialog id="updatePasswordModal" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg"><Lock className="inline-block" /> Update Password!</h3>
                                    <form className="mt-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
                                        <label className="form-control w-full lg:col-span-2 md:col-span-2 col-span-1">
                                            <div className="label">
                                                <span className="label-text">Old Password</span>
                                            </div>
                                            <input type="text" placeholder="Enter your old password" className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">New Password</span>
                                            </div>
                                            <input type="text" placeholder="Enter your old password" className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Confirm New Password</span>
                                            </div>
                                            <input type="text" placeholder="Enter your old password" className="w-full rounded-lg border outline-none border-gray-200 p-3 text-sm focus:ring-1 ring-lightOrange duration-200" />
                                        </label>
                                        <div className="mt-3 lg:col-span-2 md:col-span-2 col-span-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
                                            <button type="button" className="bg-gray-200 text-gray-600 py-3 rounded-lg text-sm font-medium" onClick={() => document.getElementById('updatePasswordModal').close()}>CANCEL</button>
                                            <button className="bg-lightOrange text-white py-3 rounded-lg text-sm font-medium"><Save className="inline-block h-4 w-4" /> SAVE & UPDATE</button>
                                        </div>
                                    </form>
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

export default Profile
