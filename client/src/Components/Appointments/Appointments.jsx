import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
} from '@chakra-ui/react';
import HCPApptCard from '../HCP/HCPApptCard';
import PatientApptCard from '../Patients/PatientApptCard';
import PropTypes from 'prop-types';
import './Appointments.scss';

export default function Appointments({ upcomingAppts, pastAppts, type }) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple className="appointments">
            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Upcoming Appointments {''}</Heading>

                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    {returnApptCards(upcomingAppts, type)}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton className="accordian-btn">
                    <Heading size="md">Past Appointments {''}</Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    {returnApptCards(pastAppts, type)}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

function returnApptCards(appointments, type) {
    if (appointments === undefined) return;
    return Object.entries(appointments).map((appointmentInfo, index) => {
        return type === 'HCP' ? (
            <HCPApptCard key={index} appointment={appointmentInfo[1]} />
        ) : (
            <PatientApptCard key={index} appointment={appointmentInfo[1]} />
        );
    });
}
Appointments.propTypes = {
    upcomingAppts: PropTypes.array,
    pastAppts: PropTypes.array,
    type: PropTypes.string,
};
