import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function JobDetails() {
    const [jobData, setJobData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getProduct() {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/job/${id}`)
                if (res.status === 200) {
                    setJobData(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [id])

    async function showInterst(id) {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/interests`, { listingId: id, listingType: 'job', message: 'hello' }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

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
                        <p className="text-sm text-gray-500">Ad Id: <span className="font-semibold">{jobData._id}</span></p>
                        <h1 className="text-xl font-semibold">{jobData.jobTitle}</h1>
                        <div>
                            <p className="text-xs font-medium text-gray-500">Description</p>
                            <p>{jobData.description}</p>
                        </div>
                        <ul className="list-disc list-outside grid grid-cols-2 pl-4 place-content-center">
                            <li>
                                <p className="text-xs font-medium text-gray-500">Pincode</p>
                                <p>{jobData.pincode}</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-gray-500">City</p>
                                <p>{jobData.city}</p>
                            </li>
                            <li>
                                <p className="text-xs font-medium text-gray-500">State</p>
                                <p>{jobData.state}</p>
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
                                <p>Job</p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-500">Sub-Category</p>
                                <p>{jobData.subCategory}</p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-500">Services Offered</p>
                                <p>{jobData.numberOfServices}</p>
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
                                        <button onClick={() => showInterst(jobData._id)} className="btn bg-lightOrange text-white hover:bg-orange">Show Interest</button>
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
