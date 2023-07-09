import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SquareAds = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/* <Text>hello</Text> */}
        <Image
          source={require('../Images/featured/purple/1.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../Images/featured/purple/2.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../Images/featured/purple/3.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../Images/featured/purple/4.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E0B2C',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  image: {
    width: 160,
    height: 160,
    margin: 10,
  },
});

export default SquareAds;
