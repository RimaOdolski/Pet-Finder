// Creating our Pets model
module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
  
      microchip: {
        type: DataTypes.STRING, //.INTEGER
        allowNull: false,
        primaryKey: true
      },
  
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      //if true, owner lost their pet
      //if false, another person found this pet
      isOwner: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      }
    });

    Pet.associate = function (models) {
        models.Pet.belongsTo(models.Person, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
    };
  
    return Pet;
  };
  