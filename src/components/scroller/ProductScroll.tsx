import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const skills = [
    {
        id: 1,
        title: 'Web Development',
        image: '/photo-1488590528505-98d2b5aba04b.jpg',
    },
    {
        id: 2,
        title: 'Programming',
        image: '/photo-1461749280684-dccba630e2f6.jpg',
    },
    {
        id: 3,
        title: 'UI/UX Design',
        image: '/photo-1486312338219-ce68d2c6f44d.jpg',
    },
    {
        id: 4,
        title: 'System Architecture',
        image: '/photo-1518770660439-4636190af475.jpg',
    },
    {
        id: 5,
        title: 'Software Engineering',
        image: '/photo-1498050108023-c5249f4df085.jpg',
    },
];

const ProductScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += 1;
            }
        };

        const intervalId = setInterval(scroll, 20);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex">
                            {[...skills, ...skills].map((skill, index) => (
                                <div
                                    key={`${skill.id}-${index}`}
                                    className="flex-shrink-0 w-80 cursor-pointer px-1"
                                >
                                    <div className="relative h-48 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                                        <Image
                                            src={skill.image}
                                            alt={skill.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-white text-xl font-semibold">{skill.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductScroll;
