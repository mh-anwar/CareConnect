import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Appointments from '../../Components/Appointments/Appointments';
import PatientSettings from '../../Components/Patients/Settings/Settings';
import './Patient.scss';

export default function Patient() {
    const [upcomingAppts, setUpcomingAppts] = useState([]);
    const [pastAppts, setPastAppts] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId'); // TODO switch to Auth0 or smth

        fetch(import.meta.env.VITE_BACKEND + '/appt/getByUser?id=' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUpcomingAppts(data.futureAppts);
                setPastAppts(data.pastAppts);
            });
    }, []);

    const paths = {
        Home: { path: '/patient', active: true },
        'Create Appointment': { path: '/patient/create-appointment' },
        'Find Doctor': { path: '/patient/find-doctor' },
    };
    return (
        <Box className="patient-homepage">
            <Navigation paths={paths} />
            <Box className="patient-main">
                <Appointments
                    upcomingAppts={upcomingAppts}
                    pastAppts={pastAppts}
                    type="Patient"
                />
                <PatientSettings />
            </Box>
            <Footer />
        </Box>
    );
}
