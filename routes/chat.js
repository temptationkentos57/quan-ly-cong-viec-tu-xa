const express = require('express');
const router = express.Router();

// Lấy lịch sử trò chuyện
router.get('/', (req, res) => {
  res.send('Lịch sử trò chuyện');
});

module.exports = router;
