import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, Input, SectionSmall } from '../common';
import { updatePhoneNumber } from '../store/signUp/SignUp'; 
import { allNumbersRegEx } from '../helpers/helpersFunctions';
import { colors } from '../Colors'

class PhoneNumber extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    if (!allLettersRegEx(this.props.phoneNumber)) return this.setState({errorMessage: 'Please Enter Valid Phone Number '});
    // Actions.Verify();
    console.log('verify it all', this.props);
  }

  render() {
    const { circle, circleContainer, circleSelected, errorText } = styles
    return (
      <Card>

        <View style={circleContainer}>
          <View style={circle} />
          <View style={circle} />
          <View style={circleSelected} />
        </View>

        <CardSection>
          <Input
            label="Phone Num"
            placeholder="Phone Number"
            value={this.props.phoneNumber}
            onChangeText={text => {
              this.setState({errorMessage: ""});
              this.props.updatePhoneNumber(text);
            }}
            keyboardType={"numeric"}
            maxLength={10}
          />
        </CardSection>

        

        <CardSection>
          <Button
            buttonText="Verify by Text"
            onPress={this.onButtonPress}
          />
        </CardSection>

        <CardSection>
          <Button
            buttonText="Verify by Email"
            onPress={this.onButtonPress}
          />
        </CardSection>
        
        <CardSection>
          <Text style={errorText}>
            {this.state.errorMessage}
          </Text>
        </CardSection>

      </Card>
    )
  }
}

// name zip -> email pw times 2 -> verify email

export default connect(
  state => ({
    // phoneNumber: state.signUp.SignUp.phoneNumber
    firstName: state.signUp.SignUp.firstName,
    lastName: state.signUp.SignUp.lastName,
    phoneNumber: state.signUp.SignUp.phoneNumber,
    password: state.signUp.SignUp.password,
    zipCode: state.signUp.SignUp.zipCode,
    email: state.signUp.SignUp.email
  }),
  {
    updatePhoneNumber
  }
)(PhoneNumber);

const { NU_Red , NU_Blue, NU_White, NU_Grey } = colors

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
    height: '13%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: NU_Grey
  },
  errorText: {
    color: NU_Red,
    width: '100%',
    display: 'flex',
    textAlign: 'center'
  }
});

