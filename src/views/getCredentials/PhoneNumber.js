import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, Input, EnterPhone } from '../../common';
import { allNumbersRegEx } from '../../helpers/helpersFunctions';
import { updatePhoneNumber, clearAll, addFormInfo } from '../../store/signUp/SignUp';
import { colors } from '../../Colors'

class PhoneNumber extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      loading: false,
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.textInputRender = this.textInputRender.bind(this);
  }

  async onButtonPress() {
    const { phoneNumber1, phoneNumber2, phoneNumber3 } = this.state;
    const number = `${phoneNumber1}${phoneNumber2}${phoneNumber3}`;
    // if (!allNumbersRegEx(this.props.phoneNumber) || this.props.phoneNumber.length < 10) return this.setState({errorMessage: 'Please Enter Valid Phone Number '});
    if (!allNumbersRegEx(number) || number.length < 10) return this.setState({errorMessage: 'Please Enter Valid Phone Number '});
  
    await this.props.updatePhoneNumber(`${phoneNumber1}${phoneNumber2}${phoneNumber3}`);
    
    this.setState({ loading: true });
    this.props.addFormInfo()
      .then(() => {
        this.props.clearAll();
        Actions.Validate();
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });

      // console.log(
      //   'await in function before this log -->',
      //   this.props.firstName,
      //   this.props.lastName,
      //   this.props.phoneNumber,
      //   this.props.password,
      //   this.props.zipCode,
      //   this.props.email
      // )
  }

  textInputRender(maxLength, placeholder, stateNum) {
    const { inputStyle } = styles;
    const setStateVar = `phoneNumber${stateNum}`;
    const valueVar = this.state[`phoneNumber${stateNum}`];

    return (
      <TextInput
        maxLength={maxLength}
        keyboardType="numeric"
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={valueVar}
        onChangeText={text => {
          this.setState({
            errorMessage: "",
            [setStateVar]: text,
          });
        }}
      />
    )
  }

  render() {
    const { circle, circleContainer, circleSelected, errorText, containerStyle, labelStyle } = styles;
    return (
      <Card>

        <View style={circleContainer}>
          <View style={circle} />
          <View style={circle} />
          <View style={circleSelected} />
        </View>
       
        <CardSection>
          <View style={containerStyle}>
            <Text style={labelStyle}>Phone Number</Text>
            <Text>(</Text>
            {this.textInputRender(3, '555', '1')}
            <Text>)</Text>
            {this.textInputRender(3, '555', '2')}
            <Text>-</Text>
            {this.textInputRender(4, '5555', '3')}
          </View>
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
            onPress={() => this.onButtonPress}
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
    clearAll,
    addFormInfo
  }
)(PhoneNumber);

const { NU_Red, NU_Blue, NU_White, NU_Grey, NU_Black } = colors

const styles = StyleSheet.create({
  circle: {
    height: 12,
    width: 12,
    backgroundColor: NU_Blue,
    borderRadius: 25,
    margin: 5
  },
  circleSelected: {
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
  },

  inputStyle: {
    color: NU_Black,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    // backgroundColor: 'blue',
    textAlign: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 3
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

