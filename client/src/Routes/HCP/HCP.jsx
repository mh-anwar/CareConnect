import Navigation from '../../Components/Navigation/Navigation';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Appointments from '../../Components/Appointments/Appointments';
import PatientSettings from '../../Components/Patients/Settings/Settings';

export default function HCP() {
    const paths = {
        Home: { path: '/patient', active: true },
        'Manage Schedule': { path: '/hcp/manage-schedule' },
    };
    const [upcomingAppts, setUpcomingAppts] = useState([]);
    const [pastAppts, setPastAppts] = useState([]);
    localStorage.setItem('userId', '6');
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

    return (
        <Box className="patient-homepage">
            <Navigation paths={paths} />
            <Box className="patient-main">
                <Appointments
                    upcomingAppts={upcomingAppts}
                    pastAppts={pastAppts}
                    type="HCP"
                />
                <PatientSettings />
            </Box>
            <Footer />
        </Box>
    );
}
