module.exports = (sequelize, DataTypes) => {
  const Team_Members = sequelize.define(
    'Team_Members',
    {
      accountId: {
        type: DataTypes.INTEGER,
      },
      teamId: {
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
    Team_Members.belongsTo(models.Teams, { foreignKey: 'teamId' });
    Team_Members.belongsTo(models.Accounts, { foreignKey: 'accountId' });
  };

  return Team_Members;
};
