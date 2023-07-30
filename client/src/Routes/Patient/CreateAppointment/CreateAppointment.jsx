import { Box } from '@chakra-ui/react';
import Navigation from '../../../Components/Navigation/Navigation';

export default function CreateAppointment() {
    const paths = {
        Home: { path: '/patient' },
        'Create Appointment': {
            path: '/patient/create-appointment',
            active: true,
        },
    };
    return (
        <Box>
            <Navigation paths={paths} />
        </Box>
    );
}
