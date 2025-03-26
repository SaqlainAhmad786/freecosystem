import axios from "axios";
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/authContext";

function ServiceCard({ service }) {
    const { userInterests } = useAuth();

    async function showInterst(id) {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/interests`, { listingId: id, listingType: 'service', message: 'hello' }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-72 bg-white border border-lightOrange rounded-lg overflow-hidden">
            <Link to={`/serviceDetail/${service._id}`}>
                <img src={service.files[0]} className="w-full h-48 object-cover" alt="" />
                <div className="px-5 py-3">
                    <h4 className="text-lg font-semibold mb-1 truncate">{service.title}</h4>
                    <p className="text-sm text-gray-500">{service.city}, {service.state} ({service.pincode})</p>
                    <p className="text-sm text-gray-500">{service.quantity}</p>
                    <p className="text-sm text-gray-500">Status: <span className="text-green-500 capitalize font-medium">{service.status}</span></p>
                </div>
            </Link>
            {userInterests.filter((interest) => interest.listing._id === service._id).length > 0
                ? <button className="btn-block bg-orange duration-200 text-white font-medium text-sm py-2" disabled>Interest showned</button>
                : <button onClick={() => showInterst(service._id)} className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
            }

        </div>
    )
}

export default ServiceCard
