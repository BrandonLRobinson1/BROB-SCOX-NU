import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, CardSection, Card } from '../common';

export default class GetCredentials extends Component {

  render () {
    const { container, section1, section2, buttonSection, buttonPadding, buttonPlacement } = styles;

    return (
      <View style={container}>

        <View style={section1}>
         <Text>yo</Text>
        </View>

        <View style={section2}>
         <Text>yo</Text>
        </View>

        <View style={buttonSection}>

          <View style={buttonPadding} />
          
          <View style={buttonPlacement}>
            <CardSection>
              <Button />
            </ CardSection>
            <CardSection>
              <Button />
            </ CardSection>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'center',
  },
  section1: {
    flex: 1,
    backgroundColor: 'red'
  },
  section2: {
    flex: 1,
    backgroundColor: 'blue'
  },

  buttonSection: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  buttonPadding: {
    flex: 2,
  },
  buttonPlacement: {
    flex: 3,
  }
});

// <Card>
//         <CardSection>
//           <Text>
//             Logo
//           </Text>
//         </ CardSection>
//         <CardSection>
//           <Button />
//         </ CardSection>
//         <CardSection>
//           <Button />
//         </ CardSection>
//       </Card>