import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BottomTab = () => {
  return (
    <View style={styles.BottomTab}>
      <TouchableOpacity style={styles.TIcons}>
        <Image source={require('../Images/f_t_p/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TIcons}>
        <Image source={require('../Images/f_t_p/Bell.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TIcons}>
        <Image source={require('../Images/f_t_p/Menu.png')} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  BottomTab: {
    position: 'absolute',
    backgroundColor: '#190A24',
    width: '100%',
    height: 55,
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TIcons: {
    margin: 25,
  },
});

export default BottomTab;
