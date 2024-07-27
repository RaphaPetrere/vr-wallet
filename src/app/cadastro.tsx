import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router';
import Container from '../components/Container';
import Title from '../components/Title';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Body from '../components/Body';

const Cadastro = () => {
  const [numCartao, setNumCartao] = useState('');
  const [nome, setNome] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [cvv, setCVV] = useState('');
  const handleNumCartao = (text: string) => {
    const numWithoutSpaces = text.replaceAll(' ', '');
    if(numWithoutSpaces.length > 0)
    {
      setNumCartao(
        numWithoutSpaces
        .replace(/\D/g, '') //Filtra as letras, deixando somente numeros
        .match(new RegExp('.{1,4}', 'g'))!.join(' ') //Esse Regex adiciona um espaço a cada 4 caracteres
      )
    }
    else
      setNumCartao('');
  }
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
      <Body>
        <Title />
        <View style={{width: '100%', gap: 16}}>
          <CustomInput 
            label='número do cartão'
            value={numCartao}
            maxLength={19}
            inputMode='numeric'
            onChangeText={handleNumCartao}
          />
          <CustomInput 
            label='nome do titular do cartão'
            value={nome}
            onChangeText={setNome}
          />
          <View style={{flexDirection: 'row', gap: 12}}>
            <View style={{flex: 1}}>
              <CustomInput 
                label='vencimento'
                value={vencimento}
                placeholder='00/00'
                inputMode='numeric'
                onChangeText={setVencimento}
                maxLength={4}
              />
            </View>
            <View style={{flex: 1}}>
              <CustomInput 
                label='código de segurança'
                value={cvv}
                placeholder='***'
                inputMode='numeric'
                onChangeText={setCVV}
                maxLength={3}
              />
            </View>
          </View>
          <CustomButton 
            text='avançar'
            type='primary'
            isLoading
          />
        </View>
      </Body>
    </Container>
  )
}

export default Cadastro