import { Box, Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
    return (

        <ul>
            <Flex align="center" justify="flex-start">
                <Box mr={4}>
                    <li>
                        <NavLink
                            to="/register"
                        >
                            <Button colorScheme='linkedin' variant='solid'>
                                Register
                            </Button>
                        </NavLink>
                    </li>
                </Box>
                <li>
                    <NavLink
                        to="/login"
                    >
                        <Button colorScheme='linkedin' variant='outline'>Log In</Button>

                    </NavLink>
                </li>
            </Flex>
        </ul>

    );
};