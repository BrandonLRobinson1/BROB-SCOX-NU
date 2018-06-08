import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, CardSection, Card, Input, SectionSmall } from '../common';
import { colors } from '../Colors'

export default class SignUp extends Component {

  render() {
    const { circle, circleContainer, circleSelected} = styles
    return (
      <Card>
        <View style={circleContainer}>
          <View style={circleSelected} />
          <View style={circle} />
          <View style={circle} />
        </View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name"
            value={'this.props.name'}
            onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={'this.props.phone'}
            onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
          />
        </CardSection>

        <Text>meh</Text>
      </Card>
    )
  }
}

const { NU_Red , NU_Blue, NU_White } = colors
const styles = StyleSheet.create({
  circle: {
    height: 12,
    width: 12,
    backgroundColor: NU_Blue,
    borderRadius: 25,
    margin: 5
  },
  circleSelected:{
    height: 12,
    width: 12,
    backgroundColor: NU_Red,
    borderRadius: 25,
    margin: 5
  },
  circleContainer: {
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});