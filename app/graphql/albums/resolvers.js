const { getAlbum, getAlbums } = require('../../services/album'),
  logger = require('../../logger');

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
