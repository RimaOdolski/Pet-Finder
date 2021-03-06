// Creating our Owners model
module.exports = function (sequelize, DataTypes) {
  var Found = sequelize.define("Found", {

    microchip: {
      type: DataTypes.STRING, //.INTEGER
      allowNull: false
    },

    name: { //PET NAME
      type: DataTypes.STRING,
      allowNull: false
    },

    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },

    color: {
      type: DataTypes.STRING,
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

  return Found;
};
