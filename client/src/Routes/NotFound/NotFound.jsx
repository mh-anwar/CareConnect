import { Box } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement, Text, Image } from '@chakra-ui/react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

export default function NotFound() {
    const paths = {
        Home: { path: '*' },
        'Take Me Back': {
            path: '/patient/404',
            active: false,
        },
    };

    return (
        <Box>
            <Navigation paths={paths} />
            <Box>
                <Text m="3" fontSize={'4xl'} fontWeight={''}>404 Not Found</Text>
            </Box>
            <Footer/>
        </Box>
    );
}
