/* @flow */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const PreviousButton = () => {
  return (
  <TouchableOpacity style={styles.button}>
    <Image style={styles.img} source={require('../../assets/img/previous.png')}/>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60
  },
  button: {
    padding: 5
  }
});

export default PreviousButton;
