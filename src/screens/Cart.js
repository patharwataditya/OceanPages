import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Cart = props => {
  return (
    <View style={styles.container}>
      <View style={styles.UCart}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => props.navigation.navigate('Home')}>
          <Image source={require('../Images/cart/arrow.png')} />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 30, marginLeft: 10, marginTop: 4}}>Cart</Text>
        </View>
      </View>
      <View style={styles.checkOutW}>
        <View style={{width: '100%', flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Thank')}>
            <View style={styles.Cart}>
              <Text style={{alignSelf: 'center'}}>CHECKOUT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E0B2C',
  },
  UCart: {
    marginTop: 30,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
  },
  arrow: {
    backgroundColor: '#311D3E',
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 25,
    maxWidth: 15,
    padding: 20,
    borderRadius: 10,
  },
  checkOutW: {
    position: 'absolute',
    backgroundColor: '#190A24',
    width: '100%',
    height: 70,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Cart: {
    backgroundColor: '#E87B3E',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    elevation: 20,
  },
});

export default Cart;
