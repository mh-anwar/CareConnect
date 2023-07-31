import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ApptCard from './ApptCard';
import './Appointments.scss';

export default function Appointments() {
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

    return (
        <Accordion defaultIndex={[0]} allowMultiple className="appointments">
            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Upcoming Appointments {''}</Heading>

                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    {Object.entries(upcomingAppts).map(
                        (appointmentInfo, index) => {
                            return (
                                <ApptCard
                                    key={index}
                                    appointment={appointmentInfo[1]}
                                />
                            );
                        }
                    )}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Past Appointments {''}</Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    {Object.entries(pastAppts).map((appointmentInfo, index) => {
                        return (
                            <ApptCard
                                key={index}
                                appointment={appointmentInfo[1]}
                            />
                        );
                    })}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
