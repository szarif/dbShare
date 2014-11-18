'use strict';

/*
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/*
 * Database Schema
 */
var DatabaseSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Database name',
		trim: true
	},
	isFree: {
		type: Boolean,
		default: false
	},
	descriptionLong: {
		type: String,
		default: '',
		required: 'Please provide a description of the dddDatabase',
		trim: true
	},
	descriptionShort: {
		type: String,
		default: '',
		required: 'Please provide a description of the Database',
		trim: true
	},
	url: {
		type: String,
		default: '',
		required: 'Please provide the URL of the Database',
		trim: true,
		match: [/^https?:\/\/?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, 'Please enter a valid URL. URL must begin with \'http://\' or \'https://\' and end with a TLD (e.g. \'.com\', \'.net\').']
	},
	//comments goes here
	comments: [{ 
		type: Schema.ObjectId, 
		ref: 'Comment' 
	}],
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Database', DatabaseSchema);