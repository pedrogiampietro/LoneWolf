module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
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
    },
    { freezeTableName: true }
  );

  Account.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  return Account;
};
