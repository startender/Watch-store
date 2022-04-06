const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Example extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Admin }) {
      // define association here
      this.belongsTo(Admin, {
        foreignKey: 'adminId',
      });
    }
  }
  Example.init({
    title: DataTypes.STRING,
    adminId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Example',
  });
  return Example;
};
