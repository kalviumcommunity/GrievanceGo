import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    colors: {
        brand: {
            50: '#f7fafc',
            100: '#edf2f7',
            200: '#e2e8f0',
            300: '#cbd5e0',
            400: '#a0aec0',
            500: '#718096',
            600: '#4a5568',
            700: '#2d3748',
            800: '#1a202c',
            900: '#171923',
        },
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Roboto, sans-serif',
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
})

export default customTheme
