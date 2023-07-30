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
    Icon,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
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
                                <Icon as={MdPerson} />
                                Patient
                            </Button>

                            <Button
                                as={Link}
                                to="/join/hcp"
                                colorScheme="purple"
                            >
                                <Icon as={FaClinicMedical} />
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
