'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(sequelize.models.Peserta)
  };

  User.beforeCreate(user => {
    user.role = user.role.toUpperCase()
    return user
  })

  User.afterDestroy(user => {
    return sequelize.models.Peserta.destroy({
      where: {
        userId: user.id
      }
    })
  })
  return User;
};
