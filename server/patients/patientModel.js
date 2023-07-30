const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// this method follows sequelize documentation and is the same as model extending (Mo's method)

const Patient = sequelize.define('Patient', {
    // Model attributes are defined here
    healthCard: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // note: allowNull defaults to true
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    appointments: {
        type: DataTySpes.ARRAY(DataTypes.STRING)
    },
    prescriptions: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    history: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    referralCode: {
        type: DataTypes.STRING
    }
});

// we can access our model with sequelize.models.User.
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

