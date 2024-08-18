import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <Box
      sx={{
        backgroundColor: '#353535',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', md: 'row' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      {/* Contact Info */}
      <Box>
        <Typography>931-388-9655</Typography>
        <Typography>Central701@gmail.com</Typography>
        <Typography>701 Bear Creek Pike</Typography>
        <Typography>Columbia, TN 38401</Typography>

        {/* Social Media Icons */}
        <Box sx={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <IconButton 
            href="https://youtube.com/@centralchristianchurch3286" 
            target="_blank" 
            sx={{ color: 'white' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton 
            href="https://www.instagram.com/central701/" 
            target="_blank" 
            sx={{ color: 'white' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton 
            href="https://www.facebook.com/centralchristiancolumbia" 
            target="_blank" 
            sx={{ color: 'white' }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>

        {/* Developer Info */}
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
          © Developed by Caden Cameron
        </Typography>
      </Box>

      {/* Message Form */}
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
          width: '100%',
          marginTop: { xs: '20px', md: '0' },
        }}
      >
        <TextField
          variant="filled"
          label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ backgroundColor: 'white', borderRadius: '5px' }}
        />
        <TextField
          variant="filled"
          label="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
          sx={{ backgroundColor: 'white', borderRadius: '5px' }}
        />
        <Button 
          variant="contained" 
          type="submit"
          sx={{ backgroundColor: '#FD9623', color: 'white', alignSelf: 'flex-start' }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
