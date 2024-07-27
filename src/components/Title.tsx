import { Text } from 'react-native'
import React from 'react'
import theme from '../theme'

const Title = () => {
  return (
    <Text
      style={{
        color: theme.white,
        fontSize: 28,
        marginBottom: 10,
      }}
    >
      Wallet Test
    </Text>
  )
}

export default Title