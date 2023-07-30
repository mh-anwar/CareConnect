import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Switch,
    FormControl,
    FormLabel,
    Heading,
    Text,
} from '@chakra-ui/react';

export default function PatientSettings() {
    // TODO get user info from Auth0 or backend
    const user = {
        name: 'John Doe',
        email: 'test@gmail.com',
    };
    return (
        <Card>
            <CardHeader>
                <Heading size="md">Settings</Heading>
                <Text fontSize="md">{user.name}</Text>
                <Text fontSize="md">{user.email}</Text>
            </CardHeader>
            <CardBody>
                <Heading size="md">Notifications</Heading>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="email-alerts">
                        Email Notifications
                    </FormLabel>
                    <Switch id="email-alerts" />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="email-alerts">
                        SMS Notifications
                    </FormLabel>
                    <Switch id="email-alerts" />
                </FormControl>
            </CardBody>
            <CardFooter>
                <Button>Change Password</Button>
            </CardFooter>
        </Card>
    );
}
