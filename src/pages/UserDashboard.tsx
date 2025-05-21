import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import RecentlyViewed from '../components/RecentlyViewed';
import { motion } from 'framer-motion';
import { FaRegListAlt, FaRegStickyNote } from "react-icons/fa";
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
        icon: <MdOutlineViewKanban className="text-xl" />,
        title: "Portfolio Development Kanban",
        label: "List of tasks to continue developing my portfolio.",
        tags: ["portfolio", "development", "kanban"],
    },
]


interface CreateTaskModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    handleModalClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ showModal, setShowModal, handleModalClose }) => {
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
                    <div className="flex flex-col items-center bg-amber-600 w-1/3 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <FaRegStickyNote className="text-white text-4xl" />
                        <h2>Create Note</h2>
                    </div>
                    <div className="flex flex-col items-center bg-amber-600 w-1/3 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <FaRegListAlt className="text-white text-4xl" />
                        <h2>Create List</h2>
                    </div>
                    <div className="flex flex-col items-center bg-amber-600 w-1/3 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <MdOutlineViewKanban className="text-white text-4xl" />
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

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
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
                    <ul className='flex space-x-4'>
                        <li className='uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'>Create new</li>
                        <li className='uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'>Sort: Method</li>
                        <li className='uppercase p-2 rounded cursor-pointer transition-all duration-300 hover:text-amber-600'>Filter</li>
                    </ul>
                </nav>
                <div className='bg-zinc-100 dark:bg-zinc-950 w-4/6 mt-8 p-8 rounded-lg'>
                {userContent ? (
                    /* This will be a for loop to display every user created task */
                    <div className='grid grid-cols-2 grid-flow-row md:grid-cols-3 justify-items-center w-full px-4 space-x-4'>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center bg-zinc-200 dark:bg-zinc-900 p-4 rounded-lg shadow-lg mb-4'
                            >
                                <div className='flex flex-row items-center justify-center gap-2 mb-4'>
                                    {card.icon}
                                    <h2 className='text-xl'>{card.title}</h2>
                                </div>
                                <p className='text-sm'>{card.label}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl mb-4">Let's create your first task!</h2>
                        <button
                            className='space-y-2 p-4 mb-8 w-full text-white bg-amber-600 rounded cursor-pointer transition-all duration-300 hover:bg-amber-500'
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
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleModalClose={handleModalClose}
                />
            )}
        </Layout>
    );
}

export default UserDashboard;