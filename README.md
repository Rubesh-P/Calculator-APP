# Calculator App

A modern, responsive calculator built with Next.js 15 and Material UI.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **ON/OFF Toggle**: Power button to turn the calculator on and off
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Material UI components and custom styling
- **Smooth Animations**: CSS animations for button interactions
- **Clean Architecture**: Uses Next.js App Router with TypeScript

## Tech Stack

- **Next.js 15**: Latest version with App Router
- **React 19**: Latest React with modern hooks
- **Material UI**: For components and theming
- **TypeScript**: For type safety
- **Emotion**: For styled components (comes with Material UI)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory:
   ```bash
   cd calculator-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Power On/Off**: Use the toggle switch at the top to turn the calculator on or off
2. **Number Input**: Click number buttons to enter values
3. **Operations**: Click operator buttons (+, -, ×, ÷) to perform calculations
4. **Equals**: Click the equals button (=) to get the result
5. **Clear**: Click the Clear button to reset the calculator
6. **Decimal**: Click the decimal point (.) to add decimal numbers

## Project Structure

```
calculator-app/
├── app/
│   ├── components/
│   │   └── Calculator.tsx    # Main calculator component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Material UI setup
│   ├── page.tsx             # Home page
│   └── theme.ts             # Material UI theme configuration
├── public/                  # Static files
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Features in Detail

### Responsive Design
- Adapts to different screen sizes
- Optimized touch targets for mobile devices
- Proper spacing and sizing across devices

### Material UI Integration
- Custom theme with color palette
- Styled components with hover and active states
- Consistent design language

### Calculator Logic
- Handles chaining operations
- Prevents division by zero
- Proper decimal handling
- State management with React hooks

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Browser Support

This app works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
