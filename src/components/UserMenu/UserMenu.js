import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Box, Button, Flex } from '@chakra-ui/react';


export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const handleClick = () => dispatch(logOut());

    return (
        <div>
            <Flex align="center" justify="center">
                <Box mr={4}>Hi, {user.name}</Box>
                <Button size='sm' colorScheme='linkedin' variant='outline' onClick={handleClick}>
                    <Flex align="center" justify="center">Logout <RiLogoutCircleRLine /></Flex>
                </Button>
            </Flex>
        </div>
    );
};