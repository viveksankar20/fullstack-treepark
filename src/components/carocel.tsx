"use client";
import React, { useEffect, useState } from 'react'
import Button from './button';
function Carocel() {
    const slideImage: string[] = [
        "https://www.ugaoo.com/cdn/shop/files/plantcare-banner_a37f8e27-0c3f-495d-b459-1fb83b5920a5.png?v=1739963487&width=2000",
        "https://www.ugaoo.com/cdn/shop/files/Bundles-Banner_6d0e3e59-0b21-4038-a8a1-b0582cdd4f0a.jpg?v=1739959151&width=2000",
        "https://www.ugaoo.com/cdn/shop/files/planters-banner_a6236c08-21f0-4314-b870-0482f5de8b1a.png?v=1739963487&width=2000"
      ];
      const [count, setCount] = useState<number>(0);
    
      // Optional: Auto-slide every 5 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCount((prev) => (prev + 1) % slideImage.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="relative">
          <img src={slideImage[count]} className="w-full h-full" alt="" />
          <div className="w-full text-center absolute ~bottom-7/20  ">
            {/* <button className="bg-[#029354] text-white ~p-1/3 ~text-sm/lg font-medium ~px-3/7 rounded transition-transform duration-300 hover:scale-90 " type="button">Shop Now</button> */}
            <Button className="py-2">Shop Now</Button>
          </div>

        </div>
  )
}

export default Carocel
