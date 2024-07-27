import { View, Text } from 'react-native'
import React from 'react'
import theme from '../theme'

const Title = ({children}: {children: string | React.ReactNode}) => {
  return (
    <Text
      style={{
        color: theme.white,
        fontSize: 28,
      }}
    >
      {children}
    </Text>
  )
}

export default Title