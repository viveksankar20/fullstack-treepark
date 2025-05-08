import React from 'react'

interface Category {
    categoryName: string,
    categoryImage: string
}

interface Categoryprops {
    tools: Category[]
}

function Category({ tools }: Categoryprops) {

    return (
        <div className="flex lg:justify-evenly gap-x-0 my-5 w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide">
            {tools.map((tool, index) => (
                <div
                    key={index}
                    className=" transition-transform duration-300 hover:scale-105 snap-center"
                >
                    <div className="flex w-[140px] m-2 gap-y-3 flex-col items-center">
                        <img src={tool.categoryImage} className="rounded-full  w-32 h-32 object-cover" alt="" />
                        <p className="[text-shadow:_0_1px_0_var(--tw-shadow-color)]">{tool.categoryName}</p>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Category
