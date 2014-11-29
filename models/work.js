"use strict";

module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define("Work", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    kind: DataTypes.STRING,
    estimated_minute: DataTypes.INTEGER,
    status: DataTypes.STRING
    //  enumerize :status, in: [:backlog, :todo, :draft, :refused, :progress, :questioning, :done
  }, {
    classMethods: {
      associate: function(models) {
        Work.belongsTo(models.Project);
      }
    }
  });

  return Work;
};