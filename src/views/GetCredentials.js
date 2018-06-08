import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, CardSection, Card, FullCard, SectionSmall, SectionMedium } from '../common';

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
                onPress={() => {}}
              />
            </CardSection>
          </View>

        </SectionSmall>

      </FullCard>
    )
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 18,
    color: 'white',
  },
  align: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flex: 1,
    backgroundColor: 'white',
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