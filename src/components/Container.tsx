import { View, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
import theme from '../theme'
import shape from '../assets/shape.png';

const Container = ({
  children,
  showImages = true
}: PropsWithChildren<{showImages?: boolean}>) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.background
    }}>
      {
        showImages && (
          <>
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
          </>
        )
      }
      {children}
    </View>
  )
}

export default Container