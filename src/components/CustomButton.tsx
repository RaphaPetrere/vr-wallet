import { View, Text, Pressable, TextStyle, PressableProps } from 'react-native'
import React, { forwardRef, LegacyRef } from 'react'
import theme from '../theme';

interface ButtonProps extends Omit<PressableProps, 'ref'> {
  text: string;
  textStyle?: TextStyle;
  type: 'primary' | 'secondary';
}

const CustomButton = forwardRef(({
  text,
  textStyle,
  type = 'primary',
  onPress,
  disabled,
}: ButtonProps, ref: LegacyRef<View>) => {
  return (
    <Pressable
      ref={ref}
      style={{
        backgroundColor: disabled ? theme.lighterGray : (type === 'primary' ? theme.accent : theme.lime),
        width: 300,
        height: 55,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 23,
        justifyContent: 'center',
      }}
      onPress={onPress}
      disabled={disabled}
    >
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
    </Pressable>
  )
})

CustomButton.displayName = "CustomButton";

export default CustomButton