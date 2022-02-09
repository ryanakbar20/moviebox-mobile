import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

export default function Card({data}) {
  const xml = `<svg width="84" height="18" viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0.440308L11.751 6.11631L18 6.97956L13.452 11.3506L14.562 17.5598L9 14.5846L3.43725 17.5598L4.548 11.3506L0 6.97956L6.249 6.11631L9 0.440308Z" fill="#ECAD03"/>
  <path d="M31 0.440308L33.751 6.11631L40 6.97956L35.452 11.3506L36.562 17.5598L31 14.5846L25.4373 17.5598L26.548 11.3506L22 6.97956L28.249 6.11631L31 0.440308Z" fill="#ECAD03"/>
  <path d="M53 0.440308L55.751 6.11631L62 6.97956L57.452 11.3506L58.562 17.5598L53 14.5846L47.4373 17.5598L48.548 11.3506L44 6.97956L50.249 6.11631L53 0.440308Z" fill="#ECAD03"/>
  <path d="M75 0.440308L77.751 6.11631L84 6.97956L79.452 11.3506L80.562 17.5598L75 14.5846L69.4373 17.5598L70.548 11.3506L66 6.97956L72.249 6.11631L75 0.440308Z" fill="#ECAD03"/>
  </svg>
  `;

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
        <SvgXml width={200} xml={xml} />
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
    marginBottom: 15,
  },
});
