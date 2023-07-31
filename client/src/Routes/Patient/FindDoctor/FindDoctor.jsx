import { Box } from '@chakra-ui/react';
import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import { Image, Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import './FindDoctor.scss';

export default function FindDoctor() {
    // const DoctorSearchBar = ({ onSearch }) => {
    //     const handleSearchChange = (event) => {
    //       const searchText = event.target.value;
    //       onSearch(searchText);
    //     };

    const paths = {
        Home: { path: '/patient' },
        'Find Doctor': {
            path: '/patient/find-doctor',
            active: true,
        },
    };

    return (
        <Box>
            <Navigation paths={paths} />
            <Box className="finddoctor-main">
                <Text m='3' fontSize={'2xl'} fontWeight={''}>Discover Your Perfect Doctor in Your Area</Text>
                <Text m='3' fontsize={'xs'}>Type in your desired specialty or doctor's name in the search bar above, and we'll display a list of relevant options. Let's find a suitable healthcare professional for you.</Text>
                <InputGroup>
                    <Input
                    type="text"
                    placeholder="Search doctors..."
                    // onChange={handleSearchChange}
                    />
                    <InputRightElement>
                    <SearchIcon color="gray.500" />
                    </InputRightElement>
                </InputGroup>
                <Image src='https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' borderRadius="1em" m="10" />
            </Box>
            <Footer/>
        </Box>
    );
}
