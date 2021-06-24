const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 5000;

async function assertDatabaseConnectionOk() {
	try {
		await sequelize.sync().authenticate();
	} catch (error) {
		console.log('Unable to connect to the database:');
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express on port ${PORT}...`);

	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}`);
	});
}

init();