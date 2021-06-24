const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        image: {
            type: DataTypes.BLOB('long')
        },
        pdf: {
            type: DataTypes.BLOB('long')
        }
    })
};