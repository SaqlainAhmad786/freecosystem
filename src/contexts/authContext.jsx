import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [productsList, setProductsList] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [jobsList, setJobsList] = useState([]);
    const [matrimonailProfiles, setMatrimonailProfiles] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            getUserData()
        }
        getProductListings()
        getServiceListings()
        getJobsListings()
        getMatrimonailProfiles()
    }, [token])

    async function getUserData(tokenGen) {
        try {
            await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, { headers: { Authorization: `Bearer ${tokenGen || token}` } }).then(res => {
                setUserData(res.data.user);
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function getProductListings() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/product`);
            setProductsList(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getServiceListings() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/service`);
            setServicesList(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getJobsListings() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/job`);
            setJobsList(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getMatrimonailProfiles() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/job`);
            setMatrimonailProfiles(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setUserData(null);
    }

    return (
        <AuthContext.Provider value={{ userData, getUserData, logout, productsList, servicesList, jobsList }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);