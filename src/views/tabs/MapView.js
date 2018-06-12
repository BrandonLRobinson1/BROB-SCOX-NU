import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection, Card } from '../../common';
// import { updateFirstName, updateLastName, updateZipCode } from '../../store/signUp/SignUp'; 
import { colors } from '../../Colors';

class MapView extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: ' ',
      loading: false
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {

  }

  render() {
    const {  circleContainer } = styles
    return (
      <Card>

        <View style={circleContainer}>
          <Text>MapView text</Text>
        </View>

        <CardSection>
          <Button
            buttonText="map"
            onPress={() => Actions.Tab()}
          />
        </CardSection>

      </Card>
    )
  }
}

export default connect(
  state => ({
    // firstName: state.signUp.SignUp.firstName,
    // lastName: state.signUp.SignUp.lastName,
    // zipCode: state.signUp.SignUp.zipCode
  }),
  {
    // updateFirstName,
    // updateLastName,
    // updateZipCode
  }
)(MapView);

const { NU_Red , NU_Blue, NU_White, NU_Grey } = colors

const styles = StyleSheet.create({
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