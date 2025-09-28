const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/api/transactions', (req, res) => {
    // Return the list of transactions from the database
    res.json([]);
});

app.post('/api/transactions', (req, res) => {
    const transaction = req.body;
    // Save the transaction to the database
    res.status(201).json({ status: 'Transaction has been recorded' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});