import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Card, Input, SectionSmall } from '../common';
import { updateFirstName, updateLastName, updateZipCode } from '../store/signUp/SignUp'; 
import { allLettersRegEx , allNumbersRegEx, specialCharacterValidation} from '../helpers/helpersFunctions';
import { colors } from '../Colors'

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
  }



  onButtonPress() {
    if (!allLettersRegEx(this.props.firstName)) return this.setState({errorMessage: 'Please Enter Valid First Name TODO:// add special characters'});
    if (!allLettersRegEx(this.props.lastName)) return this.setState({errorMessage: 'Please Enter Valid Last Name TODO:// add special characters'});
    if (!allNumbersRegEx(this.props.zipCode)) return this.setState({errorMessage: 'Please Enter Valid Zip Code TODO:// add special characters'});
  }

  errorMessage () {
    return !this.state.errorMessage
      ? null
      : (
        <CardSection>
          <Text>
            {this.state.errorMessage}
          </Text>
        </CardSection>
      );
  }

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
            label="First Name"
            placeholder="First Name"
            value={this.props.firstName}
            onChangeText={text => {
              this.setState({errorMessage: ''});
              this.props.updateFirstName(text);
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={this.props.fastName}
            onChangeText={text => {
              this.setState({errorMessage: ''});
              this.props.updateLastName(text);
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Zip Code"
            placeholder="Zip Code"
            value={this.props.zipCode}
            keyboardType={'numeric'}
            onChangeText={text => this.props.updateZipCode(text)}
          />
        </CardSection>

        <CardSection>
          <Button
            buttonText="Next"
            onPress={this.onButtonPress}
          />
        </CardSection>
        {this.errorMessage()}

      </Card>
    )
  }
}

// name zip -> email pw times 2 -> verify email

export default connect(
  state => ({
    firstName: state.signUp.SignUp.firstName,
    lastName: state.signUp.SignUp.lastName,
    zipCode: state.signUp.SignUp.zipCode
  }),
  {
    updateFirstName,
    updateLastName,
    updateZipCode
  }
)(SignUp);

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
  }
});