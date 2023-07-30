import { useAuth0 } from '@auth0/auth0-react';
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Heading,
    Button,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import './Join.scss';

export default function JoinRouter() {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated, error, user, loginWithRedirect } =
        useAuth0();

    if (isLoading) {
        return <Box>Loading...</Box>;
    }

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
        // First check if user exists in DB fetch
        return (
            isAuthenticated && (
                <Box className="join-type">
                    <Card className="join-card">
                        <CardHeader>
                            <Heading size="xl">Join as</Heading>
                        </CardHeader>
                        <CardBody className="buttons">
                            <Button
                                as={Link}
                                to="/join/patient"
                                colorScheme="blue"
                            >
                                Patient
                            </Button>
                            <Button
                                as={Link}
                                to="/join/clinic"
                                colorScheme="purple"
                            >
                                Clinic
                            </Button>
                        </CardBody>
                    </Card>
                </Box>
            )
        );
    } else {
        navigate('/');
    }
}
{
    /* <JoinPage user={user} />; */
}
