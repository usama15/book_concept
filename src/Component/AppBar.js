import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Image, Linking, StyleSheet} from 'react-native';

const AppBar = () => {
  const _goBack = () => console.log('Went back');

  return (
    <Appbar.Header theme={{colors: {primary: 'white'}}}>
      <Appbar.Action icon="menu" />
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Appbar.Action
        icon="web"
        onPress={() => {
          Linking.openURL('https://bookkonceptz.com/');
        }}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '58%',
    height: '100%',
    marginLeft: '10%',
    marginRight: '10%',
  },
});

export default AppBar;