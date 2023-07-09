import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import ItemList from '../components/ItemList';
import ItemListVertical from '../components/ItemListVertical';
import Slides from '../components/Slides';
import SquareAds from '../components/SquareAds';
import Snackbar from 'react-native-snackbar';

const Home = props => {
  const [query, setQuery] = useState('');
  let cartItemsC = 1;
  const getCurrentHour = new Date().getHours();
  let greet;
  if (getCurrentHour >= 5 && getCurrentHour < 12) {
    greet = 'Good Morning';
  } else if (getCurrentHour >= 12 && getCurrentHour < 18) {
    greet = 'Good Afternoon';
  } else {
    greet = 'Good Evening';
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Ucontents}>
          <Text style={{fontFamily: 'Adamina-Regular', fontSize: 15}}>
            {greet}
          </Text>
          <View style={styles.UMcontents}>
            <Text style={{fontFamily: 'Adamina-Regular', fontSize: 18}}>
              Aditya Patharwat
            </Text>
            <TouchableOpacity
              style={styles.cart}
              onPress={() => props.navigation.navigate('Cart')}>
              <View>
                <Image
                  source={require('../Images/f_t_p/Cart.png')}
                  style={styles.cpng}
                />
              </View>
              <View style={styles.CartT}>
                <Text>{cartItemsC}</Text>
                <Text> Items</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBar}>
          <Image source={require('../Images/searchIcon.png')} />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Search By Title"
            value={query}
            onChangeText={text => setQuery(text)}
            style={{marginLeft: 10}}
          />
        </View>
        <View>
          <Slides />
        </View>
        <View>
          <Text style={styles.titles}>Top Picks</Text>
          <ItemList navigation={props.navigation} />
        </View>
        <View>
          <Text style={styles.titles}>Featured</Text>
          <SquareAds />
        </View>
        <View>
          <Text style={styles.titles}>Best Sellers</Text>
          <ItemListVertical navigation={props.navigation} />
        </View>
      </ScrollView>
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E0B2C',
  },
  searchBar: {
    backgroundColor: '#311D3E',
    marginHorizontal: 18,
    marginVertical: 25,
    width: '90%',
    borderRadius: 30,
    elevation: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  titles: {
    fontSize: 14,
    fontFamily: 'Adamina-Regular',
    marginLeft: 16,
  },
  Ucontents: {
    marginTop: 41,
    marginHorizontal: 12,
  },
  UMcontents: {
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart: {
    backgroundColor: '#E87B3E',
    width: 95,
    height: 29,
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 20,
  },
  cpng: {
    width: 20,
    height: 20,
    marginVertical: 5,
    marginLeft: -10,
  },
  CartT: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Home;
