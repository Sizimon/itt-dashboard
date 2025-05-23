import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import RecentlyViewed from '../components/RecentlyViewed';
import { motion } from 'framer-motion';
import { FaRegListAlt, FaRegStickyNote, FaCaretDown } from "react-icons/fa";
import { MdOutlineViewKanban } from "react-icons/md";

const cards = [
    {
        icon: <FaRegStickyNote className="text-xl" />,
        title: "Cron SSL",
        label: "Basic Cron to automatically renew SSL every 3 months.",
        tags: ["cron", "ssl", "renew"],
    },
    {
        icon: <FaRegListAlt className="text-xl" />,
        title: "Environment Setup",
        label: "Checklist to setup your dev environment.",
        tags: ["setup", "environment", "dev"],
    },
    {
        icon: <MdOutlineViewKanban className="text-2xl" />,
        title: "Portfolio Development Kanban",
        label: "List of tasks to continue developing my portfolio.",
        tags: ["portfolio", "development", "kanban"],
    },
]


interface CreateTaskModalProps {
    handleModalClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ handleModalClose }) => {
    return (
        <motion.div
            className='fixed inset-0 flex items-center justify-center bg-black/60 z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
        >
            <motion.div
                className='bg-white text-white dark:bg-zinc-800 dark:text-white rounded-lg shadow-lg p-8 w-1/3'
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <div
                    className='flex flex-row items-center justify-center text-center space-x-4'>
                    <div className="flex flex-col items-center bg-amber-600 w-1/4 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <FaRegStickyNote className="text-white text-2xl" />
                        <h2>Create Note</h2>
                    </div>
                    <div className="flex flex-col items-center bg-amber-600 w-1/4 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <FaRegListAlt className="text-white text-2xl" />
                        <h2>Create List</h2>
                    </div>
                    <div className="flex flex-col items-center bg-amber-600 w-1/4 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <MdOutlineViewKanban className="text-white text-2xl" />
                        <h2>Create Kanban</h2>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

const UserDashboard: React.FC = () => {
    const [userContent, setUserContent] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [sortMenuOpen, setSortMenuOpen] = useState<boolean>(false);
    const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleSortMenuToggle = () => {
        setSortMenuOpen(!sortMenuOpen);
    }

    const handleFilterMenuToggle = () => {
        setFilterMenuOpen(!filterMenuOpen);
    }

    return (
        <Layout>
            <div className="flex flex-col w-full text-zinc-800 dark:text-white items-center justify-center h-screen bg-white dark:bg-zinc-900">
                <div>
                    <h1 className='text-4xl md:text-6xl'>In<span className='text-amber-600'>Time</span>Tasks</h1>
                    <h1 className="text-3xl font-bold my-4">WELCOME BACK, <span className='text-amber-600'>User</span></h1>
                    <RecentlyViewed />
                </div>
                <nav className='w-full flex bg-zinc-200 dark:bg-zinc-950 text-black dark:text-white justify-center p-4 rounded-b-lg shadow-lg'>
                    <ul className='flex space-x-4 relative'>
                        <button
                            className='uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'
                            onClick={handleModalOpen}
                        >
                            <li>Create New</li>
                        </button>
                        <button 
                            className='flex items-center space-x-1 uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'
                            onClick={handleSortMenuToggle}
                        >
                            <li>Sort: Method</li>
                            <FaCaretDown />
                        </button>
                        {sortMenuOpen && (
                            <div 
                                className="absolute top-full left-[50%] mt-2 bg-white dark:bg-zinc-800 text-black dark:text-white shadow-lg rounded w-48 z-10"
                            >
                                <ul className="flex flex-col">
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Sort by Name</li>
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Sort by Date</li>
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Sort by Priority</li>
                                </ul>
                            </div>
                        )}
                        <button 
                            className='flex items-center space-x-1 uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'
                            onClick={handleFilterMenuToggle}
                        >
                            <li>Filter</li>
                            <FaCaretDown />
                        </button>
                        {filterMenuOpen && (
                            <div 
                                className="absolute top-full left-[75%] mt-2 bg-white dark:bg-zinc-800 text-black dark:text-white shadow-lg rounded w-48 z-10"
                            >
                                <ul className="flex flex-col">
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Filter by Tag</li>
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Filter by Status</li>
                                    <li className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">Filter by Date</li>
                                </ul>
                            </div>
                        )}
                    </ul>
                </nav>
                <div className='bg-zinc-100 dark:bg-zinc-950 w-11/12 mt-8 p-8 rounded-lg'>
                    {userContent ? (
                        /* This will be a for loop to display every user created task */
                        <div className='grid grid-cols-2 grid-flow-row md:grid-cols-3 justify-items-center w-full px-4 space-x-4'>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-center text-center p-4 rounded-lg shadow-lg mb-4 bg-zinc-200 dark:bg-zinc-900 w-10/12'
                                >
                                    <div className='flex flex-col items-center w-full justify-between mb-4 text-amber-600'>
                                        <div>
                                            <div className='flex items-center justify-center'>
                                                {card.icon}
                                            </div>
                                            <div className='flex items-center'>
                                                <h2 className='text-lg font-bold truncate'>{card.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-sm'>{card.label}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl mb-4">Let's create your first task!</h2>
                            <button
                                className='space-y-2 p-4 mb-8 w-1/4 text-white bg-amber-600 rounded cursor-pointer transition-all duration-300 hover:bg-amber-500'
                                onClick={handleModalOpen}
                            >
                                Create new Task
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {showModal && (
                <CreateTaskModal
                    handleModalClose={handleModalClose}
                />
            )}
        </Layout>
    );
}

export default UserDashboard;