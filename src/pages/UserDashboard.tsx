import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { motion } from 'framer-motion';
import { FaBeer } from "react-icons/fa";


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
                    className='flex flex-row items-center justify-center text-center space-x-12'>
                    <div className="bg-amber-600 rounded-sm p-4 transition-all duration-300 hover:bg-amber-500 cursor-pointer">
                        <h1>Icon</h1>
                        <h2>Create Note</h2>
                    </div>
                    <div>
                        <FaBeer className="text-amber-600 text-4xl" />
                        <h2>Create List</h2>
                    </div>
                    <div>
                        <h1>Icon</h1>
                        <h2>Create Kanban</h2>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

const UserDashboard: React.FC = () => {
    const [userContent, setUserContent] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    return (
        <Layout>
            <div className="flex flex-col w-full text-zinc-800 dark:text-white items-center justify-center h-screen bg-white dark:bg-zinc-700">
                <h1 className="text-2xl font-bold mb-4">Welcome Back, User</h1>
                {userContent ? (
                    /* This will be a for loop to display every user created task */
                    <div className='grid grid-cols-2 grid-flow-col md:grid-cols-4 gap-4'>
                        <div className="p-32 rounded bg-zinc-200 dark:bg-zinc-800 shadow-lg">
                            <h2>Task 1</h2>
                            <p>Description of Task 1</p>
                        </div>
                        <div className="p-32 rounded bg-zinc-200 dark:bg-zinc-800 shadow-lg">
                            <h2>Task 2</h2>
                            <p>Description of Task 2</p>
                        </div>
                        <div className="p-32 rounded bg-zinc-200 dark:bg-zinc-800 shadow-lg">
                            <h2>Task 3</h2>
                            <p>Description of Task 3</p>
                        </div>
                        <div className="p-32 rounded bg-zinc-200 dark:bg-zinc-800 shadow-lg">
                            <h2>Task 4</h2>
                            <p>Description of Task 4</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <h2>Let's create your first task!</h2>
                        <button
                            className='space-y-2 p-4 mb-8 w-full text-white bg-amber-600 rounded cursor-pointer transition-all duration-300 hover:bg-amber-500'
                            onClick={handleModalOpen}
                        >
                            Create new Task
                        </button>
                    </div>
                )}
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