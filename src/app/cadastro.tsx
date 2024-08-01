import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { onlyNumbers } from '../utils/onlyNumbers';
import { addChar } from '../utils/addChar';
import { thereIs } from '../utils/thereIs';

const Cadastro = () => {
  const { cartoes, createCartao } = useCartoes();
  const [numCartao, setNumCartao] = useState('');
  const [nome, setNome] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardToShow, setCardToShow] = useState<CardProps>();
  const router = useRouter();

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
    if(thereIs(cardToShow))
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

  let opacity = new Animated.Value(0);
  const size = opacity.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [0, 40, 0],
  });

  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {animate()}, [])

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
        <Animated.View
          style={{
            opacity,
            bottom: size,
          }}
        >
          <Title />
        </Animated.View>
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