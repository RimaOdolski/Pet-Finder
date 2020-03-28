// Creating our Owners model
module.exports = function (sequelize, DataTypes) {
  var Lost = sequelize.define("Lost", {

    microchip: {
      type: DataTypes.STRING, //.INTEGER
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    breed: {
      type: DataType.STRING,
      allowNull: false
    },

    color: {
      type: DataType.STRING,
      allowNull: false
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false     
    }
  });

  return Lost;
};
