import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>
        <Text style={styles.textLogo}>Movie</Text>
        <Text style={styles.textLogoLight}>box</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textLogo: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
  },
  textLogoLight: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
