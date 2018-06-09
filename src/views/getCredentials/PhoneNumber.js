import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, Input } from '../../common';
import { allNumbersRegEx } from '../../helpers/helpersFunctions';
import { updatePhoneNumber, signUserUp } from '../../store/signUp/SignUp'; 
import { colors } from '../../Colors'

class PhoneNumber extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  async onButtonPress() {
    // if (!allNumbersRegEx(this.props.phoneNumber) || this.props.phoneNumber.length < 10) return this.setState({errorMessage: 'Please Enter Valid Phone Number '});

    await this.props.signUserUp()
    .then(() => console.log('then--'))
    .catch( (err) => console.log('catch--', err))
    console.log('verify it all', this.props);
    // Actions.Verify();
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

export default connect(
  state => ({
    // phoneNumber: state.signUp.SignUp.phoneNumber

    // HAVE THESE ALL HERE FOR TESTING PURPOSES
    firstName: state.signUp.SignUp.firstName,
    lastName: state.signUp.SignUp.lastName,
    phoneNumber: state.signUp.SignUp.phoneNumber,
    password: state.signUp.SignUp.password,
    zipCode: state.signUp.SignUp.zipCode,
    email: state.signUp.SignUp.email
  }),
  {
    updatePhoneNumber,
    signUserUp
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

