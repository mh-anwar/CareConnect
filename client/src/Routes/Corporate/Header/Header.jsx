import { Box, Image, Text } from '@chakra-ui/react';
import Doctor from '../../../assets/doctor.jpg';
import './Header.scss';
export default function Header() {
    return (
        <Box className="corp-header">
            <Image src={Doctor} maxW="25%" borderRadius="1em" />
            <Text fontSize="3xl">Connect with your Doctor</Text>
        </Box>
    );
}
