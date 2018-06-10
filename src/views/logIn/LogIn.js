import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card, Input, Spinner } from '../../common';
import { updateLogInEmail, updateLogInPassword } from '../../store/logIn/logIn'; 
import { emailRegEx, specialCharacterValidation } from '../../helpers/helpersFunctions';
import { colors } from '../../Colors';

class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: '',
      clearTextOnFocus: false,
      password: '',
      loading: null
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  async onButtonPress() {
    const { password, clearTextOnFocus, useSecondPassword } = this.state;
    if (!emailRegEx(this.props.email)) return this.setState({errorMessage: 'The email address is badly formatted.'});
    if (password.length < 7) return this.setState({errorMessage: 'Password must be at least 7 characters'});
    if (!specialCharacterValidation(password)) return this.setState({errorMessage: 'Password must contain at least one special character'});
    
    this.props.updateLogInPassword(`findout how to encrypt in front end ${password}`);

    this.setState({ loading: true });
    await this.props.logUserIn()
      .then(() => {
        this.setState({
          password: '',
          pw2: ''
        });
        this.props.updateLogInPassword(null);
        Actions["Phone Number"]();    
        this.setState({ loading: false });
      })
      .catch( (err) => {
        console.log('email sign in error', err);
        this.setState({ 
          errorMessage: err.message,
          clearTextOnFocus: true,
          loading: false
        });
      })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button
        buttonText="Submit"
        onPress={() => this.onButtonPress()}
      />
    )
  }

  render() {
    const { errorText  } = styles;

    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="Email Address"
            value={this.props.email}
            onChangeText={text => {
              this.setState({errorMessage: ''});
              this.props.updateLogInEmail(text);
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            value={this.state.password}
            clearTextOnFocus={this.state.clearTextOnFocus}
            onChangeText={text => {
              this.setState({
                errorMessage: '',
                password: text,
                clearTextOnFocus: false
              });
            }}
          />
        </CardSection>

        <CardSection>    
          {this.renderButton()}
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
    email: state.logIn.logIn.email,
    password: state.logIn.logIn.password
  }),
  {
    updateLogInEmail,
    updateLogInPassword
  }
)(LogIn);

const { NU_Red , NU_Blue, NU_White, NU_Grey } = colors

const styles = StyleSheet.create({

  errorText: {
    color: NU_Red,
    width: '100%',
    display: 'flex',
    textAlign: 'center'
  }
});
