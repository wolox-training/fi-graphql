const { query } = require('../server.spec'),
  { getAlbum, getAlbums } = require('./graphql'),
  albumFactory = require('../factories/album');

describe('albums', () => {
  describe('queries', () => {
    it('should get album properly', () =>
      albumFactory
        .create({
          title: 'quidem molestiae enim'
        })
        .then(album =>
          query(getAlbum(album.id)).then(res => {
            expect(res.data.album.title).toEqual(album.title);
          })
        ));

    it('should get all albums', () =>
      albumFactory.createMany(5).then(() =>
        query(getAlbums()).then(res => {
          expect(res.data.albums).toHaveLength(20);
        })
      ));

    it('should return null when fetching a non existing album', () =>
      query(getAlbum(876545678)).then(res => {
        expect(res.data).toBeNull();
      }));

    it('should return an empty array wheren there are no albums', () =>
      query(getAlbums()).then(res => {
        expect(res.data.albums).toEqual([]);
      }));
  });
});
