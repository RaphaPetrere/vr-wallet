import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Container from '../components/Container';
import Title from '../components/Title';

const Cadastro = () => {
  return (
    <Container>
      <Stack.Screen
        options={{
          title: 'cadastro',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent'
          }
        }}
      />
      <Title>
        Wallet Test
      </Title>
    </Container>
  )
}

export default Cadastro