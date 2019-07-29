'use strict';

module.exports = {
  up: queryInterface => queryInterface.removeColumn('users', 'username')
};
