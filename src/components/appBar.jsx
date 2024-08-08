// import * as React from 'react';
// import { useState } from 'react';
// import { AppBar, Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import logo from '../assets/cccPin.PNG';
// import { Link } from 'react-router-dom';
// import './appBar.css';
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// export default function Navbar() {

//     const [open, setState] = useState(false);

//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
//         setState(open);
//       };

//   return (
    
//     <Box sx={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: '#353535', height: '80px' }}>
//         <Toolbar>

//             {/* Logo */}
//             <Box component="img" sx={{ height: 64, pt: '8px' }} alt="Your logo." src={ logo } />

//             {/* Button Display */}
//             <Box  
//                 style={{marginLeft:"auto", textDecoration:'none'}}
//                 sx={{ 
//                 color: 'text.primary',
//                 justifyContent: "flex-right",
//                 flexDirection: "row", 
//                 display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline' } 
//                 }}>
//               <Link to='/' className='link'>Home</Link>
//               <Link to='/aboutus' className='link'>About Us</Link>
//               <Link to='/sermons' className='link'>Sermons</Link>
//               <Link to='/events' className='link'>Events</Link>
//               <Link to='/onlinegiving' className='link'>Online Giving</Link>
//               <Link to='/visitus' className='link'>Visit Us</Link>
//               <Link to='/blog'className='link' >Blog</Link> 

//                 {/* Hambuger Icon */}
//                     <IconButton 
//                     edge="start" 
//                     color="inherit" 
//                     aria-label="open drawer" 
//                     onClick={toggleDrawer(true)}
//                     sx={{
//                         justifyContent: "flex-right",
//                         flexDirection: "row", 
//                         display: { xs: 'inline', sm: 'inline', md: 'inline', lg: 'none' }
//                         }}>
//                         <DragHandleIcon />
//                     </IconButton>
//             </Box>

//             {/* Drawer */}
//             <Drawer
//               anchor="right"
//               open={open}
//               onClose={toggleDrawer(false)}
//               onOpen={toggleDrawer(true)}
//             >
//             {/* Open Drawer */}
//             <Box sx={{
//                   p: 2,
//                   height: 1,
//                     }}>
//                   <IconButton sx={{mb: 2}} onClick={toggleDrawer(false)}>
//                     <CloseIcon/>
//                   </IconButton>

//                   <Divider sx={{mb: 2}} />

//                     <Box sx={{mb: 2}}>
//                         <Link to='/' className='link'>Home</Link>
//                         <Link to='/aboutus' className='link'>About Us</Link>
//                         <Link to='/sermons' className='link'>Sermons</Link>
//                         <Link to='/events' className='link'>Events</Link>
//                         <Link to='/onlinegiving' className='link'>Online Giving</Link>
//                         <Link to='/visitus' className='link'>Visit Us</Link>
//                         <Link to='/blog'className='link' >Blog</Link>
//                     </Box>
//                 </Box>
//             </Drawer> 
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import DragHandleIcon from '@mui/icons-material/DragHandle';
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/cccPin.PNG';
import { Link } from 'react-router-dom';
import './appBar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: '#353535', height: '80px' }}>
        <Toolbar>
          {/* Logo */}
          <Box component="img" sx={{ height: 64, pt: '8px' }} alt="Your logo." src={logo} />

          {/* Button Display */}
          <Box
            // style={{ marginLeft: 'auto', textDecoration: 'none', color: '#ffffff' }}
            sx={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              textDecoration: 'none',
              marginLeft: 'auto',
              color: '#ffffff'
            }}
          >
            <Link to='/' className='link'>Home</Link>
            <Link to='/aboutus' className='link'>About Us</Link>
            <Link to='/sermons' className='link'>Sermons</Link>
            <Link to='/events' className='link'>Events</Link>
            <Link to='/onlinegiving' className='link'>Online Giving</Link>
            <Link to='/visitus' className='link'>Visit Us</Link>
            <Link to='/blog' className='link'>Blog</Link>
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
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ 
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                }}>
                <Link to='/' className='link'>Home</Link>
                <Link to='/aboutus' className='link'>About Us</Link>
                <Link to='/sermons' className='link'>Sermons</Link>
                <Link to='/events' className='link'>Events</Link>
                <Link to='/onlinegiving' className='link'>Online Giving</Link>
                <Link to='/visitus' className='link'>Visit Us</Link>
                <Link to='/blog' className='link'>Blog</Link>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
