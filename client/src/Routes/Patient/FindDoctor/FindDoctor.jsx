import { Box } from '@chakra-ui/react';
import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
            <Footer/>
        </Box>
    );
}
