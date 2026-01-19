const express = require('express');
const router = express.Router();
const { calculateTDS, getTDSRecords } = require('../controllers/tdsController');
const { protect } = require('../middleware/authMiddleware');

router.post('/calculate', protect, calculateTDS);
router.get('/records', protect, getTDSRecords);

module.exports = router;
