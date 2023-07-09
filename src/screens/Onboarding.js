import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Onboarding = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../Images/f_t_p/logo.png')} />
      </View>
      <View>
        <View style={styles.OceanPages}>
          <Image source={require('../Images/f_t_p/OceanPages.png')} />
        </View>
        <View style={styles.quote}>
          <Text style={styles.quotet}>
            "Discover the treasures of the written word, where the pages dance
            with the rhythm of the sea."
          </Text>
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity
          style={styles.Loginbutton}
          onPress={() => props.navigation.navigate('LogIn')}>
          <Text style={{fontSize: 24}}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Signupbutton}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{fontSize: 24, color: '#3B2747'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7942A4',
  },
  logo: {
    width: 257,
    height: 260,
    marginLeft: 50,
    marginTop: 12,
  },
  OceanPages: {
    marginLeft: 80,
    marginTop: -5,
  },
  quote: {
    width: 229,
    height: 70,
    alignItems: 'center',
    marginLeft: 65,
    marginTop: 15,
  },
  quotet: {
    fontSize: 14,
    textAlign: 'center',
  },
  Loginbutton: {
    backgroundColor: '#3B2747',
    width: 274,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  Signupbutton: {
    backgroundColor: '#A374C1',
    width: 274,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#3B2747',
  },
  btnwrapper: {
    marginBottom: 92,
    marginHorizontal: 43,
    marginTop: 110,
  },
});

export default Onboarding;
