import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [productsList, setProductsList] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [jobsList, setJobsList] = useState([]);
    const [matrimonailProfiles, setMatrimonailProfiles] = useState([]);
    const [userAds, setUserAds] = useState([]);
    const [userInterests, setUserInterests] = useState([]);
    const [receivedInterests, setReceivedInterests] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            getUserData()
        }
        getProductListings()
        getServiceListings()
        getJobsListings()
        getMatrimonailProfiles()
        getUserAds()
        getUserInterests()
        getReceivedInterests()
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

    async function getUserAds() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/listings/my-listings`, { headers: { Authorization: `Bearer ${token}` } });
            setUserAds(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserInterests() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/interests/sent`, { headers: { Authorization: `Bearer ${token}` } });
            setUserInterests(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getReceivedInterests() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/interests/received`, { headers: { Authorization: `Bearer ${token}` } });
            setReceivedInterests(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setUserData(null);
    }

    const values = {
        userData,
        getUserData,
        logout,
        productsList,
        servicesList,
        jobsList,
        matrimonailProfiles,
        userAds,
        userInterests,
        receivedInterests

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);