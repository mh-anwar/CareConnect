import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Join.scss';

export default function HealthCareProviderJoin() {
    const { isLoading, isAuthenticated, user } = useAuth0();

    const [inputs, setInputs] = useState({
        clinicName: user.given_name,
        email: user.email,
        physicalAddress: '',
        city: '',
        province: '',
        postalCode: '',
        phoneNumber: '',
        website: '',
        uuid: user.user_id,
    });

    const changeValue = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setInputs((prevValue) => ({ ...prevValue, [name]: value }));
    };

    return (
        <Box className="join-page">
            <Text fontSize="3xl">
                Complete HealthCare Provider Registration
            </Text>
            <Box className="form">
                <Box className="sub-form">
                    <FormControl>
                        <FormLabel>Health Provider Name</FormLabel>
                        <Input
                            name="clinicName"
                            type="text"
                            value={inputs.clinicName}
                            placeholder="John"
                            onChange={changeValue}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            value={inputs.email}
                            placeholder="johndoe@gmail.com"
                            onChange={changeValue}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            name="phoneNumber"
                            type="number"
                            value={inputs.email}
                            placeholder="johndoe@gmail.com"
                            onChange={changeValue}
                        />
                    </FormControl>
                </Box>
                <Box className="sub-form">
                    <FormControl>
                        <FormLabel>Physical Address</FormLabel>
                        <Input
                            name="physicalAddress"
                            type="text"
                            value={inputs.physicalAddress}
                            placeholder="60 Tycos Drive"
                            onChange={changeValue}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input
                            name="city"
                            type="text"
                            value={inputs.city}
                            placeholder="Toronto"
                            onChange={changeValue}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Postal Code</FormLabel>
                        <Input
                            name="postalCode"
                            type="text"
                            value={inputs.postalCode}
                            placeholder="M6B 1V9"
                            onChange={changeValue}
                        />
                    </FormControl>
                </Box>
                <Box className="sub-form">
                    <FormControl>
                        <FormLabel>Website</FormLabel>
                        <Input
                            name="website"
                            type="url"
                            value={inputs.website}
                            placeholder="https://medicalcenter.com"
                            onChange={changeValue}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Website</FormLabel>
                        <Input
                            name="website"
                            type="url"
                            value={inputs.website}
                            placeholder="https://medicalcenter.com"
                            onChange={changeValue}
                        />
                    </FormControl>
                </Box>
                <Input
                    type="submit"
                    value="Submit"
                    onClick={() => submitHCPData(inputs)}
                />
            </Box>
        </Box>
    );
}

function submitHCPData({ hcpData }) {
    // TODO Connect to backend
    fetch('HCP ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hcpData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}

/* HealthCareProviderJoin.propTypes = {
    user: PropTypes.object.isRequired,
}; */
