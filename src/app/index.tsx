import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Title from '../components/Title';
import Container from '../components/Container';
import Body from '../components/Body';

const Home = () => {
  return (
    <Container>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Body>
        <Title />
        <View style={{gap: 20, width: '100%', marginTop: 10}}>
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
      </Body>
    </Container>
  );
}
export default Home;