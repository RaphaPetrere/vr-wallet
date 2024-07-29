import { View, Text } from 'react-native'
import React from 'react'
import theme from '../theme'

export interface CardProps {
  id: string;
  cvv: string;
  name: string;
  number: string;
  expiration: string;
}

const CardInfo = ({
  text, 
  variant, 
  size = 14
}: {text: string; variant: 'black' | 'green'; size?: number;}) => (
  <Text 
    style={{
      color: variant === 'black' ? theme.white : theme.darkerGray, 
      fontSize: size
    }}
  >
    {text}
  </Text>
)

const Card = ({card, variant}: {card: CardProps, variant: 'black' | 'green'}) => {
  return (
    <View
      style={{
        backgroundColor: variant === 'black' ? theme.black : theme.lime,
        width: 300,
        height: 180,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 25,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: theme.black
      }}
    >
      <CardInfo variant={variant} text='Queen Card' size={18} />
      <View>
        <CardInfo text={card.name} variant={variant} size={16} />
        <CardInfo 
          text={card.number
            .replaceAll(' ', '')
            .replace(/.(?=.{4})/g, '•')
            .match(new RegExp('.{1,4}', 'g'))!
            .join(' ')
          } 
          variant={variant} 
        />
        <CardInfo text={`Validade ${card.expiration ?? 'Indisponível'}`} variant={variant} />
      </View>
    </View>
  )
}

export default Card