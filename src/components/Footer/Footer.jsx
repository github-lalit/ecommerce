import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from '../../assets/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa6'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const FooterLink = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Contact", link: "/" },
    { title: "Blog", link: "/" },
]

const Footer = () => {
    return (
        <div style={BannerImg} className="text-white">
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* Company Details */}
                    <div className="py-8 px-4">
                        <h2 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="" 
                               className="max-w-[50px]" /> Shopsy</h2>
                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {/* Footer links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h2 className="sm:text-1xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h2>
                                <ul className="flex flex-col gap-3">
                                    {FooterLink.map((link) => (
                                        <li key={link.title}>
                                            <a className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"  href={link.link}>
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h2 className="sm:text-1xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Links
                                </h2>
                                <ul className="flex flex-col gap-3">
                                    {FooterLink.map((link) => (
                                        <li key={link.title}>
                                            <a 
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" 
                                             href={link.link}>
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex items-certer gap-3 mt-6">
                                <a href='#'>
                                    <FaInstagram className="text-3xl " />
                                </a>
                                <a href='#'>
                                    <FaFacebook className="text-3xl " />
                                </a>
                                <a href='#'>
                                    <FaLinkedin className="text-3xl " />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhone />
                                    <p>+91 98746321</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
