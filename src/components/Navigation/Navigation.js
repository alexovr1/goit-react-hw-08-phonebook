import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FcPhoneAndroid } from "react-icons/fc";
import { Flex, Text } from '@chakra-ui/react';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <NavLink
                to="/"
            >
                <Flex align="center" justify="flex-start"><FcPhoneAndroid /><Text textShadow='1px 1px #000' fontSize={20} fontWeight='600'>PhoneBook</Text></Flex>
            </NavLink>
            {isLoggedIn && (
                <div>
                    <NavLink
                        to="/contacts"
                    >
                        <Text fontSize={18}>Contacts</Text>
                    </NavLink>
                </div>
            )}
        </>
    );
};