import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotLoggedIn({ Component }) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return <Component />
}

export default NotLoggedIn
