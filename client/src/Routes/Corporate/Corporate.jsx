import Header from './Header/Header';
import Navigation from '../../Components/Navigation/Navigation';
import { useEffect, useState } from 'react';

export default function Corporate() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const paths = {
        Home: { path: '/' },
        About: { path: '/about' },
        Join: { path: '/join' },
    };

    useEffect(() => {});
    return (
        <div>
            <Navigation paths={paths} />
            <Header />
        </div>
    );
}
