import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import './Navigation.scss';

export default function Navigation() {
    const paths = {
        Home: { path: '/' },
        About: { path: '/about' },
        Join: { path: '/join' },
    };

    return (
        <Box className="navbar">
            <Text fontSize="3xl">CareConnect</Text>

            <Box className="links">
                {Object.entries(paths).map(([name, values]) => (
                    <Button
                        as={Link}
                        to={values.path}
                        key={values.path}
                        colorScheme="blue"
                        variant="solid"
                    >
                        {name}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}
