import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/cccPin.PNG';
import { NavLink, useLocation } from 'react-router-dom';
import './appBar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky" style={{ backgroundColor: '#353535', height: '80px' }}>
        <Toolbar>
          {/* Logo */}
          <Box component="img" sx={{ height: 64, pt: '8px' }} alt="Your logo." src={logo} />

          {/* Button Display */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              justifyContent: 'flex-end',
              flexGrow: 1,  // Ensure this Box takes up all available space
              alignItems: 'center',
            }}
          >
            <NavLink to='/' className={`link ${location.pathname === '/' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Home</NavLink>
            <NavLink to='/aboutus' className={`link ${location.pathname === '/aboutus' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>About Us</NavLink>
            <NavLink to='/sermons' className={`link ${location.pathname === '/sermons' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Sermons</NavLink>
            <NavLink to='/events' className={`link ${location.pathname === '/events' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Events</NavLink>
            <NavLink to='/onlinegiving' className={`link ${location.pathname === '/onlinegiving' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Online Giving</NavLink>
            <NavLink to='/visitus' className={`link ${location.pathname === '/visitus' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Visit Us</NavLink>
            <NavLink to='/blog' className={`link ${location.pathname === '/blog' ? 'active' : ''}`} style = {{ marginLeft: '16px' }}>Blog</NavLink>
          </Box>

          {/* Hamburger Icon */}
        <Box
          sx={{marginLeft: 'auto'}}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
            }}
            >
            <MenuIcon />
          </IconButton>
        </Box>
          {/* Drawer */}
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            {/* Open Drawer */}
            <Box sx={{ 
              p: 2, 
              height: '100%', 
              backgroundColor: '#353535', 
              }}>
              <IconButton 
              sx={{ 
                mb: 2,
                color: 'white',
              }} onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                }}>
                <NavLink to='/' className={`link ${location.pathname === '/' ? 'active' : ''}`} >Home</NavLink>
                <NavLink to='/aboutus' className={`link ${location.pathname === '/aboutus' ? 'active' : ''}`} >About Us</NavLink>
                <NavLink to='/sermons' className={`link ${location.pathname === '/sermons' ? 'active' : ''}`} >Sermons</NavLink>
                <NavLink to='/events' className={`link ${location.pathname === '/events' ? 'active' : ''}`} >Events</NavLink>
                <NavLink to='/onlinegiving' className={`link ${location.pathname === '/onlinegiving' ? 'active' : ''}`} >Online Giving</NavLink>
                <NavLink to='/visitus' className={`link ${location.pathname === '/visitus' ? 'active' : ''}`} >Visit Us</NavLink>
                <NavLink to='/blog' className={`link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</NavLink>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
