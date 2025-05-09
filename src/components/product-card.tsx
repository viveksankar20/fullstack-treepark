import React from 'react'
import { IoMdStar } from "react-icons/io";
import Button from './button';
import Image from 'next/image';

interface ProductCardData {
    id: number;
    productName: string;
    price: number;
    discount: number;
    productRating: number;
    productImageUrl: string;
    category: string;

}

function Card({ productCardData }: { productCardData: ProductCardData }) {
    console.log(productCardData)
    return (
        <div className='mx-2'>
            <div className='group   rounded bg-[#FFFFFF]  relative'>
                {/* <span className='p-2 bg-[#FED02F]'>12%</span> */}

                <Image src="https://www.ugaoo.com/cdn/shop/files/1_cce982de-b1ea-473c-8687-004af7fb18f1.jpg?v=1740136077&width=1100" width={500} height={500} className='rounded' alt="" />

                <div className=' space-y-3'>
                    <p className='text-center ~text-md/lg font-normal my-2 tracking-wide'>Brazeliant wood plant</p>

                    <div>
                        <div className='w-5 group-hover:w-full transition-all duration-500 my-2 h-[1px] group-hover:bg-gray-300 '></div>
                        <div className='flex  gap-x-2 justify-center'> <del className='text-xs mt-3 dark:text-black'>₹ 1999.0</del><span className='~text-md/lg text-[#0A4C36] font-medium'>From ₹ 544.00</span></div>
                        <div className='flex justify-center text-[#FFB503] ~text-lg/xl'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />

                        </div>
                    </div>
                    <Button className='w-full ~text-sm/lg'>VIEW PRODUCT</Button>
                </div>
            </div>
        </div>
    )
}

export default Card;
