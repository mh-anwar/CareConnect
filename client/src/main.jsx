import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.scss';

const theme = extendBaseTheme({
    useSystemColorMode: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
