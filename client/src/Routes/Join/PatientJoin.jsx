import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    InputRightAddon,
    Text,
    Container,
} from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Join.scss';
import { useAuth0 } from '@auth0/auth0-react';

export default function PatientJoin() {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect } =
        useAuth0();
    // TODO Send this data to server on submit
    const [inputs, setInputs] = useState({
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        healthCard: {
            number: '',
            letter: '',
        },
        dob: '',
    });

    const changeValue = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setInputs((prevValue) => ({ ...prevValue, [name]: value }));
    };
    return (
        <Box className="join-page">
            <Text fontSize="3xl">Complete your signup</Text>
            <Container className="form">
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        name="firstName"
                        type="text"
                        value={inputs.firstName}
                        placeholder="John"
                        onChange={changeValue}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        name="lastName"
                        type="text"
                        value={inputs.lastName}
                        placeholder="Doe"
                        onChange={changeValue}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        value={inputs.email}
                        placeholder="johndoe@gmail.com"
                        onChange={changeValue}
                    />
                </FormControl>
                <HealthCardInput inputs={inputs} setInputs={setInputs} />
                <FormControl>
                    <FormLabel>Date of Birth (on Health Card)</FormLabel>
                    <Input
                        name="dob"
                        type="date"
                        value={inputs.dob}
                        onChange={changeValue}
                    />
                </FormControl>
            </Container>
        </Box>
    );
}

const HealthCardInput = ({ inputs, setInputs }) => {
    const handleNumChange = (event) => {
        console.log(inputs);
        const newValue = event.target.value;
        // Remove non-numeric characters from the input value
        const numericValue = newValue.replace(/\D/g, '');

        // Format the value with dashes
        let formattedValue = '';
        for (let i = 0; i < numericValue.length; i++) {
            if (i === 4 || i === 7) {
                formattedValue += ' ';
            }
            formattedValue += numericValue[i];
        }

        // If its 12 long, then do not add the letter
        // healthCard can be 10 long, but we formattedValue and add 2 spaces
        if (formattedValue.length > 12) return;
        setInputs((prevValue) => ({
            ...prevValue,
            healthCard: {
                number: formattedValue,
                letter: inputs.healthCard.letter,
            },
        }));
    };

    const handleLetterChange = (event) => {
        const newValue = event.target.value.toUpperCase();
        const validString = /^[A-Z]{0,2}$/;

        // Check if the new value is a valid letter input
        if (validString.test(newValue)) {
            setInputs((prevValue) => ({
                ...prevValue,
                healthCard: {
                    letter: newValue,
                    number: inputs.healthCard.number,
                },
            }));
        }
    };

    return (
        <FormControl>
            <FormLabel>Health Card Digits</FormLabel>
            <InputGroup>
                <Input
                    type="text"
                    placeholder="1234-567-891"
                    onChange={handleNumChange}
                    value={inputs.healthCard.number} // Use the 'number' property from the 'value' prop
                />
                <InputRightAddon>
                    <Input
                        maxW="5em"
                        type="text"
                        placeholder="LL"
                        onChange={handleLetterChange}
                        value={inputs.healthCard.letter} // Use the 'letter' property from the 'value' prop
                    />
                </InputRightAddon>
            </InputGroup>
            <FormHelperText>
                This is a 10-digit number with two letters.
            </FormHelperText>
        </FormControl>
    );
};

/* PatientJoin.propTypes = {
    user: PropTypes.object.isRequired,
}; */
HealthCardInput.propTypes = {
    inputs: PropTypes.object.isRequired,
    setInputs: PropTypes.func.isRequired,
};
