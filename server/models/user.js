'use strict';

const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate(instance, options){
        instance.password = hashPassword(instance.password)
      }
    }
    ,sequelize});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};