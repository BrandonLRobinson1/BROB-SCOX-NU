import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

class Button extends Component {
  // state = {}

  render () {
    const { buttonStyle, buttonText } = styles;
    return (
      <TouchableOpacity onPress={ this.props.onPress } style={buttonStyle}>
        <Text style={buttonText}>
          {this.props.buttonText}
        </Text>
      </TouchableOpacity>
    )
  }
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
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
    padding: 12,
    alignSelf: 'center', // centers text inside the button
  }
});

export { Button };