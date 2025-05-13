import React, { useState } from 'react';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Simulate logout
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-zinc-800">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </Layout>
    );
}

export default UserDashboard;