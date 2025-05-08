import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    const footerProverb=[
        {
            proverb:'Plants Grow People',
            imageUrl:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964'
        },
        {
            proverb:'Plants Grow People',
            imageUrl:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964'
        },
        {
            proverb:'Plants Grow People',
            imageUrl:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964'
        },
        {
            proverb:'Plants Grow People',
            imageUrl:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964'
        },
        {
            proverb:'Plants Grow People',
            imageUrl:'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964'
        }
    ]
    return (
        <div>
            <div className='bg-[#0A4C36] py-2'>
                <div className='container mx-auto flex justify-evenly'>
                  {footerProverb.map((val,index)=>(  <div key={index} className='flex items-center gap-1'>
                <img src={val.imageUrl} alt="" />
<p className='text-white font-medium '>{val.proverb}</p>
</div>))}


                </div>
                
                
                </div>
            <div className='top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <h1>Tree Park</h1>
                <p>Connect With Us</p>
                <div className='flex text-2xl'>
                    <FaTwitterSquare />
                    <FaSquareFacebook />
                    <FaSquareInstagram />
                    <FaWhatsappSquare />
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer
