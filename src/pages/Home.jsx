import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection"
import Navbar from "../components/Navbar/Navbar"
import SignupBanner from "../components/SignupBanner/SignupBanner"
import Footer from "../components/Footer/Footer"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Aos from "aos";
import "aos/dist/aos.css";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Home() {
    useEffect(() => {
        Aos.init()
    })

    const options = {
        type: 'slide',
        perPage: 4,
        gap: '0.75rem',
        arrows: false,
        pagination: true,
        perMove: 1,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            900: {
                perPage: 2,
                autoplay: true,
            },
            600: {
                perPage: 1,
                autoplay: true,
                pagination: false,
            },
        },
    }

    const options2 = {
        type: 'slide',
        perPage: 4,
        gap: '0.75rem',
        pagination: true,
        arrows: false,
        perMove: 1,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            900: {
                perPage: 2,
                autoplay: true,
            },
            600: {
                perPage: 1,
                autoplay: true,
                pagination: false,
            },
        },
    }
    const options3 = {
        type: 'slide',
        perPage: 4,
        gap: '0.75rem',
        pagination: true,
        perMove: 1,
        arrows: false,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            900: {
                autoplay: true,
                perPage: 2,
            },
            600: {
                perPage: 1,
                autoplay: true,
                pagination: false,
            },
        },
    }

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <section className="bg-lightOrange py-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-5">How it works?</h2>
                    <div className="customContainer mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center p-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once>
                            <img src="/images/post.png" className="w-16 h-16" alt="" />
                            <h3 className="my-2 text-2xl font-semibold text-white">List items</h3>
                            <div className="text-sm text-center leading-tight text-gray-100">
                                <p>Share what you no longer need</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once>
                            <img src="/images/browse.png" className="w-16 h-16" alt="" />
                            <h3 className="my-2 text-2xl font-semibold text-white">Needy Browses</h3>
                            <div className="text-sm text-center leading-tight text-gray-100">
                                <p>People in need find your items</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" data-aos-once>
                            <img src="/images/connect.png" className="w-16 h-16" alt="" />
                            <h3 className="my-2 text-2xl font-semibold text-white">Connect & Help</h3>
                            <div className="text-sm text-center leading-tight text-gray-100">
                                <p>Approve requests and connect via call</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="customContainer my-10">
                    <h3 className="text-4xl font-bold text-center mb-5">Latest Product Ads</h3>
                    <div>
                        <Splide aria-label="products slides" options={options} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="text-center">
                        <Link to={''} className="border px-3 py-2 border-gray-500 rounded-lg hover:bg-black hover:text-white duration-200 inline-block mt-3">View all...</Link>
                    </div>
                </section>
                <section className="customContainer my-10">
                    <h3 className="text-4xl font-bold text-center mb-5">Latest Services Ads</h3>
                    <div>
                        <Splide aria-label="services slides" options={options2} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" />
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Product Name</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Qty: 10</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Show Interest</button>
                                </Link>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="text-center">
                        <Link to={''} className="border px-3 py-2 border-gray-500 rounded-lg hover:bg-black hover:text-white duration-200 inline-block mt-5">View all...</Link>
                    </div>
                </section>
                <section className="customContainer my-10">
                    <h3 className="text-4xl font-bold text-center mb-5">Latest Jobs Posted</h3>
                    <div>
                        <Splide aria-label="jobs slides" options={options3} className="pb-8">
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                            <SplideSlide className="flex justify-center items-center">
                                <Link className="w-72 bg-white inline-block border border-lightOrange rounded-lg overflow-hidden">
                                    {/* <img src="/images/product1.jpg" className="w-full h-48 object-cover" alt="" /> */}
                                    <div className="px-5 py-3">
                                        <h4 className="text-lg font-semibold mb-1">Web Developer</h4>
                                        <p className="text-sm text-gray-500">Varanasi, UP, India</p>
                                        <p className="text-sm text-gray-500">Positions: 1</p>
                                        <p className="text-md text-gray-700 font-medium mt-1">Dizi Global Solutions</p>
                                        <p className="text-sm text-gray-500">Status: <span className="text-green-500">Active</span></p>
                                    </div>
                                    <button className="btn-block bg-lightOrange hover:bg-orange duration-200 text-white font-medium text-sm py-2">Read more</button>
                                </Link>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="text-center">
                        <Link to={''} className="border px-3 py-2 border-gray-500 rounded-lg hover:bg-black hover:text-white duration-200 inline-block mt-5">View all...</Link>
                    </div>
                </section>
                <SignupBanner />
                <Footer />
            </main>
        </>
    )
}

export default Home
