import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

export default class Patient extends Model {}

// model / schema for patient

Patient.init(
    {
        // Model attributes are defined here
        healthCard: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            // note: allowNull defaults to true
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
        },
        appointments: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        prescriptions: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        history: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
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
