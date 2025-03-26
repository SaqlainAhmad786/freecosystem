import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom"
import axios from "axios"

function ProductCard({ product }) {
    const { userInterests } = useAuth();

    async function showInterst(id) {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/interests`, { listingId: id, listingType: 'product', message: 'hello' }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="w-72 bg-white border border-lightOrange rounded-lg overflow-hidden">
                <Link to={`/productDetail/${product._id}`}>
                    <img src={product.files[0]} className="w-full h-40 object-cover" alt="" />
                    <div className="px-5 py-3">
                        <h4 className="text-lg font-semibold mb-1 truncate" title={product.title}>{product.title}</h4>
                        <p className="text-sm text-gray-500">{product.city}, {product.state} ({product.pincode})</p>
                        <p className="text-sm text-gray-500">Qty.: {product.quantity}</p>
                        <p className="text-sm text-gray-500">Status: <span className="text-green-500 capitalize font-medium">{product.status}</span></p>
                    </div>
                </Link>
                {userInterests.filter((interest) => interest.listing._id === product._id).length > 0
                    ? <button className="btn-block bg-orange duration-200 text-white font-medium text-sm py-2" disabled>Interest showned</button>
                    : <button onClick={() => showInterst(product._id)} className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                }
            </div>
        </>
    )
}

export default ProductCard
