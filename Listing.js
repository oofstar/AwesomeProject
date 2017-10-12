'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class Listing extends Component {

  render() {
    var listing = this.props.listing
    console.log(listing.img_url)
    return (
      <View style={styles.container}>
      <Image style={styles.thumb} source={{ uri: listing.img_url }} />
        <Text style={styles.description}>{listing.price}</Text>
      </View>
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

  image: {
    width: 300,
  },

  thumb: {
    width: 400,
    height: 300,
    marginLeft: 20,
    marginTop: 100
  },
});
