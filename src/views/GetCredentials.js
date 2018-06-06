import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, CardSection, Card } from '../common';

export default class GetCredentials extends Component {

  render () {
    const { container, section1, section2, buttonSection, buttonPadding, buttonPlacement, textStyle } = styles;

    return (
      <View style={container}>

        <View style={section1}>
         <Text style={textStyle}>fill in later</Text>
        </View>

        <View style={section2}>
         <Text style={textStyle}>fill in later</Text>
        </View>

        <View style={buttonSection}>

          <View style={buttonPadding} />
          
          <View style={buttonPlacement}>
            <CardSection>
              <Button
                buttonText="Log In"
                onPress={() => {}}
              />
            </CardSection>
            <CardSection>
              <Button
                buttonText="Sign Up"
                onPress={() => {}}
              />
            </CardSection>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    // textAlign: 'center'
  },

  textStyle:{
    fontSize: 18,
    color: 'white',
    // lineHeight: 40
  },

  section1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSection: {
    flex: 1,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  buttonPadding: {
    flex: 2,
  },
  buttonPlacement: {
    flex: 3,
  }
});