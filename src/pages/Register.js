import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <Box display="flex" flexDirection='column' alignItems="center" justifyContent="center">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <h2><Text fontWeight='500' fontSize='lg' textAlign='center'>Register form</Text></h2>
            <RegisterForm />
        </Box>
    );
};

export default Register;