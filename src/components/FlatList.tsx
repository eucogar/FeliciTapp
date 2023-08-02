import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

export const Carousel = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item }} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={300} // Customize this value to adjust the image spacing
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  itemContainer: {
    width: 300, // Customize the width of each image item
    height: 200, // Customize the height of each image item
    marginHorizontal: 10, // Customize the horizontal spacing between images
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
