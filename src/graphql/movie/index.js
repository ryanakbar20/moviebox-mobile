import {gql} from '@apollo/client';

const GET_MOVIES = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
      }
    }
  }
`;

const GET_DETAIL_MOVIE = gql`
  query GetDetailFilms($id: ID!) {
    film(id: $id) {
      id
      title
      releaseDate
      director
      openingCrawl
    }
  }
`;

export {GET_MOVIES, GET_DETAIL_MOVIE};
