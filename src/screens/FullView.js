import React from 'react';
import {View, Image} from 'react-native';

const FullView = ({route, navigation}) => {
  const {pictureUrl} = route.params;
  return (
    <View>
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMode="stretch"
        source={{
          uri: pictureUrl,
        }}
      />
    </View>
  );
};

export default FullView;
