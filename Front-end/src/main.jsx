import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './chakraTheme'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Auth0Provider from './auth_provider_history'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Auth0Provider>
            <React.StrictMode>
                <ChakraProvider theme={customTheme}>
                    <App />
                </ChakraProvider>
            </React.StrictMode>
        </Auth0Provider>
    </BrowserRouter>
)
