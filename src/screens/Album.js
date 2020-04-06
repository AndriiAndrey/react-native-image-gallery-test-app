import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {requestPictures} from '../redux/app-reducer';
import PictureItem from '../components/PictureItem';
import SearchBar from '../components/SearchBar';

const Album = ({
  route,
  navigation,
  pictures,
  nextPage,
  isFetching,
  currentQuery,
  requestPictures,
}) => {
  const goToFullScreen = pictureUrl => {
    navigation.navigate('FullView', {pictureUrl: pictureUrl});
  };
  return (
    <View>
      <View style={styles.container}>
        <SearchBar
          requestPictures={requestPictures}
          nextPage={nextPage}
          isFetching={isFetching}
        />

        {pictures.length > 0 ? (
          <FlatList
            style={styles.flatList}
            numColumns={3}
            data={pictures}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PictureItem picture={item} goToFullScreen={goToFullScreen} />
            )}
            onEndReached={() => requestPictures(currentQuery, nextPage)}
          />
        ) : (
          <Text>No results yet, go search something...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  flatList: {
    marginTop: 20,
  },
});

const mapStateToProps = state => ({
  pictures: state.app.pictures,
  nextPage: state.app.nextPage,
  isFetching: state.app.isFetching,
  currentQuery: state.app.currentQuery,
});

const AlbumContainer = connect(
  mapStateToProps,
  {requestPictures},
)(Album);

export default AlbumContainer;
