import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, FullCard, SectionSmall, SectionMedium } from '../common';
import { colors } from '../Colors'

export default class GetCredentials extends Component {
  render () {
    const { align, buttonSection, buttonPadding, buttonPlacement, textStyle } = styles;
    return (
      <FullCard>

        <SectionSmall contentStyle={align}>
          <Text style={textStyle}>fill in later</Text>
        </SectionSmall>

        <SectionSmall contentStyle={align}>
          <Text style={textStyle}>fill in later</Text>
        </SectionSmall>

        <SectionSmall contentStyle={buttonSection}>

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
                onPress={() => Actions.SignUp()}
              />
            </CardSection>
          </View>

        </SectionSmall>

      </FullCard>
    )
  }
}
// Actions.main({ type: 'reset' }) // basically the router
const { NU_Red , NU_Blue, NU_White } = colors
const styles = StyleSheet.create({
  textStyle:{
    fontSize: 18,
    color: NU_White,
  },
  align: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: NU_Blue
  },
  buttonSection: {
    flex: 1,
    backgroundColor: NU_White,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  buttonPadding: {
    flex: 2,
  },
  buttonPlacement: {
    flex: 3,
  }
});