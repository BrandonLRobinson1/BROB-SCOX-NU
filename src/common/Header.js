import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    const { headerStyle, headerText } = styles;
    return (
      <View style={headerStyle}>
        <Text style={headerText}>
          {props.headerText}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  headerStyle: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      height: 70,
      paddingTop: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    headerText: {
      fontSize: 20
    }
  }); 
  
export { Header };