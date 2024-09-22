import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const Navbar = ({ toggleSidebar, isSidebarExpanded }) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
            <Toolbar className="flex justify-between">
                <div className="flex items-center">
                    <Tooltip title={isSidebarExpanded ? "Collapse menu" : "Expand menu"} arrow>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleSidebar}
                            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                        >
                            <MenuIcon className="text-black" />
                        </IconButton>
                    </Tooltip>
                    <Typography
                        variant="h6"
                        className="text-black ml-2 font-medium cursor-pointer hover:underline"
                        onClick={handleNavigateHome}
                    >
                        IELTS Evaluator
                    </Typography>
                </div>
                <div className="flex items-center">
                    <Typography
                        variant="body1"
                        className="text-black mr-6 cursor-pointer hover:underline"
                    >
                        Contact Us
                    </Typography>
                    <Avatar alt="User Avatar" src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/301143340_2666743866791311_7425085974907217968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=6qcPxtLRAF0Q7kNvgEVL638&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYDPghLVvOobYD-74g2GdHdfcYTzz8zL2p5BMd9If4K8CA&oe=66DCCCAF" className="bg-gray-200 ml-2" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
