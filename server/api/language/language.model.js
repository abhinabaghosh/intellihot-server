'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LanguageSchema = new Schema({
		additionalType: String,
		alternateName: String,
		description: String,
		image: String,
		name: String,
		potentialAction: String,
		sameAs: String,
		url: String,
		active: Boolean,
		isDelete: Boolean
});

module.exports = mongoose.model('Language', LanguageSchema);