'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .changeColumn('users', 'name', {
        type: Sequelize.STRING,
        allowNull: true
      })
      .then(() =>
        queryInterface.changeColumn('users', 'lastName', {
          type: Sequelize.STRING,
          allowNull: true
        })
      ),
  down: (queryInterface, Sequelize) =>
    queryInterface
      .changeColumn('users', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      })
      .then(() =>
        queryInterface.changeColumn('users', 'lastName', {
          type: Sequelize.STRING,
          allowNull: false
        })
      )
};
