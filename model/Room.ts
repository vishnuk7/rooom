import mongoose, { Mongoose } from 'mongoose';

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name'],
		trim: true,
		maxLength: [100, 'Room name cannot exceed 100 characters'],
	},
	price: {
		type: Number,
		required: [true, 'Please enter room price'],
		maxLength: [4, 'Room price cannot exceed 4 digits'],
	},
	description: {
		type: String,
		required: [true, 'Please enter room description'],
	},
	address: {
		type: String,
		required: [true, 'Pleas enter room address'],
	},
	internet: {
		type: Boolean,
		default: false,
	},
	room_cleaning: {
		type: Boolean,
		default: false,
	},
	washing_machine: {
		type: Boolean,
		default: false,
	},
	air_conditioned: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 0,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	category: {
		type: String,
		required: [true, 'Please enter room category'],
		enum: {
			values: ['Room in share', 'Student accommodation', 'Whole properties for rent'],
		},
		message: 'Please select correct category for room',
	},
	reviews: [
		{
			user: {
				type: mongoose.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
		},
	],
	images: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
		required: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Room', roomSchema);
