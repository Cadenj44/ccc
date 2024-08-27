import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      emailjs.sendForm('service_z5au1bg', 'template_5rxih0f', form.current, 'SM9jySNuwA40191O_')
        .then(() => {
          console.log('SUCCESS!');
          setSnackbarMessage('Message sent successfully!');
          setOpenSnackbar(true);
          // Clear form fields
          setName('');
          setEmail('');
          setMessage('');
          setErrors({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        }, (error) => {
          console.log('FAILED...', error.text);
          setSnackbarMessage('Failed to send message. Please try again.');
          setOpenSnackbar(true);
          setIsSubmitting(false);
        });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
      <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ width: '50%' }}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '4px', borderColor: errors.name ? 'red' : 'green' }}
          helperText={errors.name}
          error={!!errors.name}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '4px', borderColor: errors.email ? 'red' : 'green' }}
          helperText={errors.email}
          error={!!errors.email}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '4px', borderColor: errors.message ? 'red' : 'green' }}
          helperText={errors.message}
          error={!!errors.message}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage.includes('Failed') ? 'error' : 'success'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

