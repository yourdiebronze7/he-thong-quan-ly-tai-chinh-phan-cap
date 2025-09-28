const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/api/transactions', (req, res) => {
    // Trả danh sách giao dịch từ cơ sở dữ liệu
    res.json([]);
});

app.post('/api/transactions', (req, res) => {
    const transaction = req.body;
    // Lưu giao dịch vào cơ sở dữ liệu
    res.status(201).json({ status: 'Transaction recorded' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});