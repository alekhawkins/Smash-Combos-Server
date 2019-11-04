module.exports = (sequelize, DataTypes) => {
    const Moves = sequelize.define('moves', {
        character: {
            type: DataTypes.STRING,
            allowNull: false
        },
        moves: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        owner: DataTypes.INTEGER
    })
    return Moves
}