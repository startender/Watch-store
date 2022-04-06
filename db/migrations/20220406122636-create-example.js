module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Examples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      adminId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Examples');
  },
};
