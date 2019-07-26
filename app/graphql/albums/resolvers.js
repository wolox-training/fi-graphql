const { getAlbum, getAlbums } = require('../../services/album'),
  logger = require('../../logger');

exports.album = id => {
  logger.info(`Requesting album with id: ${id}`);
  return getAlbum(id).then(response => response.data);
};

exports.albums = params => {
  logger.info(`Requesting album list with the following params ${params.toString()}`);
  return getAlbums(params).then;
};
