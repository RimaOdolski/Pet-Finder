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
  