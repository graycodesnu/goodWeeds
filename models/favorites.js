// ** Will contain:
//   - User ID 
//   - Strain ID
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
                }
    },
        strain_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'strain',
                key: 'id'
                }
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

module.exports = favorites