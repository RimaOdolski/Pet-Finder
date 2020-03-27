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
  
      petType: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Found;
  };