"use client";
import React, { useEffect, useState } from 'react'

function HeaderOffers() {
    return (

        <div>
            <div className='bg-[#0F4C36] hidden  text-white lg:flex justify-evenly items-center p-3'>
                <p>Free Shipping above ₹499 | All India Delivery</p>
                <p>Organic Fertilizers | Shop Now</p>
                <p>Buy Our XL Plants</p>
            </div>
            <div className='lg:hidden block'>
                <MobileView />
            </div>
        </div>

    )
}

function MobileView() {
    const headContent: string[] = ["Free Shipping above ₹499 | All India Delivery", "Organic Fertilizers | Shop Now", "Buy Our XL Plants"]
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev + 1) % headContent.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className='bg-[#0F4C36] text-white p-3 text-center transition-all duration-700'>
            <p>{headContent[count]}</p>
        </div>
    )
}

export default HeaderOffers;
