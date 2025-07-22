'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Container,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
`;

const colorChange = keyframes`
  0% {
    color: #00d4ff;
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
    opacity: 1;
  }
  20% {
    opacity: 0.7;
  }
  25% {
    color: #f59e0b;
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.8);
    opacity: 1;
  }
  45% {
    opacity: 0.7;
  }
  50% {
    color: #8b5cf6;
    text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  75% {
    color: #ef4444;
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
    opacity: 1;
  }
  95% {
    opacity: 0.7;
  }
  100% {
    color: #00d4ff;
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
    opacity: 1;
  }
`;

// Styled Components
const CalculatorContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  width: '100%',
  margin: '0 auto',
  background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)',
  borderRadius: '24px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.1)',
  animation: `${fadeIn} 0.6s ease-out`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '95%',
  },
  '@media (max-width: 600px)': {
    padding: theme.spacing(2),
    maxWidth: '380px',
    width: 'calc(100% - 20px)',
  },
  '@media (max-width: 382px)': {
    padding: theme.spacing(1.5),
    width: 'calc(100% - 16px)',
    borderRadius: '16px',
  },
}));

const Display = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  minHeight: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  border: '2px solid #334155',
  boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #64748b, transparent)',
  },
  '@media (max-width: 382px)': {
    padding: theme.spacing(1.5),
    minHeight: '60px',
    marginBottom: theme.spacing(1.5),
    borderRadius: '12px',
  },
}));

const DisplayText = styled(Typography)(({ theme }) => ({
  color: '#00d4ff',
  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  fontSize: '2rem',
  fontWeight: '600',
  textAlign: 'right',
  width: '100%',
  textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
  letterSpacing: '1px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  '@media (max-width: 382px)': {
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
  },
}));



const ButtonGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: 'repeat(5, 1fr)',
  gap: '12px',
  '@media (max-width: 600px)': {
    gap: '8px',
  },
  '@media (max-width: 382px)': {
    gap: '4px',
  },
}));

// Base button styles
const BaseButton = styled(Button)(({ theme }) => ({
  height: '70px',
  fontSize: '1.3rem',
  fontWeight: '600',
  borderRadius: '16px',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  textTransform: 'none',
  border: '1px solid rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  minWidth: 0,
  '&:hover': {
    transform: 'translateY(-2px) scale(1.02)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
  },
  '&:active': {
    transform: 'translateY(0) scale(0.98)',
    transition: 'all 0.1s ease-in-out',
  },
  '@media (max-width: 382px)': {
    height: '45px',
    fontSize: '0.9rem',
    borderRadius: '8px',
    '&:hover': {
      transform: 'translateY(-1px) scale(1.01)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
  },
}));

// Specific button types
const NumberButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #74849b 0%, #576579 100%)',
  },
});

const OperatorButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  color: 'white',
  fontWeight: '700',
  '&:hover': {
    background: 'linear-gradient(135deg, #4b92f6 0%, #3573eb 100%)',
  },
});

const EqualsButton = styled(BaseButton)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  color: 'white',
  fontWeight: '700',
  fontSize: '1.5rem',
  gridRow: 'span 2',
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    background: 'linear-gradient(135deg, #f5ae1b 0%, #e97716 100%)',
    animation: 'none',
  },
  '@media (max-width: 382px)': {
    fontSize: '1.1rem',
  },
}));

const ClearButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  color: 'white',
  fontWeight: '700',
  gridColumn: 'span 2',
  '&:hover': {
    background: 'linear-gradient(135deg, #f55454 0%, #ec2636 100%)',
  },
});

const BackspaceButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  color: 'white',
  fontWeight: '700',
  '&:hover': {
    background: 'linear-gradient(135deg, #9b6cf6 0%, #8c4aed 100%)',
  },
});

const ZeroButton = styled(NumberButton)({
  gridColumn: 'span 2',
});

const AnimatedTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  fontSize: '1.8rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  animation: `${colorChange} 4s infinite ease-in-out`,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
    letterSpacing: '1px',
  },
  '@media (max-width: 382px)': {
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
    marginBottom: theme.spacing(2),
  },
}));

// Normal Display Component
const NormalDisplay = ({ text, isOn }: { text: string; isOn: boolean }) => {
  return (
    <DisplayText variant="h4">
      {isOn ? text : ''}
    </DisplayText>
  );
};

// Main Calculator Component
export default function Calculator() {
  const [expression, setExpression] = useState('0');
  const [isOn, setIsOn] = useState(true);

  const inputNumber = (num: string) => {
    if (!isOn) return;
    if (expression === '0') {
      setExpression(num);
    } else {
      setExpression(expression + num);
    }
  };

  const inputOperator = (operator: string) => {
    if (!isOn) return;
    if (expression === '' || /[+\-×÷]$/.test(expression)) {
      return;
    }
    setExpression(expression + operator);
  };

  const calculate = () => {
    if (!isOn) return;
    try {
      let mathExpression = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      
      const result = Function('"use strict"; return (' + mathExpression + ')')();
      
      if (!isFinite(result)) {
        setExpression('Error');
        return;
      }
      
      const formattedResult = Number(result.toFixed(10)).toString();
      setExpression(formattedResult);
    } catch (error) {
      setExpression('Error');
    }
  };

  const clear = () => {
    if (!isOn) return;
    setExpression('0');
  };

  const togglePower = () => {
    setIsOn(!isOn);
    if (isOn) {
      setExpression('');
    } else {
      setExpression('0');
    }
  };

  const inputDecimal = () => {
    if (!isOn) return;
    const parts = expression.split(/[+\-×÷]/);
    const lastNumber = parts[parts.length - 1];
    if (lastNumber.indexOf('.') === -1) {
      setExpression(expression + '.');
    }
  };

  const backspace = () => {
    if (!isOn) return;
    if (expression.length > 1) {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression('0');
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        py: 4,
        '@media (max-width: 600px)': {
          px: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }
      }}
    >
      <CalculatorContainer elevation={24}>
        {/* Power Switch */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isOn}
                onChange={togglePower}
                color="primary"
                size="medium"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#00d4ff',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#00d4ff',
                  },
                }}
              />
            }
            label={
              <Typography 
                variant="h6" 
                sx={{ 
                  color: isOn ? '#00d4ff' : '#64748b',
                  fontWeight: '600',
                  textShadow: isOn ? '0 0 8px rgba(0, 212, 255, 0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {isOn ? 'ON' : 'OFF'}
              </Typography>
            }
          />
        </Box>

        {/* Display */}
        <Display>
          <NormalDisplay text={expression} isOn={isOn} />
        </Display>

        {/* Button Grid */}
        <ButtonGrid>
          {/* Row 1 */}
          <ClearButton onClick={clear} disabled={!isOn}>
            Clear
          </ClearButton>
          <BackspaceButton onClick={backspace} disabled={!isOn}>
            ⌫
          </BackspaceButton>
          <OperatorButton onClick={() => inputOperator('÷')} disabled={!isOn}>
            ÷
          </OperatorButton>

          {/* Row 2 */}
          <NumberButton onClick={() => inputNumber('7')} disabled={!isOn}>
            7
          </NumberButton>
          <NumberButton onClick={() => inputNumber('8')} disabled={!isOn}>
            8
          </NumberButton>
          <NumberButton onClick={() => inputNumber('9')} disabled={!isOn}>
            9
          </NumberButton>
          <OperatorButton onClick={() => inputOperator('×')} disabled={!isOn}>
            ×
          </OperatorButton>

          {/* Row 3 */}
          <NumberButton onClick={() => inputNumber('4')} disabled={!isOn}>
            4
          </NumberButton>
          <NumberButton onClick={() => inputNumber('5')} disabled={!isOn}>
            5
          </NumberButton>
          <NumberButton onClick={() => inputNumber('6')} disabled={!isOn}>
            6
          </NumberButton>
          <OperatorButton onClick={() => inputOperator('-')} disabled={!isOn}>
            -
          </OperatorButton>

          {/* Row 4 */}
          <NumberButton onClick={() => inputNumber('1')} disabled={!isOn}>
            1
          </NumberButton>
          <NumberButton onClick={() => inputNumber('2')} disabled={!isOn}>
            2
          </NumberButton>
          <NumberButton onClick={() => inputNumber('3')} disabled={!isOn}>
            3
          </NumberButton>
          <OperatorButton onClick={() => inputOperator('+')} disabled={!isOn}>
            +
          </OperatorButton>

          {/* Row 5 */}
          <ZeroButton onClick={() => inputNumber('0')} disabled={!isOn}>
            0
          </ZeroButton>
          <NumberButton onClick={inputDecimal} disabled={!isOn}>
            .
          </NumberButton>
          <EqualsButton onClick={calculate} disabled={!isOn}>
            =
          </EqualsButton>
        </ButtonGrid>
      </CalculatorContainer>
    </Container>
  );
} 