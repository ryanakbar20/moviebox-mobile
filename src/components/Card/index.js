import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Card({data}) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://raw.githubusercontent.com/ryanakbar20/images-movie/main/${data?.title}.png`,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{data?.title}</Text>
        <View style={styles.wrapperParagraph}>
          <Text style={styles.paraghraph}>Release : {data?.releaseDate}</Text>
          <Text style={styles.paraghraph}>Director : {data?.director}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
  },
  paraghraph: {
    color: '#DEDEDE',
    fontWeight: '400',
    fontSize: 14,
  },
  poster: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#20222F',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  content: {
    marginLeft: 10,
    padding: 5,
  },
  wrapperParagraph: {
    marginTop: 15,
  },
});
