import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { motion } from 'framer-motion';

interface SidebarLinkProps {
    to: string;
    children: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <li
            className='relative overflow-hidden'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: hovered ? '100%' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute left-0 top-0 h-full bg-amber-600 z-0"
            />
            <Link
                to={to}
                className="relative z-10 block px-4 py-2 transition-colors duration-150"
            >
                {children}
            </Link>
        </li>
    )
};

interface NavigationProps {
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
    sidebarRef: React.RefObject<HTMLDivElement | null>;
}

const Navigation: React.FC<NavigationProps> = ({
    sidebarOpen,
    onToggleSidebar,
    sidebarRef,
}) => {
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
            ref={sidebarRef}
            className={`
                fixed top-0 left-0 h-full z-30
                bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-white
                transition-all duration-300
                ${sidebarOpen ? 'w-64' : 'w-0'}
                md:flex md:flex-col md: justify-between
            `}
        >
            <div>
                {/* Navigation Links */}
                <nav className={`p-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    <ul className="space-y-2">
                        <SidebarLink to="/">Home</SidebarLink>
                        <SidebarLink to="/about">About</SidebarLink>
                        <SidebarLink to="/user-dashboard">User Dashboard</SidebarLink>
                        <SidebarLink to="/login">Login</SidebarLink>
                        <SidebarLink to="/register">Register</SidebarLink>
                    </ul>
                </nav>
            </div>

            {/* Dark Mode Toggle & Logout */}
            <div className={`text-center ${sidebarOpen ? 'flex flex-col items-center justify-center' : 'hidden'} mb-8`}>
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