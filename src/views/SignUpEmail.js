import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, Input, SectionSmall } from '../common';
import { updateEmail } from '../store/signUp/SignUp'; 
import { emailRegEx, specialCharacterValidation } from '../helpers/helpersFunctions';
import { colors } from '../Colors'

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: '',
      clearTextOnFocus: false,
      useSecondPassword: false,
      pw1: '',
      pw2: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {

    // const { pw1, pw2, clearTextOnFocus, useSecondPassword } = this.state;

    // if (!emailRegEx(this.props.email)) return this.setState({errorMessage: 'Please Enter Valid Email '});
    // if (pw1.length < 7) return this.setState({errorMessage: 'Password must be at least 7 characters'});
    // if (!specialCharacterValidation(pw1)) return this.setState({errorMessage: 'Password must contain at least one special character'});
    // if (pw1 !== pw2) return this.setState({errorMessage: 'Password do not match', pw1: '', pw2: '', clearTextOnFocus: true, useSecondPassword: true});
    console.log('screen 2', this.props)
    Actions["Phone Number"]();    
  }

  render() {
    const { circle, circleContainer, circleSelected, errorText } = styles
    return (
      <Card>

        <View style={circleContainer}>
          <View style={circle} />
          <View style={circleSelected} />
          <View style={circle} />
        </View>

        <CardSection>
          <Input
            label="Email"
            placeholder="Email Address"
            value={this.props.email}
            onChangeText={text => {
              this.setState({errorMessage: ''});
              this.props.updateEmail(text);
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            value={this.state.p1}
            clearTextOnFocus={this.state.clearTextOnFocus}
            onChangeText={text => {
              this.setState({
                errorMessage: '',
                pw1: text,
                clearTextOnFocus: false
              });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Re-Enter Password"
            value={this.state.p2}
            clearTextOnFocus={this.state.useSecondPassword}
            onChangeText={text => {
              this.setState({
                errorMessage: '',
                pw2: text,
                useSecondPassword: false
              });
            }}
          />
        </CardSection>

        <CardSection>
          <Button
            buttonText="Submit"
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
    email: state.signUp.SignUp.email
  }),
  {
    updateEmail
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
  },
  errorText: {
    color: NU_Red,
    width: '100%',
    display: 'flex',
    textAlign: 'center'
  }
});

// const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

// if(reg.test(email) === false) {
//   return this.setState({
//     email: '',
//     password: '',
//     error: 'Please enter a valid email',
//     loading: false
//   })
// };

// if (password.length < 7) 
//   return this.setState({
//     // email: '',
//     password: '',
//     loading: false,
//     error: 'Password must contain at least 7 characters'
// });