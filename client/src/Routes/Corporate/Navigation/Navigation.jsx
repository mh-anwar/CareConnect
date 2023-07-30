import { Link } from 'react-router-dom';
import { Navbar, Button, Text, Card, Radio } from '@nextui-org/react';

import './Navigation.scss';

export default function Navigation() {
    const paths = {
        Home: { path: '/' },
        About: { path: '/about' },
        Join: { path: '/join', color: 'success' },
    };
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <Text h2>CareConnect</Text>
            </Navbar.Brand>
            <Navbar.Content>
                {Object.entries(paths).map(([name, values], index) => (
                    <Link to={values.path} key={values.path}>
                        <Button
                            key={values.path}
                            color={values.color ? values.color : 'primary'}
                        >
                            {name}
                        </Button>
                    </Link>
                ))}
                <Button.Group></Button.Group>
            </Navbar.Content>
        </Navbar>
    );
}
