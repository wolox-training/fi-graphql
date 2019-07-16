const axios = require('axios');

exports.getAlbum = id => axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
