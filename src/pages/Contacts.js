import { ContactList } from '../components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/Form/Form';
import { Box } from '@chakra-ui/react';

const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Helmet>
                <title>Contact-list</title>
            </Helmet>
            <ContactForm />
            <ContactList />
        </Box>
    );
};

export default Contacts;