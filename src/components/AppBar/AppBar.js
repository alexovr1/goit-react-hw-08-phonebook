import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import { Box } from '@chakra-ui/react';


export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header>
            <Box display="flex" alignItems="center" justifyContent="space-between" borderBottom='2px' borderColor='black' h={12} mb={6}>
                <Navigation />
                <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
            </Box>
        </header >

    );
};