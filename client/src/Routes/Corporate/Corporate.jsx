import Header from './Header/Header';
import Navigation from '../../Components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import { Box } from '@chakra-ui/react';

export default function Corporate() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const paths = {
        Home: { path: '/', active: true },
        About: { path: '/about' },
        Join: { path: '/join' },
    };

    useEffect(() => {});
    return (
        <Box>
            <Navigation paths={paths} />
            <Header />
            <Footer />
        </Box>
    );
}
