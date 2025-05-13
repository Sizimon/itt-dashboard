import React, { useState } from 'react';
import Navigation from './components/Navigation';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isFolded, setIsFolded] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsFolded(!isFolded);
    }

    return (
        <div className="flex h-screen">
            <Navigation isFolded={isFolded} onToggleSidebar={toggleSidebar} />
            <main 
                className={`flex-1 transition-all duration-300 ${isFolded ? 'md:ml-8' : 'md:ml-64'}`}
                >
                {children}
            </main>
        </div>
    );
};

export default Layout;