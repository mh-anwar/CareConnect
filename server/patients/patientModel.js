import { Sequelize, DataTypes, Model } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class Patient extends Model {}

// model / schema for patient

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        healthCard: {
            type: DataTypes.JSON,
            allowNull: false,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        referralCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
    }
);
Patient.sync()
    .then(() => {
        console.log('Patient table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Patient table:', error);
    });
