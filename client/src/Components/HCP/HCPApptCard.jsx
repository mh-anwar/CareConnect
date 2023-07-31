import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Button,
    ButtonGroup,
    Stack,
    StackDivider,
    Box,
    Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './HCPApptCard.scss';

export default function HCPApptCard({ appointment }) {
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
        <Card className="hcp-appt-card">
            <CardHeader>
                <Heading size="md">
                    {appointment.doctor} attending a {appointment.purpose}
                </Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Patient Information
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {appointment.patientName} for a {appointment.medium}{' '}
                            {appointment.purpose}{' '}
                        </Text>
                    </Box>{' '}
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Date/Time and Duration
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {dayNames[dateTime.getDay()]} at{' '}
                            {determineTime(dateTime)} for {appointment.duration}{' '}
                            minutes
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Actions
                        </Heading>
                        <ButtonGroup isAttached>
                            <Button>Modify</Button>
                            <Button>Delete</Button>
                            <Button>See Details</Button>
                        </ButtonGroup>
                    </Box>
                </Stack>
            </CardBody>
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

HCPApptCard.propTypes = {
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
