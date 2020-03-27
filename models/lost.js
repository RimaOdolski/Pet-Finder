// Creating our Owners model
module.exports = function (sequelize, DataTypes) {
  var Lost = sequelize.define("Lost", {

    microchip: {
      type: DataTypes.STRING, //.INTEGER
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    petType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Lost;
};
