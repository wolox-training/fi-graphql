const axios = require('axios'),
  config = require('../../config');

const baseUrl = config.common.albumsBaseUrl;
exports.getAlbum = id => axios.get(`${baseUrl}/albums/${id}`);

exports.getAlbums = () => axios.get(`${baseUrl}/albums`);
