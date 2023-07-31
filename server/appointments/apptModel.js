import { Sequelize, DataTypes, Model } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class Appt extends Model {}

// model / schema for Appt

Appt.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.INET,
            allowNull: false,
        },
        doctor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
    }
);

Appt.sync()
    .then(() => {
        console.log('Appt table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Appt table:', error);
    });
