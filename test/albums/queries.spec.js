const { query } = require('../server.spec'),
  { getAlbum, getAlbums } = require('./graphql'),
  albumFactory = require('../factories/album');

describe.only('albums', () => {
  describe('queries', () => {
    it('should get album properly', () =>
      albumFactory.create().then(album =>
        query(getAlbum(album.id)).then(res => {
          expect(res.data).toEqual({
            album: {
              title: album.title,
              author: album.author
            }
          });
        })
      ));

    it('should get all users', () =>
      albumFactory.createMany(5).then(() =>
        query(getAlbums()).then(res => {
          expect(res.data.users).toHaveLength(5);
        })
      ));

    it('should return null when fetching a non existing user', () =>
      query(getAlbum(876545678)).then(res => {
        expect(res.data).toBeNull();
      }));

    it('should return an empty array wheren there are no users', () =>
      query(getAlbums()).then(res => {
        expect(res.data.users).toEqual([]);
      }));
  });
});
