import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const SearchBar = ({requestPictures, isFetching}) => {
  const [searchInput, setSearchInput] = useState('');

  const submit = () => {
    requestPictures(searchInput, 1);
    setSearchInput('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        value={searchInput}
        placeholder="enter pictures categore"
        onChangeText={setSearchInput}
        style={styles.input}
      />
      <Button
        title="Search pictures"
        onPress={submit}
        disabled={isFetching || !searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '65%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10,
  },
});

export default SearchBar;
