import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
    return (
        <Box pl={4} pr={4}>
            <ToastContainer />
            <AppBar />
            <div>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </div>
        </Box>
    );
};