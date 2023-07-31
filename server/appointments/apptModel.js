import { Sequelize, DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class ApptModel extends Model {}

const generateApptUUID = () => {
    const uuid = uuidv4();

    // Extract the first 20 characters from the UUID and return it
    return uuid.substring(0, 20);
};

ApptModel.init(
    {
        id: {
            type: DataTypes.STRING(20),
            defaultValue: generateApptUUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                len: [20, 20], // 20 char long
            },
        },
        patientName: {
            type: DataTypes.STRING,
            allowNull: false,
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
        hcp: {
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
