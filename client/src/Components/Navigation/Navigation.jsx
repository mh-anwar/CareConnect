import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import './Navigation.scss';

export default function Navigation({ paths }) {
    return (
        <Box className="corp-navbar">
            <Text fontSize="3xl">CareConnect</Text>

            <Box className="links">
                {Object.entries(paths).map(([name, values]) =>
                    name == 'Join' ? (
                        <AuthButton key={name} />
                    ) : (
                        <Button
                            as={Link}
                            to={values.path}
                            key={values.path}
                            colorScheme="blue"
                            variant="outline"
                        >
                            {name}
                        </Button>
                    )
                )}
            </Box>
        </Box>
    );
}

const AuthButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            as={Link}
            colorScheme="blue"
            variant="solid"
            onClick={() => loginWithRedirect()}
        >
            Join
        </Button>
    );
};

Navigation.propTypes = {
    paths: PropTypes.objectOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};
