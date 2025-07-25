import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadalla",
        text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 4,
        name: "Hari Om",
        text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        img: "https://picsum.photos/102/102",
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div className="my-6 ">
                                <div key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-800 bg-primary/10 relative">
                                    <div className="mb-4">
                                        <img src={data.img} alt="" 
                                            className="rounded-full w-20 h-20 " />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">{data.text}</p>
                                            <h2 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h2>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ''
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
