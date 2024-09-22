import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import WritingSection from './WritingSection';

const Home = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className='flex h-screen'>
            <Sidebar isExpanded={isSidebarExpanded} />
            <div className='flex flex-col flex-1'>
                <Navbar toggleSidebar={toggleSidebar} isSidebarExpanded={isSidebarExpanded} />
                <WritingSection />
            </div>
        </div>
    );
}

export default Home;