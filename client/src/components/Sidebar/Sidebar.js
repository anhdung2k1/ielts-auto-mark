import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Sidebar = ({ isExpanded }) => {
    const [activePage, setActivePage] = useState('New Session');

    const menuItems = [
        { name: 'Writing', icon: <LibraryBooksIcon /> },
        { name: 'Speaking', icon: <RecordVoiceOverIcon /> },
    ];

    const getItemStyle = (page) => ({
        backgroundColor: activePage === page ? '#2d3748' : undefined,
        color: activePage === page ? 'text-white' : 'text-black',
    });

    return (
        <div className={`bg-gray-200 text-black h-screen p-4 shadow-lg ${isExpanded ? 'w-72' : 'w-24'}`}>
            <List>
                {menuItems.map((item) => (
                    <ListItem 
                        key={item.name}
                        button="true"
                        className={`mb-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                            activePage === item.name ? 'bg-gray-800 text-white' : ''
                        }`}
                        onClick={() => setActivePage(item.name)}
                        style={getItemStyle(item.name)}
                    >
                        <ListItemIcon>
                            {React.cloneElement(item.icon, {
                                className: activePage === item.name ? 'text-white' : 'text-black',
                            })}
                        </ListItemIcon>
                        {isExpanded && (
                            <ListItemText
                                primary={item.name}
                                className={activePage === item.name ? 'font-semibold' : ''}
                            />
                        )}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Sidebar;
