import { Box, Image, Text, Button } from '@chakra-ui/react';
import Doctor from '../../../assets/doctor.jpg';
import './Header.scss';
export default function Header() {
    return (
        <Box className="corp-header">
            <div className='headline'>
                <Text m="3" fontSize="5xl">Secure and seamless medical scheduling.</Text>
                <Text m="3" fontSize={'xl'}>CareConnect makes it effortless to book appointments with your preferred healthcare providers. Say goodbye to long waiting times and frustrating phone calls.</Text>
                <div className="links">
                    <Button colorScheme="blue" variant='solid' spacing='6'>Connect your clinic</Button>
                    <Button variant='outline' spacing='6'>Go to CareConnect</Button>
                </div>
                <Text m="3" fontSize={'xl'}>Don't have an account? <a href='/login'>Sign up</a></Text>
            </div>

            {/* <Image src={Doctor} maxW="50%" borderRadius="1em" blurRadius="5" /> */}
{/* -            <Text fontSize="3xl">Connect with your Doctor</Text>

            <div className='sales-section'>
                <Text fontSize="xl"></Text>
                <Text fontSize="4xl">Schedule with Ease</Text>
                <Text fontSize="xl" fontWeight={'bold'}>User-Friendly Interface:</Text>
                <Text fontSize="xl">Our intuitive platform ensures a smooth and hassle-free experience for both patients and doctors.</Text>
            </div>         */}
        </Box>
    );
}
