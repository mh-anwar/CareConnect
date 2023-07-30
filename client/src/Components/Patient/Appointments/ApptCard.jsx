import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatGroup,
    Button,
    ButtonGroup,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ApptCard({ appointment }) {
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let date = new Date(appointment.date);

    return (
        <Card>
            <CardHeader>
                <Heading size="md">
                    {appointment.type} Appointment with {appointment.doctor}
                </Heading>
            </CardHeader>

            <CardBody>
                <StatGroup>
                    <Stat>
                        <StatLabel>Date</StatLabel>
                        <StatNumber>{dayNames[date.getDay()]}</StatNumber>
                        <StatHelpText>{appointment.date}</StatHelpText>
                    </Stat>{' '}
                    <Stat>
                        <StatLabel>Time</StatLabel>
                        <StatNumber>{appointment.time}</StatNumber>
                        <StatHelpText>
                            For {appointment.duration} minutes
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </CardBody>
            <CardFooter>
                <ButtonGroup isAttached>
                    <Button>Modify</Button>
                    <Button>Delete</Button>
                    <Button>See Details</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

ApptCard.propTypes = {
    appointment: PropTypes.shape({
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        doctor: PropTypes.string.isRequired,
        reason: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        notifcation: PropTypes.shape({
            email: PropTypes.bool.isRequired,
            text: PropTypes.bool.isRequired,
            phone: PropTypes.bool.isRequired,
        }),
    }).isRequired,
};
