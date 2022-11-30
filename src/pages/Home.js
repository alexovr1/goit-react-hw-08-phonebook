
import { Flex, Text } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  return (
    <h1>
      <Flex align="center" justify="center">
        <Text textShadow='1px 1px black' m='6' fontSize={24}>
          Welcome {user.name ? `${user.name} to the best phone book app` : 'new user to the best phone book app. Please register :)'}
        </Text>
      </Flex>
    </h1>
  );
};

export default Home;