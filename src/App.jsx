import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/serviceDetail" element={<ServiceDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobDetail" element={<JobDetails />} />
          <Route path="/matrimony" element={<Matrimony />} />
          <Route path="/matrimonyProfile" element={<MatrimonyProfile />} />
          <Route path="/postAd" element={<PostAd />} />
          <Route path="/ads" element={<YourAds />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/editService" element={<EditService />} />
          <Route path="/editJob" element={<EditJob />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App