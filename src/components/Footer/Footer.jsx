import { Link } from "react-router-dom"
import { Facebook, Instagram, Mail } from "lucide-react"

function Footer() {
    return (
        <>
            <footer className="py-6 bg-lightOrange text-gray-50">
                <div className="customContainer px-6 mx-auto space-y-6 divide-y divide-white md:space-y-12 divide-opacity-50">
                    <div className="grid grid-cols-12">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <Link to={"/"} className="flex justify-center space-x-3 md:justify-start">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-400">
                                    <img src="/images/favicon.svg" alt="" />
                                </div>
                                <span className="self-center text-2xl font-semibold">Freecosystem</span>
                            </Link>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Category</p>
                            <ul>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Category</p>
                            <ul>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                                <li>
                                    <Link to={''} className="hover:text-orange">Link</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2025 All rights reserved</span>
                            <a rel="noopener noreferrer" href="#">
                                <span>Privacy policy</span>
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                <span>Terms of service</span>
                            </a>
                        </div>
                        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                            <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange">
                                <Facebook />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange">
                                <Instagram />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange">
                                <Mail />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
