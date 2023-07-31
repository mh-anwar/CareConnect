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

export default function PatientApptCard({ appointment }) {
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let dateTime = new Date(appointment.time);

    return (
        <Card>
            <CardHeader>
                <Heading size="md">
                    {appointment.purpose} Appointment with {appointment.doctor}
                </Heading>
            </CardHeader>

            <CardBody>
                <StatGroup>
                    <Stat>
                        <StatLabel>Date</StatLabel>
                        <StatNumber>{dayNames[dateTime.getDay()]}</StatNumber>
                        <StatHelpText>{appointment.time}</StatHelpText>
                    </Stat>{' '}
                    <Stat>
                        <StatLabel>Time</StatLabel>
                        <StatNumber>{determineTime(dateTime)}</StatNumber>
                        <StatHelpText>
                            For {appointment.duration} minutes
                        </StatHelpText>
                    </Stat>
                    <ButtonGroup isAttached className="vertical-btn-group">
                        <Button>Modify</Button>
                        <Button>Delete</Button>
                        <Button>See Details</Button>
                    </ButtonGroup>
                </StatGroup>
            </CardBody>
            <CardFooter></CardFooter>
        </Card>
    );
}

function determineTime(dateTime) {
    // Get the hours and minutes from the Date object
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    // Add leading zeros to base 10 numbers
    const addLeadingZero = (number) => {
        return number < 10 ? '0' + number : number;
    };

    // Determine if it's AM or PM
    const amOrPm = hours >= 12 ? ' PM' : ' AM';

    // Convert the hours and min to 12-hour format
    const formattedHours = addLeadingZero(hours % 12 || 12);
    const formattedMinutes = addLeadingZero(minutes);

    // Concatenate all parts to get the final time string
    return `${formattedHours}:${formattedMinutes}${amOrPm}`;
}

PatientApptCard.propTypes = {
    appointment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        patientName: PropTypes.string.isRequired,
        patientId: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        doctor: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        purpose: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
        notifcations: PropTypes.shape({
            email: PropTypes.bool.isRequired,
            text: PropTypes.bool.isRequired,
        }),
    }).isRequired,
};
