module.exports = (sequelize, DataTypes) => {
  const Team_Invites = sequelize.define(
    'Team_Invites',
    {
      account_id: {
        type: DataTypes.INTEGER,
      },
      team_id: {
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
    Team_Invites.belongsTo(models.Teams, { foreignKey: 'team_id' });
    Team_Invites.belongsTo(models.Accounts, { foreignKey: 'account_id' });
  };

  return Team_Invites;
};
