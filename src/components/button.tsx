"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    className?: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={twMerge(
                    "relative overflow-hidden bg-[#029354] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 hover:bg-[#0A4C36]",
                    className
                )}
                {...props} // Allows additional props like onClick
            >
                <span className="relative z-10">{children}</span>

                {/* Spark Animation */}
                {isHovered && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white/10"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                )}
            </button>
        </div>
    );
};

export default Button;
