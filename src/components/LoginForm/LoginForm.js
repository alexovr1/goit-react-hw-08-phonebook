import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(logIn(data));
    };

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
            {({ values, handleChange }) => (
                <Form>
                    <FormControl display='flex' flexDirection='column' alignItems="center" justifyContent="center" gap={4}>
                        <FormLabel minW='300'>
                            Email
                            <Input
                                placeholder='enter your registered e-mail'
                                type="email"
                                name="email"
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </FormLabel>
                        <FormLabel minW='300'>
                            Password
                            <Input
                                placeholder='enter your registered password'
                                type="password"
                                name="password"
                                required
                                value={values.password}
                                onChange={handleChange}
                            />
                        </FormLabel>
                        <Button colorScheme='linkedin' variant='solid' type='submit'>
                            Log In
                        </Button>
                    </FormControl>
                </Form>

            )}
        </Formik>
    );
};