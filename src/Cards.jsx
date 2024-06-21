import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimensions';

const Cards = ({ name, image, navigation }) => {
  return (
    <TouchableOpacity style={[styles.cardContainer, styles.shadow]} onPress={() => navigation.navigate('Details', { name })}>
      <ImageBackground
        source={image}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    overflow: 'hidden', // Required for shadow on iOS
  },
  cardImage: {
    height: deviceHeight / 5,
    width: deviceWidth / 2 - 50,
    borderRadius: 16,
    overflow: 'hidden', // Clip image to borderRadius for shadow on iOS
  },
  imageStyle: {
    borderRadius: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold', // Make the font slightly bolder
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Cards;
