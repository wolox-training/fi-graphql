'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'album',
    {
      title: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        references: 'users',
        referencesKey: 'id'
      }
    },
    {
      paranoid: true,
      underscored: true
    }
  );
  Album.assosiate = models => {
    Album.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  Album.createModel = album => Album.create(album);

  Album.getOne = album => Album.findOne({ where: album });

  Album.getAll = () => Album.findAll();

  Album.getByTitle = title => Album.getOne({ title });

  Album.prototype.updateModel = props => this.update(props);
  return Album;
};
