import {useQuery} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Card, Header} from '../../components';
import {GET_DETAIL_MOVIE} from '../../graphql/movie';

export default function Detail({route, navigation}) {
  const {data} = useQuery(GET_DETAIL_MOVIE, {
    variables: {id: route?.params?.id},
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} />
      <Card data={data?.film} />
      <Text style={styles.paraghraph}>{data?.film?.openingCrawl}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17161B',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  paraghraph: {
    color: '#DEDEDE',
    fontWeight: '400',
    fontSize: 14,
  },
});
