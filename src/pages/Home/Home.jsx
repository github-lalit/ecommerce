import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'
import TopProducts from '../../components/TopProducts/TopProducts';
import Banner from '../../components/Banner/Banner';
import Subscribe from '../../components/Subscribe/Subscribe';
import Testimonials from '../../components/Testimonials/Testimonials';
import Popup from '../../components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = ({ handleOrderPopup, orderPopup, setOrderPopup }) => {

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: "100"
        }),
            AOS.refresh();
    }, [])

    return (
        <>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
    )
}

export default Home