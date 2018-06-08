import React from 'react';
import { View, StyleSheet } from 'react-native';

const SectionSmall = props => (
  <View style={[styles.container, props.contentStyle]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export { SectionSmall };