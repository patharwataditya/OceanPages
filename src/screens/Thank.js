import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Thank = props => {
  return (
    <View style={styles.container}>
      <View style={styles.png}>
        <Image source={require('../Images/Thank/Thank.png')} />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Cart')}
        style={{position: 'absolute', alignSelf: 'center', bottom: 10}}>
        <View style={styles.done}>
          <Text style={{alignSelf: 'center'}}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E0B2C',
  },
  png: {
    alignItems: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  done: {
    backgroundColor: '#E87B3E',
    paddingVertical: 15,
    paddingLeft: 135,
    paddingRight: 135,
    borderRadius: 10,
    elevation: 20,
    paddingHorizontal: 60,
  },
});

export default Thank;
