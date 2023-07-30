import Navigation from '../../Components/Navigation/Navigation';
import { Box } from '@chakra-ui/react';
import './Patient.scss';

export default function Patient() {
    const paths = {
        Home: { path: '/patient' },
        'Create Appointment': { path: '/patient/create-appointment' },
    };
    return (
        <Box className="patient-homepage">
            <Navigation paths={paths} />
        </Box>
    );
}
