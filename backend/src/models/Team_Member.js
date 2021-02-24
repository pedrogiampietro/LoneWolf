module.exports = (sequelize, DataTypes) => {
  const Team_Members = sequelize.define(
    'Team_Members',
    {
      account_id: {
        type: DataTypes.INTEGER,
      },
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: 'team',
          key: 'id',
        },
      },
      rank: {
        type: DataTypes.INTEGER,
      },
      nick: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Team_Members.associate = (models) => {
    Team_Members.belongsTo(models.Teams, { foreignKey: 'team_id' });
    Team_Members.belongsTo(models.Accounts, { foreignKey: 'account_id' });
  };

  return Team_Members;
};
