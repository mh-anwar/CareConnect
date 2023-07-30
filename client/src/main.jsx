import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.scss';

const theme = extendTheme({
    useSystemColorMode: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain="care-connect.us.auth0.com"
            clientId="Cuuu28kVfV2yebOtQykBeCRDqJGHWdgO"
            authorizationParams={{
                redirect_uri: window.location.origin + '/join',
            }}
        >
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Auth0Provider>
    </React.StrictMode>
);
