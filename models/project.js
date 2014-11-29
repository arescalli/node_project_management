"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    description: DataTypes.STRING    
  }, {
    classMethods: {
      associate: function(models) {
        Project.hasMany(models.Work);
        Project.hasMany(models.Customer);
      }
    }
  });

  return Project;
};