import {View, Text} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Slides = () => {
  const images = [
    require('../Images/slides/1.png'),
    require('../Images/slides/2.png'),
    require('../Images/slides/3.png'),
    require('../Images/slides/4.png'),
    require('../Images/slides/5.png'),
    require('../Images/slides/6.png'),
  ];
  return (
    <View style={{marginBottom: 15}}>
      <SliderBox
        images={images}
        dotColor="#1E0B2C"
        autoplay={true}
        autoplayInterval={3000}
        circleLoop={true}
      />
    </View>
  );
};

export default Slides;
