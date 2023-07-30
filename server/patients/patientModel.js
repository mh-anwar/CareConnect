const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// this method follows sequelize documentation and is the same as model extending (Mo's method)

const Patient = sequelize.define('Patient', {
    // Model attributes are defined here
    healthCard: {
        type: DataTypes.OBJECT,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
        // note: allowNull defaults to true
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appointments: {
        type: DataTySpes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    prescriptions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    history: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    referralCode: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// we can access our model with sequelize.models.User.
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

