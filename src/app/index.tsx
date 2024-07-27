import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Title from '../components/Title';
import Container from '../components/Container';

const Home = () => {
  return (
    <Container>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Title>Wallet Test</Title>
      <View
        style={{
          gap: 20,
          marginTop: 10,
        }}
      >
        <Link href={{pathname: 'list'}} asChild>
          <CustomButton 
            text='meus cartões'
            type='primary'
          />
        </Link>
        <Link href='cadastro' asChild>
          <CustomButton 
            text='cadastrar cartão'
            type='secondary'
          />
        </Link>
      </View>
    </Container>
  );
}
export default Home;