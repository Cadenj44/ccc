import * as React from 'react';
import { Box } from '@mui/material';
import bgImage from '../assets/bible.jpg';
import cloud from '../assets/cloud.jpg';
import './home.css';
import Footer from '../components/footer';

function Home() {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#ffffff',
                    padding: '10vh 5%',
                }}
            >
                <h1 className='main-text'>
                    LOVE GOD.<br />
                    LOVE ONE ANOTHER.<br />
                    MAKE DISCIPLES.
                </h1>
            </Box>

            <Box
                sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${cloud})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5vh 5%',
                    textAlign: 'center',
                }}>
                <Box 
                    sx={{
                        maxWidth: '90%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        padding: '20px',
                        borderRadius: '8px',
                    }}>
                    <h1 className='vision'>
                      <span style={{
                        borderBottom: '2px solid white',
                        paddingBottom: '5px',
                      }}> 
                      Our Vision
                      </span>
                      </h1>
                    <h3 className='vision-text'>
                        We unite for the common goal of community, encouragement, and teaching.<br />
                        Our services are centered around people, not programs.<br />
                        "By this everyone will know that you are my disciples, if you love one another.” John 13:35
                    </h3>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;

