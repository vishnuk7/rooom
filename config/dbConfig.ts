import mongoose from 'mongoose';

export const dbConnect = async () => {
	// if mongodb is not ready then it return nothing
	if (mongoose.connection.readyState >= 1) {
		console.log('Not ready');
		return;
	}

	const URI = process.env.DB_URI as string;

	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
	} catch (err) {
		console.log(err);
	}
};
