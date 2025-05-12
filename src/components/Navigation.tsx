import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
    isFolded: boolean;
    onToggleSidebar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isFolded, onToggleSidebar }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    console.log('Dark mode:', darkMode);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div 
            className={`flex flex-col h-screen justify-between bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white fixed top-0 left-0 transition-all duration-300 
                ${isFolded ? 'w-16' : 'w-64'
            }`}
        >
            <div>
                <button
                    className="w-full py-2 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-600"
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

            {/* Dark Mode Toggle */}
            <div className={`text-center ${isFolded ? 'hidden' : 'block'}`}>
                <button
                    className='space-y-2 p-4 mb-8 bg-zinc-300 dark:bg-zinc-800 rounded cursor-pointer transition-all duration-300 hover:bg-zinc-200 hover:dark:bg-zinc-600'
                    onClick={toggleDarkMode}
                >
                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>

        </div>
    );
};
export default Navigation;