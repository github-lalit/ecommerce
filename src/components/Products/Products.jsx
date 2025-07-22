import React from 'react'
import Img1 from "../../assets/women/image1.jpg";
import Img2 from "../../assets/women/image2.jpg";
import Img3 from "../../assets/women/image3.jpg";
import Img4 from "../../assets/women/image4.jpg";
import Img5 from "../../assets/women/image5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color:"white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Special",
        rating: 5.0,
        color:"gray",
        aosDelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: "Women Likes",
        rating: 5.0,
        color:"red",
        aosDelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: "Men's Ethnic",
        rating: 5.0,
        color:"blue",
        aosDelay: "0",
    },
    {
        id: 5,
        img: Img5,
        title: "Super Sale",
        rating: 5.0,
        color:"yellow",
        aosDelay: "0",
    },
]

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card Section */}
                        {ProductsData.map((data) => (
                            <div 
                                data-aos="fade-up" 
                                data-aos-delay={data.aosDelay} 
                                key={data.id} 
                                className="space-y-3">
                                <img src={data.img} alt=""
                                    className="h-[220px] 2-[150px] object-cover rounded-md" />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600 ">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all button */}
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
