import {
    Box,
    Image,
    Text,
    Button,
    Center,
    VStack,
    Stack,
} from '@chakra-ui/react';
import Doctor from '../../../assets/doctor.jpg';
import './Header.scss';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <Box className="corp-header">
            <div className="headline">
                <Text m="3" fontSize="5xl">
                    Secure and seamless medical scheduling.
                </Text>
                <Text m="3" fontSize={'xl'}>
                    CareConnect makes it effortless to book appointments with
                    your preferred healthcare providers. Say goodbye to long
                    waiting times and frustrating phone calls.
                </Text>
                <div className="links">
                    <Button
                        colorScheme="blue"
                        variant="solid"
                        spacing="6"
                        as={Link}
                        to="/hcp/find-hcp"
                    >
                        Connect your clinic
                    </Button>
                    <Button
                        variant="outline"
                        spacing="6"
                        as={Link}
                        to="/patient"
                    >
                        Go to CareConnect
                    </Button>
                </div>
                <Text m="3" fontSize={'xl'}>
                    Don't have an account?{' '}
                    <Link to="/join/patient">Sign up</Link>
                </Text>
            </div>

            <Image src={Doctor} borderRadius="1em" m="10" />

            {/* Features Section */}
            <Box mt={12}>
                {/* 
                    Feature template
                    - Image on left, text on right
                */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    align="center"
                    justify="center"
                >
                    {/* <Image src="" alt="Feature 1" w={{ base: "100%", md: "40%" }} /> */}
                    <VStack
                        w={{ base: '100%', md: '60%' }}
                        spacing={4}
                        align="start"
                    >
                        <Text fontSize="2xl" fontWeight="bold">
                            Schedule with Ease
                        </Text>
                        <Text>
                            CareConnect makes it effortless to book appointments
                            with your preferred healthcare providers. Say
                            goodbye to long waiting times and frustrating phone
                            calls.
                        </Text>

                        <Text fontSize="2xl" fontWeight="bold">
                            Secure and Confidential
                        </Text>
                        <Text>
                            Rest easy knowing that your personal information and
                            medical data are protected with advanced encryption.
                        </Text>

                        <Text fontSize="2xl" fontWeight="bold">
                            Real-Time Availability
                        </Text>
                        <Text>
                            View real-time schedules of doctors and healthcare
                            specialists, making it simple to find a convenient
                            time for your appointment.
                        </Text>
                    </VStack>
                </Stack>
            </Box>

            {/* Testimonials */}
            <Box mt={12}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    What our users are saying
                </Text>
                <VStack spacing={6} mt={6} align="center">
                    {/* Testimonial 1 */}
                    <Box
                        p={6}
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="lg"
                    >
                        <Text fontSize="lg">
                            &quot;CareConnect has made managing my appointments
                            a breeze. No more missed visits!&quot;
                        </Text>
                    </Box>
                    {/* Add more testimonials here */}
                </VStack>
            </Box>

            {/* CTA */}
            <Center mt={12}>
                <Button colorScheme="blue" size="lg">
                    Get Started Today
                </Button>
            </Center>
        </Box>
    );
}
