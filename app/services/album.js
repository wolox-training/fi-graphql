const axios = require('axios'),
  config = require('../../config');

const baseUrl = config.common.albumsBaseUrl;
exports.getAlbum = id => axios.get(`${baseUrl}/albums/${id}`);
