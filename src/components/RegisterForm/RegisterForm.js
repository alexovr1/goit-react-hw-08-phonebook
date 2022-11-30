import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(register(data));
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={onSubmit}
        >
            {({ values, handleChange }) => (
                <Form>
                    <FormControl display='flex' flexDirection='column' alignItems="center" justifyContent="center" gap={4}>
                        <FormLabel minW='300'>
                            Name
                            <Input
                                variant='outline'
                                placeholder='Enter your name'
                                type="text"
                                name="name"
                                required
                                value={values.name}
                                onChange={handleChange}
                            />
                        </FormLabel>
                        <FormLabel minW='300'>
                            Email
                            <Input
                                variant='outline'
                                placeholder='Enter your e-mail'
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
                                variant='outline'
                                placeholder='Enter your password'
                                type="password"
                                name="password"
                                required
                                value={values.password}
                                onChange={handleChange}
                            />
                        </FormLabel>
                        <Button colorScheme='linkedin' variant='solid' type="submit" mt={2}>
                            Sign Up
                        </Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    );
};