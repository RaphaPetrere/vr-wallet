import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, Stack } from 'expo-router'
import theme from '../theme'
import { FontAwesome5 } from '@expo/vector-icons';
import Body from '../components/Body'
import Card, { CardProps } from '../components/Card'
import { useCartoes } from '../hooks/cartoes'
import CustomButton from '../components/CustomButton'

const List = () => {
  const { cartoes } = useCartoes();
  const [selectedCardIndex, setSelectedCardIndex] = useState<string>();
  
  const handleCardSelect = (index: string) => {
    console.log('index', index);
    setSelectedCardIndex((currentState) => typeof currentState === 'undefined' ? index : undefined);
  }

  const CardList = ({cards}: {cards: CardProps[]}) => (
    <View 
      style={{
        position: 'relative', 
        width: 300, 
        height: 180 + ((cards.length - 1) * 20)
      }}
    >
      {cards.map((card, index) => (
        <Pressable 
          key={card.id}
          style={{
            position: 'absolute',
            bottom: (60 * index),
            elevation: 20 - (index * 4),
            zIndex: cards.length - index,
            shadowColor: theme.black,
          }}
          onPress={() => handleCardSelect(card.id)}
        >
          <Card 
            card={card} 
            variant={
              cartoes.findIndex(cartao => cartao.id === card.id) % 2 === 0 
              ? 'black' 
              : 'green'
            }
          />
        </Pressable>
      ))}
    </View>
  )

  return (
    <Container showImages={false}>
      <Stack.Screen
        options={{
          title: 'Wallet Test',
          headerTitleStyle: {color: theme.background, fontSize: 22, fontWeight: '100'},
          headerRight: () => (
            <Link href='cadastro' asChild>
              <Pressable 
                android_ripple={{
                  color: theme.gray,
                  radius: 20,
                  borderless: true
                }}
              >
                <FontAwesome5 name='plus' size={16} color={theme.accent} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <View
        style={{
          backgroundColor: theme.lighterGray,
          borderBottomStartRadius: 48,
          borderBottomEndRadius: 48,
          padding: 16,
        }}
      >
        <Text style={{color: theme.accent, fontSize: 20, textAlign: 'center'}}>
          Meus Cartões
        </Text>
      </View>
      <Body>
        <CardList 
          cards={
            typeof selectedCardIndex === 'undefined' 
            ? cartoes 
            : cartoes.filter(card => card.id === selectedCardIndex)
          } 
        />
        {typeof selectedCardIndex === 'undefined'
          ? (
            <Text 
              style={{
                color: theme.white, 
                marginTop: 10, 
                fontSize: 16
              }}
            >
              usar este cartão
            </Text>
          )
          : (
            <View style={{top: 100, width: 300}}>
              <CustomButton 
                type='primary'
                text='pagar com este cartão'
              />
              <View style={{opacity: .5, top: 140}}>
                <CardList 
                  cards={cartoes.filter(card => card.id !== selectedCardIndex)}
                />
              </View>
            </View>
          )
        }
        {/* <FlatList 
          data={cards}
          keyExtractor={card => card.id}
          renderItem={({item, index}) => (
            <View key={item.id}
              style={{
                position: 'absolute',
                bottom: (50*index),
                left: 0,
                elevation: cards.length - index,
                zIndex: cards.length - index
              }}
            >
              <Card card={item} />
              <Text>Index {index}</Text>
            </View>
          )}
          style={{
            height: 200, 
            width: 300, 
            flexGrow: 0, 
            position: 'relative', 
            backgroundColor: 'red'
          }}
        /> */}
      </Body>
    </Container>
  )
}

export default List