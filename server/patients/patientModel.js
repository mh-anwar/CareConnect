import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: 'data.db',
});

export default class PatientModel extends Model {}
const generatePatientUUID = () => {
    const uuid = uuidv4();

    // Extract the first 15 characters from the UUID and return it
    return uuid.substring(0, 15);
};
PatientModel.init(
    {
        id: {
            type: DataTypes.STRING(15),
            defaultValue: generatePatientUUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                len: [15, 15], // 15 chars long
            },
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
            validate: {
                isIn: {
                    args: ['Male', 'Female', 'Prefer Not To Say'],
                },
            },
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

PatientModel.sync()
    .then(() => {
        console.log('Patient table created successfully.');
    })
    .catch((error) => {
        console.error('Error creating Patient table:', error);
    });
