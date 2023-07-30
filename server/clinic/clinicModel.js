const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export default class Clinic extends Model {
  instanceLevelMethod() {
      return 'bar';
  }
}

Clinic.init({
  // Model attributes are defined here
  healthProviderName: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING
  },
  postalCode: {
    type: DataTypes.STRING
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  doctors: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  timeslots: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Doctor' // We need to choose the model name
});