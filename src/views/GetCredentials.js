import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, CardSection, Card } from '../common';

export default class GetCredentials extends Component {

  render () {
    const { container, section1, section2, section3 } = styles;

    return (
      <View style={container}>
        <View style={section1}>
         <Text>yo</Text>
        </View>
        <View style={section2}>
         <Text>yo</Text>
        </View>
        <View style={section3}>
        <Card>
        <CardSection>
          <Text>
            Logo
          </Text>
        </ CardSection>
        <CardSection>
          <Button />
        </ CardSection>
        <CardSection>
          <Button />
        </ CardSection>
      </Card>
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
    backgroundColor: 'white'
  },
  section3: {
    flex: 1,
    backgroundColor: 'blue'
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