import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
  const { buttonStyle, buttonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
      <Text style={buttonTextStyle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft: 5,
    marginRight: 5
    },
  buttonTextStyle: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
    padding: 12,
    alignSelf: 'center', // centers text inside the button
  }
});

export { Button };