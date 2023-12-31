import { Box } from '@chakra-ui/react';
import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import ManageSchedule from './Schedule';

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
            <ManageSchedule />
            <Footer />
        </Box>
    );
}
