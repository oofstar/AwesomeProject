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
    const listing = this.props.listing
    const price = listing.price_formatted.split(' ')[0];
    console.log(listing.img_url)
    return (
      <View style={styles.container}>
      <Text style={styles.title}>{listing.title}</Text>
      <Image style={styles.image} source={{ uri: listing.img_url }} />
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.stats}>{listing.bedroom_number} bedroom, {listing.bathroom_number} bathroom {listing.property_type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  title: {
    fontSize: 25,
  },

  stats: {
    marginRight: 10,
  },

  price: {
    fontSize: 25,
    textAlign: 'left',
  },

  container: {
    flex: 1,
    paddingTop: 65,
  },

  image: {
    height: 300,
  },
});
