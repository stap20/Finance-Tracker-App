import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@theme';

export default function Test(): React.JSX.Element {
  const {theme,toggleTheme} = useTheme()
  console.log(theme)
  return <Text>Test message</Text>;
}
