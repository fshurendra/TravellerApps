import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textButton}>Sign In</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F84164',
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 70,
  },
  textButton: {color: 'white'},
});
