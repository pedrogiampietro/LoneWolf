module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define(
    'Teams',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.DATE,
        select: false,
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      camps: {
        type: DataTypes.STRING,
        select: false,
      },
      victory: {
        type: DataTypes.DATE,
        select: false,
      },
      losses: {
        type: DataTypes.DATE,
        select: false,
      },
      country: {
        type: DataTypes.DATE,
        select: false,
      },
    },
    { freezeTableName: true }
  );

  Teams.associate = (models) => {
    // Team.hasMany(models.Team_Member, { foreignKey: 'teamId' });
    Teams.belongsTo(models.Accounts, { foreignKey: 'accountId' });
    // Team.hasMany(models.Team_Invite, { foreignKey: 'teamId' });
  };

  return Teams;
};
