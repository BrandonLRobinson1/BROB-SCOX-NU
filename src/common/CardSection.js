import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  const { CardSectionStyles } = styles;
    return (
      <View style={[styles.CardSectionStyles, props.style]}>
          {props.children}
      </View>
    );
}

const styles = StyleSheet.create({
  CardSectionStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    flexDirection: 'row',
    position: 'relative',
    }
}); 

export { CardSection };