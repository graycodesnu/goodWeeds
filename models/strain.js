// ** Will contain 
//   - Strain Name 
//   - Image 
//   - Positive Effects  
//   - Negative effects 
//   - Type 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Strain extends Model {}

Strain.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },   
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        positive_effects: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        negative_effects: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'strain'
    }
);

module.exports = Strain;
