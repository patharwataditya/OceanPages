import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Product = ({route, ...props}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/product/background.png')}
        style={styles.backgroundImage}>
        <View style={styles.ucontents}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../Images/product/Arrow.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>{item.Title}</Text>
          <TouchableOpacity>
            <Image source={require('../Images/product/Threedots.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Image source={item.ImagePath} style={styles.bookpng} />
          </View>
          <View style={{marginTop: 25}}>
            <View style={styles.info}>
              <View style={styles.infotext}>
                <Text style={styles.infotextTitle}>Ratings</Text>
                <Text style={styles.infotextValue}>{item.Rating}</Text>
              </View>
              <Image source={require('../Images/product/line.png')} />
              <View style={styles.infotext}>
                <Text style={styles.infotextTitle}>Number Of Pages</Text>
                <Text style={styles.infotextValue}>{item.Pages}</Text>
              </View>
              <Image source={require('../Images/product/line.png')} />
              <View style={styles.infotext}>
                <Text style={styles.infotextTitle}>Price</Text>
                <Text style={styles.infotextValue}>₹{item.Price}</Text>
              </View>
            </View>
            <View style={styles.infobox}></View>
          </View>
        </View>
        <ScrollView style={styles.bottomc}>
          <View style={styles.desc}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Adamina-Regular',
                fontSize: 20,
              }}>
              Description
            </Text>
            <Text style={styles.des}>{item.Description}</Text>
          </View>
          <View style={styles.atcw}>
            <TouchableOpacity>
              <View style={styles.heart}>
                <Image
                  source={require('../Images/product/Heart.png')}
                  style={{height: 50, width: 50}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.atc}>
                <Text style={{fontSize: 25}}>Add To Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  ucontents: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookpng: {
    alignSelf: 'center',
    marginTop: 50,
  },
  infobox: {
    alignItems: 'center',
    backgroundColor: '#1E0B2C',
    opacity: 1,
    marginHorizontal: 15,
    height: 85,
    borderRadius: 15,
    opacity: 0.4,
    elevation: 70,
  },
  info: {
    position: 'absolute',
    marginLeft: 15,
    marginRight: 15,
    height: 85,
    width: 330,
    borderRadius: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  infotext: {
    alignItems: 'center',
    marginVertical: 10,
  },
  infotextTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infotextValue: {
    color: '#fff',
    fontSize: 16,
  },
  bottomc: {
    backgroundColor: '#1E0B2C',
    marginTop: 35,
    height: 600,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  desc: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  des: {
    marginTop: 10,
    textAlign: 'justify',
    lineHeight: 20,
  },
  heart: {
    backgroundColor: '#311D3E',
    width: 50,
    borderRadius: 10,
  },
  atcw: {
    marginVertical: 30,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  atc: {
    backgroundColor: '#E87B3E',
    marginLeft: 10,
    height: 50,
    width: 264,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Product;
