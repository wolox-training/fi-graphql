const { getAlbum } = require('../../services/album'),
  logger = require('../../logger');

exports.album = id => {
  logger.info(`Requesting album with id: ${id}`);
  return getAlbum(id).then(response => response.data);
};
