const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với ứng dụng Quản Lý Công Việc Từ Xa!');
});

io.on('connection', (socket) => {
  console.log('Một người dùng kết nối');

  socket.on('disconnect', () => {
    console.log('Người dùng đã ngắt kết nối');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});
