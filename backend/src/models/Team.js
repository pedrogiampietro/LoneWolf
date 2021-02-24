module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define(
    'Teams',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      camps: {
        type: DataTypes.JSON,
        defaultValue: [],
      },
      victory: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      losses: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  Teams.associate = (models) => {
    // Team.hasMany(models.Team_Member, { foreignKey: 'teamId' });
    Teams.belongsTo(models.Accounts, { foreignKey: 'owner_id' });
    // Team.hasMany(models.Team_Invite, { foreignKey: 'teamId' });
  };

  return Teams;
};
