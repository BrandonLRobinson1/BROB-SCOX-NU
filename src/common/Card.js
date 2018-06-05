import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    const { CardStyles } = styles;
    return (
      <View style={styles.CardStyles}>
          {props.children}
      </View>
    )
}

const styles = StyleSheet.create({
  CardStyles: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
}); 

export { Card };
