const express = require('express');
const router = express.Router();

// Lấy danh sách nhiệm vụ
router.get('/', (req, res) => {
  res.send('Danh sách nhiệm vụ');
});

// Tạo nhiệm vụ mới
router.post('/', (req, res) => {
  res.send('Nhiệm vụ đã được tạo');
});

module.exports = router;
