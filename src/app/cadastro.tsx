import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import Container from '../components/Container';
import Title from '../components/Title';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Body from '../components/Body';
import { useCartoes } from '../hooks/cartoes';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Card, { CardProps } from '../components/Card';
import theme from '../theme';

const Cadastro = () => {
  const { cartoes, createCartao } = useCartoes();
  const [numCartao, setNumCartao] = useState('');
  const [nome, setNome] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardToShow, setCardToShow] = useState<CardProps>();
  const router = useRouter();

  const addChar = (text: string, interval: number, char: '/' | ' ') => 
    text.match(new RegExp(`.{1,${interval}}`, 'g'))!.join(char); 
  //Esse Regex adiciona um espaço ou / a cada intervalo

  const onlyNumbers = (text: string) => text.replace(/\D/g, '');

  const handleNumCartao = (text: string) => {
    const numWithoutSpaces = onlyNumbers(text);
    if(numWithoutSpaces.length > 0)
      setNumCartao(addChar(numWithoutSpaces, 4, ' '))
    else
      setNumCartao('');
  }

  const handleVencimento = (text: string) => {
    const numWithoutSlash = onlyNumbers(text);
    if(numWithoutSlash.length > 0)
      setVencimento(addChar(numWithoutSlash, 2, '/'))
    else
      setVencimento('');
  }

  const handleForward = async() => {
    if(typeof cardToShow !== 'undefined')
    {
      router.push('list');
    }
    else
    {
      if(cartoes.find(cartao => cartao.number === numCartao))
      {
        console.log('Já existe um cartão com esse número cadastro');
        return;
      }
  
      const newCard = {
        id: uuidv4(),
        number: numCartao,
        name: nome,
        cvv,
        expiration: vencimento
      };
      const cartaoCreated = await createCartao(newCard);
  
      if(cartaoCreated)
      {
        setCardToShow(newCard);
      }
      else
      {
        console.log('Houve um problema ao criar o cartão!');
        return;
      }
    }
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
        {cardToShow
          ? (
            <>
              <Text style={{fontSize: 20, color: theme.white}}>
                cartão cadastrado com sucesso
              </Text>
              <View style={{marginVertical: 30}}>
                <Card 
                  card={cardToShow}
                  variant={cartoes.length % 2 === 0 ? 'black': 'green'}
                />
              </View>
            </>
          )
          : (
            <View style={{width: '100%', gap: 16, marginBottom: 16}}>
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
                    onChangeText={handleVencimento}
                    maxLength={5}
                  />
                </View>
                <View style={{flex: 1}}>
                  <CustomInput 
                    label='código de segurança'
                    value={cvv}
                    placeholder='***'
                    inputMode='numeric'
                    onChangeText={(text) => setCVV(onlyNumbers(text))}
                    maxLength={3}
                  />
                </View>
              </View>
            </View>
          )
        }
        <CustomButton 
          text='avançar'
          type='primary'
          disabled={
            numCartao.length !== 19 ||
            nome.length < 5 ||
            vencimento.length !== 5 ||
            cvv.length !== 3
          }
          onPress={handleForward}
        />
      </Body>
    </Container>
  )
}

export default Cadastro