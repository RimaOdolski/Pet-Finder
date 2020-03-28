// Creating our Person model
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", { 
      email: {
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
      },

    });

    Person.associate = function(models) {
        models.Person.hasMany(models.Pet);
    };
  
    return Person;
  };
  