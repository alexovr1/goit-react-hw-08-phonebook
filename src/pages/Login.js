
import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';


const Login = () => {
    return (
        <Box display="flex" flexDirection='column' alignItems="center" justifyContent="center">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h2><Text fontWeight='500' fontSize='lg' textAlign='center'>Login form</Text></h2>
            <LoginForm />
        </Box>
    );
};

export default Login;