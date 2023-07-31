import { Sequelize, DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class DoctorModel extends Model {}
const generateDoctorUUID = () => {
    const uuid = uuidv4();

    // Extract the first 17 characters from the UUID and return it
    return uuid.substring(0, 17);
};

DoctorModel.init(
    {
        id: {
            type: DataTypes.STRING(20),
            defaultValue: generateDoctorUUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                len: [17, 17], // 17 char long
            },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        hcpId: {
            type: DataTypes.STRING,
        },
        timeslots: {
            type: DataTypes.JSON,
        },
        referralID: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);
DoctorModel.sync()
    .then(() => {
        console.log('Patient table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Patient table:', error);
    });
