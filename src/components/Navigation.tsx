import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const [isFolded, setIsFolded] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsFolded(!isFolded);
    }
    return (
        <div className={`h-screen bg-gray-800 text-white fixed top-0 left-0 transition-all duration-300 ${isFolded ? 'w-16' : 'w-64'}`}>
            <button 
            className="bg-gray-700 hover:bg-gray-600 text-white w-full py-2"
            onClick={toggleSidebar}
            >
                {isFolded ? '>' : '<'}
            </button>
            <nav className='mt-4'>
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
    );
};
export default Navigation;