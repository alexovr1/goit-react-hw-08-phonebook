import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { loader } from 'helpers/loader';
import { Box, Button, FormLabel, Input, List, ListItem } from '@chakra-ui/react';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <Box display='block'>
            <FormLabel mb={6}>
                Find contacts by name
                <Input
                    placeholder='Enter find name'
                    type="text"
                    name="filter"
                    onChange={handleFilterChange}
                />
            </FormLabel>
            <List spacing={4}>
                {isLoading && loader()}
                {error && <h3>{error}</h3>}

                {contacts.length !== 0
                    ? contacts.map(({ id, name, number }) => (
                        <ListItem key={id}>
                            {name}: {number}
                            <Button colorScheme='linkedin' variant='solid' size='xs' ml={2} type="button" onClick={() => dispatch(deleteContact(id))}>
                                Delete
                            </Button>
                        </ListItem>
                    ))
                    : ''}
            </List>
        </Box>
    );
}