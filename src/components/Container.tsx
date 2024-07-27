import { View, Image } from 'react-native'
import React from 'react'
import theme from '../theme'
import shape from '../assets/shape.png';

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background
    }}>
      <Image 
        source={shape} 
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
        }}
      />
      <Image 
        source={shape} 
        style={{
          bottom: 0,
          right: 0,
          position: 'absolute',
          transform: [{rotateX: '180deg'}, {rotateY: '180deg'}]
        }}
      />
      {children}
    </View>
  )
}

export default Container