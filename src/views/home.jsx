import * as React from 'react';
import './home.css';
import { Box } from '@mui/material';
import bgImage from '../assets/bible.jpg';
 
function Home() {
    return (
        <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',  // Shift the image down slightly
          height: '100vh',  // Full viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',    // White text color
          textAlign: 'center',
          paddingTop: '200px'
        }}
        >
          <h1 style={{ marginTop: '-20%' }}>
              LOVE GOD. <br/>
              LOVE ONE ANOTHER. <br/>
              MAKE DISCIPLES. <br />
          </h1>
         </Box>

    );
  }
  
  export default Home;