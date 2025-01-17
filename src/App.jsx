import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Jobs from "./pages/Jobs"
import Matrimony from "./pages/Matrimony"
import Page404 from "./pages/Page404"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/matrimony" element={<Matrimony />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
