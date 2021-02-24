module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define(
    'Accounts',
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER,
      },
      passwordResetToken: {
        type: DataTypes.STRING,
        select: false,
      },
      passwordResetExpires: {
        type: DataTypes.DATE,
        select: false,
      },
      jwtVersion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { freezeTableName: true }
  );

  Accounts.associate = (models) => {
    Accounts.hasMany(models.Teams, { foreignKey: 'owner_id' });
  };

  Accounts.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  return Accounts;
};
