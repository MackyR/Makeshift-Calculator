import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Keys extends Component {
  render() {
    const {value, handleOnPress} = this.props;
    return (
        <TouchableOpacity 
          style ={styles.container}
          onPress={()=> handleOnPress(value)}>

          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 26
    }

  });