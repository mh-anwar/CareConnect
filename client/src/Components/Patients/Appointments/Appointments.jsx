import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ApptCard from './ApptCard';
import './Appointments.scss';

export default function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // TODO fetch appointments from server
        setAppointments([
            {
                date: '2021-04-20',
                time: '10:00',
                doctor: 'Dr. John Doe',
                reason: 'Checkup',
                type: 'Virtual',
                duration: 30,
                notifcation: {
                    email: true,
                    text: true,
                    phone: true,
                },
            },
            {
                date: '2021-02-19',
                time: '3:00',
                doctor: 'Ms. Reese Chong',
                reason: 'Checkup',
                type: 'In Person',
                duration: 5,
                notifcation: {
                    email: true,
                    text: true,
                    phone: true,
                },
            },
        ]);
    }, []);

    return (
        <Accordion
            defaultIndex={[0]}
            allowMultiple
            allowToggle
            className="appointments"
        >
            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Upcoming Appointments {''}</Heading>

                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    {appointments.map((appointment, index) => (
                        <ApptCard key={index} appointment={appointment} />
                    ))}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Past Appointments {''}</Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>Lorem</AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
