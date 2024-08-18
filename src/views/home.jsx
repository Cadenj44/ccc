import * as React from 'react';
import './home.css';
import { Box } from '@mui/material';
import bgImage from '../assets/bible.jpg';
import cloud from '../assets/cloud.jpg';
 
function Home() {
    return (
      <Box>
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
          <h1 style={{ marginTop: '-5%'}}>
              LOVE GOD. <br/>
              LOVE ONE ANOTHER. <br/>
              MAKE DISCIPLES. <br />
          </h1>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${cloud})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',  // Shift the image down slightly
            height: '100vh',  // Full viewport height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',    // White text color
            textAlign: 'center',
          }}>
          <Box >  
            <h1>Our Vision</h1>
          </Box>
            <Box sx={{color: '#000000'}}>
              <h3>
                Central Christian Church is a non-denominational, elder-led, Christian Church. <br />
                We are a congregation comprised of a rich and diverse array of backgrounds, joining together to worship as one body. <br />
                We unite for the common goal of community, encouragement and teaching. <br />
                Our services are not the focus of our church; we are centered around people and not programs. <br />
              </h3>
            </Box>
         </Box> 
      </Box>
    );
  }
  
  export default Home;