import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class ApptModel extends Model {}

ApptModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        doctor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: {
                    args: ['Virtual', 'In-Person', 'Telephone'],
                },
            },
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

        notifications: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
    }
);

ApptModel.sync()
    .then(() => {
        console.log('Appt table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Appt table:', error);
    });
