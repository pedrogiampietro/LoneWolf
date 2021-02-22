module.exports = (sequelize, DataTypes) => {
  const Team_Invites = sequelize.define(
    'Team_Invites',
    {
      accountId: {
        type: DataTypes.INTEGER,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: 'Team',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true }
  );

  Team_Invites.associate = (models) => {
    Team_Invites.belongsTo(models.Teams, { foreignKey: 'teamId' });
    Team_Invites.belongsTo(models.Accounts, { foreignKey: 'accountId' });
  };

  return Team_Invites;
};
