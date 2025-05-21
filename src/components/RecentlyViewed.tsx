import React, { useState, useEffect } from 'react';
import { FaRegListAlt, FaRegStickyNote } from "react-icons/fa";
import { MdOutlineViewKanban } from "react-icons/md";

const cards = [
    {
        icon: <FaRegStickyNote className="text-xl" />,
        type: "TYPE",
        label: "Cron to update SSL"
    },
    {
        icon: <FaRegListAlt className="text-xl" />,
        type: "TYPE",
        label: "Sunday List"
    },
    {
        icon: <MdOutlineViewKanban className="text-xl" />,
        type: "TYPE",
        label: "Portfolio Kanban"
    }
]

const RecentlyViewed: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className='flex flex-col items-center bg-zinc-200 p-4 rounded-lg shadow-lg mb-4'>
            <p className='text-sm mb-4'>CLOCK Recently visited</p>
            <div className='flex flex-row items-center justify-center space-x-2'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center rounded-sm transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'bg-amber-600 text-white' : 'bg-white'} cursor-pointer flex-1 min-w-0 max-w-xs h-32`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`w-full text-center py-2 rounded-t-sm transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'bg-white' : 'bg-amber-600'}`}>
                            <div className={`flex space-x-2 items-center justify-center transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'text-amber-600' : 'text-white'}`}>
                                {card.icon}
                                <p>{card.type}</p>
                            </div>
                        </div>
                        <div className='m-auto p-4 w-full text-center'>
                            <p>{card.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentlyViewed;