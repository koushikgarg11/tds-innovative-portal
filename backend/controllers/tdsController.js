const TDSRecord = require('../models/TDSRecord');

const calculateTDS = async (req, res) => {
  const { salary, deductions, rate } = req.body;
  if (!salary || !rate) return res.status(400).json({ error: 'Salary and rate required' });

  const taxableIncome = salary - (deductions || 0);
  const tds = (taxableIncome * rate) / 100;

  const record = await TDSRecord.create({
    user: req.user._id,
    salary,
    deductions,
    rate,
    tds
  });

  res.json(record);
};

const getTDSRecords = async (req, res) => {
  const records = await TDSRecord.find({ user: req.user._id }).sort({ date: -1 });
  res.json(records);
};

module.exports = { calculateTDS, getTDSRecords };
