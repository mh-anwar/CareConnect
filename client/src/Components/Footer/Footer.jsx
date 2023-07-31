import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Footer.scss';
export default function Footer() {
    return (
        <Box className="footer">
            <Box>
                <Heading size="md">CareConnect</Heading>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy</Link>
            </Box>
            <Box>
                <Heading size="md">Patient Pages</Heading>
                <Link to="/patient">Patient Homepage</Link>
                <Link to="/patient/create-appointment">Create Appointment</Link>
                <br/>
            </Box>
            <Box>
                <Heading size="md">HCP Pages</Heading>
                <Link to="/hcp">HCP Homepage</Link>
                <Link to="/hcp/scheduke">HCP Schedule</Link>
                <br/>
            </Box>
        </Box>
    );
}
