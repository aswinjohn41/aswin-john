import React from 'react'
import { Box, Container, Avatar, Typography, Button } from '@mui/material'
import { Email, Phone, GitHub } from '@mui/icons-material'

function Hero() {
  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #722f37 0%, #90EE90 100%)',
      color: 'white',
      padding: '120px 0 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="md">
        <Avatar
          src="/aswinjohn2.JPG"
          sx={{
            width: 200,
            height: 200,
            border: '4px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            margin: '0 auto 2rem',
            animation: 'bounceIn 1.5s ease-out, float 3s ease-in-out 1.8s infinite'
          }}
        />
        <Typography variant="h1" sx={{
          fontSize: { xs: '3rem', md: '4rem' },
          fontWeight: 700,
          marginBottom: 1,
          animation: 'slideInLeft 1s ease-out 0.5s both'
        }}>
          Aswin John
        </Typography>
        <Typography variant="h5" sx={{
          fontWeight: 300,
          marginBottom: 2,
          opacity: 0.9,
          animation: 'slideInRight 1s ease-out 0.7s both'
        }}>
          Mobile & Web Developer | UI/UX Designer
        </Typography>
        <Typography variant="h6" sx={{
          marginBottom: 4,
          opacity: 0.8,
          animation: 'fadeIn 1s ease-out 0.9s both'
        }}>
          Toronto, Ontario, Canada
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          animation: 'fadeIn 1s ease-out 1.1s both'
        }}>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'secondary.main',
                borderColor: 'secondary.main',
                color: 'primary.main'
              }
            }}
            href="mailto:aswinjohn41@gmail.com"
            startIcon={<Email />}
          >
            aswinjohn41@gmail.com
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'secondary.main',
                borderColor: 'secondary.main',
                color: 'primary.main'
              }
            }}
            href="https://github.com/aswinjohn41"
            target="_blank"
            startIcon={<GitHub />}
          >
            github.com/aswinjohn41
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'secondary.main',
                borderColor: 'secondary.main',
                color: 'primary.main'
              }
            }}
            startIcon={<Phone />}
          >
            226-977-8917
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
