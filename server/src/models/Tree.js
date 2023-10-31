module.exports = (sequelize, DataTypes) => {
    const Tree = sequelize.define('Tree', {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      nature: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      prosperousarea: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      record: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    });
  
    Tree.associate = function (models) { };
  
    return Tree;
  }
  