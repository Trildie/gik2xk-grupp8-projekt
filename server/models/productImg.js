module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "productImg",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imgUrl: {
        type: DataTypes.STRING(255)
      }
      
    },
    { underscored: true }
  );
};
