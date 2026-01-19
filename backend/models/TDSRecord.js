const mongoose = require('mongoose');

const tdsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  salary: { type: Number, required: true },
  deductions: { type: Number, default: 0 },
  rate: { type: Number, required: true },
  tds: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TDSRecord', tdsSchema);
