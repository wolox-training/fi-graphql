'use strict';

module.exports = {
  up: queryInterface => queryInterface.renameColumn('users', 'firstName', 'name')
};
