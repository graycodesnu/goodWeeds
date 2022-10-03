const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },   
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            defaultValue: 5,
        },
        strain_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'strain',
                key: 'id',
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: Date.now(),
        },
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;

