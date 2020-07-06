const mongoose = require('mongoose');
const config = require('config');
const db = require('./keys').mongoURI;

const connectDB = async () => {
	try {
		await   // Connect to MongoDB
		mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
		  .then(() => console.log('MongoDB connected!'));

	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
