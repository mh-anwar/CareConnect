const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export default class Doctor extends Model {
  instanceLevelMethod() {
      return 'bar';
  }
}

Doctor.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  officeLocation: {
    type: DataTypes.STRING
  },
  acceptsVirtualAppointments: {
    type: DataTypes.BOOLEAN
  },
  timeslots: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Doctor' // We need to choose the model name
});