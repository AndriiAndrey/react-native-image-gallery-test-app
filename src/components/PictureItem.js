import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const PictureItem = ({goToFullScreen, picture}) => {
  const stringMax = (string, maxLet) => {
    if (string.length > maxLet) {
      const newString = string.substring(0, maxLet);
      return newString
        .substring(
          0,
          Math.max(newString.lastIndexOf(' '), newString.lastIndexOf(',') - 1),
        )
        .concat('...');
    } else {
      return string;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToFullScreen(picture.urls.regular)}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{
          uri: picture.urls.small,
        }}
      />
      <Text>{picture.user.username}</Text>
      <Text>{picture.description && stringMax(picture.description, 35)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 200,
    width: '33%',
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: '70%',
  },
});

export default PictureItem;
