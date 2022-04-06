const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Example }) {
      // define association here
      this.hasMany(Example, {
        foreignKey: 'adminId',
      });
    }
  }
  Admin.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
