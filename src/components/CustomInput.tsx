import { Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import theme from '../theme'

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput = ({label, ...rest}: CustomInputProps) => {
  return (
    <View>
      <Text
        style={{color: theme.gray, fontSize: 14, marginBottom: 4}}
      >
        {label}
      </Text>
      <TextInput 
        aria-label={label}
        style={{
          backgroundColor: theme.white,
          color: theme.black,
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 14,
          fontSize: 16
        }}
        placeholderTextColor={theme.gray}
        {...rest}
      />
    </View>
  )
}

export default CustomInput