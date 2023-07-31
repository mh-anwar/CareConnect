import { useAuth0 } from '@auth0/auth0-react';
import {
    Box,
    Card,
    Text,
    Link,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Heading,
    Button,
    Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import PatientJoin from './PatientJoin';
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
                        <PatientJoin/>
                        <Text fontSize='2xl'>Joining as a clinic? Click <Link href="/join/hcp" color="teal">here</Link></Text>
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
