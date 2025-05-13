import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-zinc-800">
                <h1 className="dark:text-white text-2xl font-bold mb-4">Welcome Back, User</h1>
            </div>
        </Layout>
    );
}

export default UserDashboard;