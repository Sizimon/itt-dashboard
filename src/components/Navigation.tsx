import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

interface NavigationProps {
    isFolded: boolean;
    onToggleSidebar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isFolded, onToggleSidebar }) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true'
    });

    const handleLogout = () => {
        // Simulate logout
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div
            className={`flex flex-col h-screen justify-between bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-white fixed top-0 left-0 transition-all duration-300 
                ${isFolded ? 'hidden md:flex w-8' : 'hidden md:flex w-64'
                }`}
        >
            <div>
                <button
                    className="w-full py-2 bg-zinc-300 dark:bg-zinc-900 transition-all duration-300 hover:bg-zinc-200 hover:dark:bg-zinc-800"
                    onClick={onToggleSidebar}
                >
                    {isFolded ? '>' : '<'}
                </button>

                {/* Navigation Links */}
                <nav className={`p-4 ${isFolded ? 'hidden' : 'block'}`}>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user-dashboard">User Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Dark Mode Toggle & Logout */}
            <div className={`text-center ${isFolded ? 'hidden' : 'flex flex-col items-center justify-center'} mb-8`}>
                <div className="w-4/6">
                    <button
                        className='space-y-2 p-4 mb-4 w-full bg-zinc-300 dark:bg-zinc-900 rounded cursor-pointer transition-all duration-300 hover:bg-zinc-200 hover:dark:bg-zinc-800'
                        onClick={toggleDarkMode}
                    >
                        Toggle {darkMode ? 'Light' : 'Dark'} Mode
                    </button>
                    {isAuthenticated ? (
                        <button
                            className='space-y-2 p-4 mb-8 w-full text-white bg-amber-600 rounded cursor-pointer transition-all duration-300 hover:bg-amber-500'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <p className="text-sm">
                            You are not logged in, login <a href="/login" className="text-amber-600 hover:underline">here.</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navigation;