import { Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Button, Text } from '@chakra-ui/react';
import './Navigation.scss';

export default function Navigation() {
    const paths = {
        Home: { path: '/' },
        About: { path: '/about' },
        Join: { path: '/join' },
    };

    return (
        <Box className="navbar">
            <ChakraLink as={Link} to="/">
                <Text fontSize="3xl">CareConnect</Text>
            </ChakraLink>
            <Box className="links">
                {Object.entries(paths).map(([name, values]) => (
                    <Button
                        as={Link}
                        to={values.path}
                        key={values.path}
                        variant="highlight"
                    >
                        {name}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}
