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
          backgroundPosition: 'center',
          height: '100vh',  // Full viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',    // White text color
          textAlign: 'center',
        }}
        >
          <h1>
              LOVE GOD. <br/>
              LOVE ONE ANOTHER. <br/>
              MAKE DISCIPLES.
          </h1>
         </Box>

    );
  }
  
  export default Home;