const { Schema, model } = require('mongoose');

const EntrySchema = Schema({
	CompanyId: {
		type: Number
	},
	UserId: {
		type: Number
	},
	Method_APIId: {
		type: String
	},
	Tiempo_ms: {
		type: Number
	},
	Fecha: {
		type: Date
	},
	Source: {
		type: String
	}
});

module.exports = model('Entry', EntrySchema);