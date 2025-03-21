import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/authContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyOtp from "./pages/VerifyOtp"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Jobs from "./pages/Jobs"
import Matrimony from "./pages/Matrimony"
import Page404 from "./pages/Page404"
import ProductDetail from "./pages/ProductDetail"
import ServiceDetail from "./pages/ServiceDetail"
import JobDetails from "./pages/JobDetails"
import MatrimonyProfile from "./pages/MatrimonyProfile"
import PostAd from "./pages/PostAd"
import Profile from "./pages/Profile"
import YourAds from "./pages/YourAds"
import EditProduct from "./components/EditProduct/EditProduct"
import EditService from "./components/EditService/EditService"
import EditJob from "./components/EditJob/EditJob"
import Interests from "./pages/Interests"
import LoggedIn from "./components/LoggedIn/LoggedIn"
import NotLoggedIn from "./components/NotLoggedIn/NotLoggedIn"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoggedIn Component={Login} />} />
            <Route path="/signup" element={<LoggedIn Component={Signup} />} />
            <Route path="/verifyOtp" element={<LoggedIn Component={VerifyOtp} />} />
            <Route path="/profile" element={<NotLoggedIn Component={Profile} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/serviceDetail" element={<ServiceDetail />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobDetail/:id" element={<JobDetails />} />
            <Route path="/matrimony" element={<Matrimony />} />
            <Route path="/matrimonyProfile" element={<MatrimonyProfile />} />
            <Route path="/postAd" element={<NotLoggedIn Component={PostAd} />} />
            <Route path="/ads" element={<NotLoggedIn Component={YourAds} />} />
            <Route path="/interests" element={<NotLoggedIn LoggedIn Component={Interests} />} />
            <Route path="/editProduct" element={<NotLoggedIn Component={EditProduct} />} />
            <Route path="/editService" element={<NotLoggedIn Component={EditService} />} />
            <Route path="/editJob" element={<NotLoggedIn Component={EditJob} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App