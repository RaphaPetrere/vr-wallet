import { View, Text, Pressable, TextStyle, PressableProps, ViewStyle, ActivityIndicator } from 'react-native'
import React, { forwardRef, LegacyRef } from 'react'
import theme from '../theme';

interface ButtonProps extends PressableProps {
  text: string;
  textStyle?: TextStyle;
  type: 'primary' | 'secondary';
  isLoading?: boolean;
}

const CustomButton = forwardRef(({
  text,
  textStyle,
  type = 'primary',
  onPress,
  disabled,
  style,
  isLoading,
}: ButtonProps, ref: LegacyRef<View>) => {
  return (
    <Pressable
      ref={ref}
      style={[
        {
          backgroundColor: disabled ? theme.lighterGray : (type === 'primary' ? theme.accent : theme.lime),
          width: '100%',
          height: 55,
          borderRadius: 12,
          paddingVertical: 10,
          paddingHorizontal: 23,
          justifyContent: 'center',
        },
        (style as ViewStyle)
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {
        isLoading 
        ? (
            <ActivityIndicator 
              color={type === 'primary' ? theme.background : theme.accent} 
              size={'small'} 
            />
          )
        : (
          <Text 
            style={[
              {
                color: disabled ? theme.gray : (type === 'primary' ? theme.white : theme.background), 
                textAlign: 'center'
              },
              textStyle
            ]}
          >
            {text}
          </Text>
        )
      }
    </Pressable>
  )
})

CustomButton.displayName = "CustomButton";

export default CustomButton