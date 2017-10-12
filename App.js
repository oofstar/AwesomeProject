'use strict';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS, } from 'react-native';

class SearchPage extends React.Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

export default class PropertyFinder extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },

  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
