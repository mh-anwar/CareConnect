import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
    ScheduleComponent,
    Day,
    Week,
    Month,
    Agenda,
    Inject,
} from '@syncfusion/ej2-react-schedule';
import Navigation from '../../../Components/Navigation/Navigation';
import './ManageSchedule.scss';
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
            <Navigation paths={paths} />
            <Box>
                <Heading as="h1" size="xl" textAlign="center">
                    Manage Provider Schedule (Dr. {doctor})
                </Heading>

                <Box className="schedule-data">
                    <Box className="schedule-options">
                        <Box>
                            <Heading as="h2" size="md" textAlign="center">
                                Set Max Appointment Duration
                            </Heading>
                            <Flex dir="row" alignItems="center" gap="0.5em">
                                <Input placeholder="Duration" type="number" />
                                minutes
                            </Flex>
                        </Box>

                        <Box>
                            <Input
                                type="submit"
                                onClick={() =>
                                    processData(appointments, doctor)
                                }
                                value="Save All Changes"
                            />
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
