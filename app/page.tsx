import { Box, Typography } from '@mui/material';
import Calculator from './components/Calculator';

export default function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 600px)': {
          px: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{ 
          color: 'white',
          fontWeight: '800',
          mb: 2,
          textAlign: 'center',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1,
          '@media (max-width: 600px)': {
            fontSize: '2rem',
            mb: 2,
          },
        }}
      >
        Rubesh's Calculator
      </Typography>
      <Box sx={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width: 600px)': {
          width: '100%',
          px: 0,
        }
      }}>
        <Calculator />
      </Box>
    </Box>
  );
}
