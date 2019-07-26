const { getAlbum, getAlbums } = require('../../services/album'),
  logger = require('../../logger');

exports.album = id => {
  logger.info(`Requesting album with id: ${id}`);
  return getAlbum(id).then(response => response.data);
};

exports.albums = ({ offset = 0, limit = 20, orderBy = null }) => {
  logger.info(
    `Requesting album list with the following params ${JSON.stringify({ offset, limit, orderBy })}`
  );
  return getAlbums({ offset, limit, orderBy }).then(response => {
    const sortedData = orderBy
      ? response.data.sort((first, second) => (first[orderBy] > second[orderBy] ? 1 : -1))
      : response.data;
    return sortedData.slice(offset, offset + limit);
  });
};
