const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test-task-ns', 'root', 'root', { host: 'localhost', dialect: 'mysql' });

const modelDefiners = [
	require('./models/user.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;