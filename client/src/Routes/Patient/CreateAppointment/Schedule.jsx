import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import {
    ScheduleComponent,
    Day,
    Week,
    Month,
    Agenda,
    Inject,
} from '@syncfusion/ej2-react-schedule';
import Navigation from '../../../Components/Navigation/Navigation';
import { useEffect, useRef, useState } from 'react';

export default function ManageSchedule() {
    const [doctor, setDoctor] = useState('');
    const [appointments, setAppointments] = useState([]);
    const doctorInput = useRef(null);

    const paths = {
        Home: { path: '/patient' },
        'Manage Schedule': { path: '/hcp/manage-schedule', active: true },
    };

    const addAppointment = (newAppointment) => {
        setAppointments([...appointments, newAppointment]);
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        // Get doctor from backend
        fetch(
            import.meta.env.VITE_BACKEND +
                '/hcp/get?id=' +
                'ca62bbed-89ff-485c',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setDoctor(data.doctor);
            });
    }, []);

    return (
        <Box className="manage-schedule">
            <Box>
                <Heading as="h1" size="xl" textAlign="center">
                    Sign Up
                </Heading>

                <Box className="schedule-data">
                    <Box className="schedule-options">
                        <Box>
                            <Text>
                                Choose a day and time (this will automatically
                                save)
                            </Text>
                        </Box>
                    </Box>
                    <ScheduleComponent
                        id={doctor}
                        enablePersistence={true}
                        selectedDate={new Date()}
                        eventSettings={{
                            dataSource: appointments,
                        }}
                    >
                        <Inject services={[Day, Week, Month, Agenda]} />
                    </ScheduleComponent>
                </Box>
            </Box>
        </Box>
    );
}

function processData(appointments, doctor) {
    console.log(appointments);
    /* {
  "Subject": "dfddf",
  "Id": 1,
  "StartTime": "2023-08-03T09:30:00.000Z",
  "EndTime": "2023-08-03T10:00:00.000Z",
  "IsAllDay": false
} */
    // Create new appointments
}
