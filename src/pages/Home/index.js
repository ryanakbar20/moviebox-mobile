import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Card, Header} from '../../components';
import {GET_MOVIES} from '../../graphql/movie';

export default function Home() {
  const {data} = useQuery(GET_MOVIES);
  console.log(data);

  const [search, setSearch] = useState('');

  function datasets(movies) {
    return movies?.filter(film =>
      film?.title?.toLowerCase()?.includes(search?.toLowerCase()),
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#B8B8B8"
        onChangeText={setSearch}
      />
      <Text style={styles.heading}>Most Popular</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {datasets(data?.allFilms?.films)?.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </ScrollView>
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
  searchBar: {
    backgroundColor: '#474747',
    color: '#DEDEDE',
    borderRadius: 10,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    paddingBottom: 10,
  },
});
