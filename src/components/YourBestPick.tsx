import React from 'react'

function YourBestPick() {
    const bestPicImages = [
        "https://www.ugaoo.com/cdn/shop/files/Plants_731fd685-a5e3-4d75-a75c-a5f643e07676.png?v=1739963491&width=535",
        "https://www.ugaoo.com/cdn/shop/files/Seeds_9d649188-a482-412d-8673-ce3d1ca89d7e.png?v=1739963487&width=535",
        "https://www.ugaoo.com/cdn/shop/files/Pots_and_Planters_7950ef20-1be7-43b6-88da-c9daae4d28ed.png?v=1739963489&width=535",
        "https://www.ugaoo.com/cdn/shop/files/Plant_Care_b1543fe8-daf1-4579-9c6d-b11b801736f6.png?v=1739963488&width=535"
    ]
    return (
        <div className='mt-10'>
            <h1 className='text-center my-5 ~text-xl/4xl font-medium dark:text-white text-[#0A4C36] '>Your Best Picks</h1>
            <div className='grid lg:grid-cols-4 grid-cols-2  gap-5 px-2' >
                {bestPicImages.map((val, index) => (
                    <img src={val} alt="" key={index} />
                ))}

            </div>
        </div>
    )
}

export default YourBestPick
