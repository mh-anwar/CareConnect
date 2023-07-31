import { Sequelize, DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class HCPModel extends Model {}
const generateApptUUID = () => {
    const uuid = uuidv4();

    // Extract the first 18 characters from the UUID and return it
    return uuid.substring(0, 18);
};
HCPModel.init(
    {
        id: {
            type: DataTypes.STRING(18),
            defaultValue: generateApptUUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                len: [18, 18], // 18 char long
            },
        },
        healthProviderName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        doctor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

HCPModel.sync()
    .then(() => {
        console.log('HPC table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Patient table:', error);
    });
