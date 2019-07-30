const { gql } = require('apollo-server');

exports.getAlbum = id => gql`
    query {
        album(id: ${id}) {
          title
          artist
        }
      }`;

exports.getAlbums = () => gql`
  query {
    albums {
      title
      artist
      photos
      id
    }
  }
`;
