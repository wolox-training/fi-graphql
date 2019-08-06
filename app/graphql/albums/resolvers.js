const { getAlbum, getAlbums } = require('../../services/album'),
  { album: Album } = require('../../models'),
  logger = require('../../logger'),
  apiErrors = require('../../errors');

exports.album = id => {
  logger.info(`Requesting album with id: ${id}`);
  return getAlbum(id).then(response => response.data);
};

exports.albums = ({ offset = 0, limit = 20, orderBy = null, filter = null }) => {
  logger.info(
    `Requesting album list with the following params ${JSON.stringify({ offset, limit, orderBy, filter })}`
  );
  return getAlbums().then(response => {
    const filteredData = filter
      ? response.data.filter(album => album.title.indexOf(filter) !== -1)
      : response.data;
    const sortedData = orderBy
      ? filteredData.sort((first, second) => (first[orderBy] > second[orderBy] ? 1 : -1))
      : filteredData;
    return sortedData.slice(offset, offset + limit);
  });
};

exports.buyAlbum = (albumId, user) =>
  getAlbum(albumId).then(response => {
    const album = response.data;
    if (album) {
      return Album.findAll({ where: { user_id: user.dataValues.id, id: album.id } }).then(alreadyBought => {
        if (alreadyBought.length) {
          throw apiErrors.badRequest('The user has already bought that album');
        }
        logger.info(`The user bought album ${album.id}`);
        return Album.createModel({ title: album.title, user_id: user.dataValues.id });
      });
    }
    throw apiErrors.badRequest('The album does not exists');
  });
