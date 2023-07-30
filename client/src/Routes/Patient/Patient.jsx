import Navigation from '../../Components/Navigation/Navigation';
import { Box } from '@chakra-ui/react';
import './Patient.scss';
import Footer from '../../Components/Footer/Footer';
import Appointments from '../../Components/Patient/Appointments/Appointments';
import PatientSettings from '../../Components/Patient/Settings/Settings';

export default function Patient() {
    const paths = {
        Home: { path: '/patient' },
        'Create Appointment': { path: '/patient/create-appointment' },
    };
    return (
        <Box className="patient-homepage">
            <Navigation paths={paths} />
            <Box className="patient-main">
                <Appointments />
                <PatientSettings />
            </Box>
            <Footer />
        </Box>
    );
}
