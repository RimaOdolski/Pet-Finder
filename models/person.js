// Creating our Person model
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", { 
      microchip: {
        type: DataTypes.STRING, //.INTEGER
        allowNull: false,
        primaryKey: true
      },
      
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
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    { 
        timestamps: false 
    });

    Person.associate = function(models) {
        models.Person.hasMany(models.Pet);
    };
  
    return Person;
  };
  