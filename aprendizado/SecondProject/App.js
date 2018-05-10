import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.black}/>
        <View style={styles.gray}/>
        <View style={styles.red}/>
        <View style={styles.midred}/>
        <View style={styles.blue}/>
        <View style={styles.midblue}/>
        <View style={styles.green}/>
        <View style={styles.midgreen}/>
        <View style={styles.yellow}/>
        <View style={styles.white}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  black: {
    flex: 1,
    backgroundColor: '#000000',
  },
  white: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  yellow: {
    flex: 1,
    backgroundColor: '#d7e71c',
  },
  gray: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
  red: {
    flex: 1,
    backgroundColor: '#a10c0c',
  },
  blue: {
    flex: 1,
    backgroundColor: '#121d80',
  },
  green: {
    flex: 1,
    backgroundColor: '#00b112',
  },
  midred: {
    flex: 1,
    backgroundColor: '#a61665',
  },
  midblue: {
    flex: 1,
    backgroundColor: '#2d60ac',
  },
  midgreen: {
    flex: 1,
    backgroundColor: '#62cf1f',
  },
});
