import { View, Text } from 'react-native'
import React from 'react'

const Body = ({children}: {children: React.ReactNode}) => {
  return (
    <View 
      style={{
        flex: 1, 
        paddingHorizontal: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      {children}
    </View>
  )
}

export default Body